/// <reference path="../../../types/env.d.ts" />

import { getQuizById, calculateResult, validateAnswers } from '../../../src/lib/quizEngine';
import { generateTextContent, generateImage, buildImagePrompt } from '../../../src/lib/ai';
import { storeImageInR2 } from '../../../src/lib/storage';
import { saveResult, buildImageUrl } from '../../../src/lib/database';
import { checkQuota, incrementQuota, getIdentifier } from '../../../src/lib/quota';
import { generateResultId, QUOTA_CONFIG } from '../../../src/config';

interface OnRequestContext {
  request: Request;
  env: CloudflareEnv;
}

export const onRequestPost: PagesFunction<CloudflareEnv> = async (ctx: OnRequestContext) => {
  const { request, env } = ctx;

  if (request.method !== 'POST') {
    return jsonError(405, 'Method not allowed');
  }

  if (!env.AI || !env.DB || !env.IMAGES) {
    return jsonError(503, 'Service not configured. Bindings are missing.');
  }

  let body: { quizId?: string; answers?: Record<string, string> };
  try {
    const text = await request.text();
    if (text.length > QUOTA_CONFIG.maxRequestSize) {
      return jsonError(413, 'Request too large');
    }
    body = JSON.parse(text);
  } catch {
    return jsonError(400, 'Invalid JSON');
  }

  if (!body || typeof body !== 'object') {
    return jsonError(400, 'Invalid request body');
  }

  const quizId = body.quizId;
  const answers = body.answers;

  if (!quizId || typeof quizId !== 'string') {
    return jsonError(400, 'Quiz ID is required');
  }
  if (!answers || typeof answers !== 'object') {
    return jsonError(400, 'Answers are required');
  }

  const quiz = getQuizById(quizId);
  if (!quiz) {
    return jsonError(404, 'Quiz not found');
  }

  if (!validateAnswers(quiz, answers)) {
    return jsonError(400, 'Invalid or incomplete answers');
  }

  const identifier = getIdentifier(request);
  const quotaCheck = await checkQuota(env.DB, identifier);
  if (!quotaCheck.allowed) {
    return jsonError(429, quotaCheck.error || 'Daily limit reached');
  }

  const scoreResult = calculateResult(quiz, answers);
  if (!scoreResult) {
    return jsonError(500, 'Failed to calculate result');
  }

  let resultId = generateResultId();
  let attempts = 0;
  while (attempts < 5) {
    try {
      const content = await generateTextContent(
        env.AI,
        quiz,
        scoreResult.result,
        scoreResult.scorePercentage
      );

      const imagePrompt = buildImagePrompt(scoreResult.result, content);
      const imageBytes = await generateImage(env.AI, imagePrompt);

      const objectKey = await storeImageInR2(env.IMAGES, resultId, imageBytes);
      const imageUrl = buildImageUrl(resultId);
      const shareImageUrl = imageUrl;

      await saveResult(env.DB, {
        id: resultId,
        quizId: quiz.id,
        resultKey: scoreResult.resultKey,
        scorePercentage: scoreResult.scorePercentage,
        content,
        imageObjectKey: objectKey,
        imageUrl,
        shareImageUrl,
      });

      await incrementQuota(env.DB, identifier);

      return new Response(
        JSON.stringify({ resultId, success: true }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    } catch (err) {
      attempts++;
      if (attempts >= 5) {
        const message = err instanceof Error ? err.message : 'Generation failed';
        return jsonError(500, message);
      }
      resultId = generateResultId();
      await new Promise((r) => setTimeout(r, 1000));
    }
  }

  return jsonError(500, 'Failed to generate result after multiple attempts');
};

function jsonError(status: number, message: string): Response {
  return new Response(
    JSON.stringify({ error: message, success: false }),
    {
      status,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
