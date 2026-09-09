/// <reference path="../../../types/env.d.ts" />

import { getResultById, parseResultRow } from '../../../src/lib/database';
import { getQuizById } from '../../../src/lib/quizEngine';
import { isValidResultId } from '../../../src/config';

interface OnRequestContext {
  request: Request;
  env: CloudflareEnv;
  params: { id: string };
}

export const onRequestGet: PagesFunction<CloudflareEnv> = async (ctx: OnRequestContext) => {
  const { env, params } = ctx;
  const id = params.id;

  if (!id || !isValidResultId(id)) {
    return jsonError(400, 'Invalid result ID');
  }

  if (!env.DB) {
    return jsonError(503, 'Database not configured');
  }

  const row = await getResultById(env.DB, id);
  if (!row) {
    return jsonError(404, 'Result not found');
  }

  const parsed = parseResultRow(row);
  const quiz = getQuizById(parsed.quizId);

  return new Response(
    JSON.stringify({
      id: parsed.id,
      quiz: quiz ? { slug: quiz.slug, title: quiz.title, emoji: quiz.emoji } : null,
      resultKey: parsed.resultKey,
      scorePercentage: parsed.scorePercentage,
      resultTitle: parsed.resultTitle,
      description: parsed.description,
      traits: parsed.traits,
      strength: parsed.strength,
      weakness: parsed.weakness,
      movieEnergy: parsed.movieEnergy,
      humorousObservation: parsed.humorousObservation,
      shareCaption: parsed.shareCaption,
      imageUrl: parsed.imageUrl,
      shareImageUrl: parsed.shareImageUrl,
      createdAt: parsed.createdAt,
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600',
      },
    }
  );
};

function jsonError(status: number, message: string): Response {
  return new Response(
    JSON.stringify({ error: message }),
    {
      status,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
