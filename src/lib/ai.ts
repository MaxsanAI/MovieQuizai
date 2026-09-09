/// <reference path="../../types/env.d.ts" />

import { AI_CONFIG } from '../config';
import type { Quiz, QuizResult, GeneratedResultContent } from '../types';

function sanitizeJsonString(raw: string): string {
  // Extract JSON from potentially wrapped LLM output
  let cleaned = raw.trim();

  // Remove markdown code blocks
  const jsonMatch = cleaned.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (jsonMatch) {
    cleaned = jsonMatch[1].trim();
  }

  // Find first { and last }
  const firstBrace = cleaned.indexOf('{');
  const lastBrace = cleaned.lastIndexOf('}');
  if (firstBrace !== -1 && lastBrace !== -1) {
    cleaned = cleaned.slice(firstBrace, lastBrace + 1);
  }

  return cleaned;
}

export function buildTextPrompt(
  quiz: Quiz,
  result: QuizResult,
  scorePercentage: number
): string {
  return `You are a witty, cinematic entertainment writer for a viral movie personality quiz platform called MovieQuiz.

A user just completed the quiz "${quiz.title}" and their result is "${result.name}" with a ${scorePercentage}% match.

Result archetype: ${result.archetype}
Base description: ${result.description}
Base traits: ${result.traits.join(', ')}
Base strength: ${result.strength}
Base weakness: ${result.weakness}
Base movie energy: ${result.movieEnergy}
Base humorous observation: ${result.humorousObservation}

Write a personalized, cinematic, witty result. Be confident, entertaining, and social-media friendly. Avoid generic AI language. Make it feel like a premium movie reveal.

Return ONLY valid JSON (no markdown, no commentary) with this exact structure:
{
  "resultTitle": "A punchy title for the result, max 6 words",
  "description": "2-3 sentences describing the person's movie personality in a cinematic, witty style",
  "traits": ["trait1", "trait2", "trait3", "trait4"],
  "strength": "One sentence about their biggest strength, cinematic style",
  "weakness": "One sentence about their weakness, humorous style",
  "movieEnergy": "One phrase describing the movie energy they bring",
  "humorousObservation": "One witty observation about this personality, max 2 sentences",
  "shareCaption": "A social media caption for sharing, max 120 chars, starting with 'I got'",
  "imagePrompt": "A detailed cinematic image prompt for a movie poster style portrait"
}

The imagePrompt should describe a cinematic, dramatic, character-focused portrait with strong lighting and movie-poster aesthetic. It should be unique to this result, not generic. Include mood, environment, lighting, and visual style details. Do NOT include the character name directly - describe the archetype visually. Portrait orientation. No text, no watermarks, no interface elements.

Return ONLY the JSON object.`;
}

export function buildImagePrompt(
  result: QuizResult,
  generatedContent: GeneratedResultContent
): string {
  const base = result.imagePromptBase;
  const aiPrompt = generatedContent.imagePrompt || base;
  return `${aiPrompt}. ${base} Cinematic movie poster style, dramatic lighting, highly detailed, atmospheric, portrait orientation, premium quality, no text, no watermarks, no interface elements, no borders.`;
}

export async function generateTextContent(
  ai: Ai,
  quiz: Quiz,
  result: QuizResult,
  scorePercentage: number
): Promise<GeneratedResultContent> {
  const prompt = buildTextPrompt(quiz, result, scorePercentage);
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= AI_CONFIG.maxRetries; attempt++) {
    try {
      const response = await ai.run(AI_CONFIG.textModel, {
        messages: [
          { role: 'system', content: 'You are a witty cinematic entertainment writer. Return only valid JSON.' },
          { role: 'user', content: prompt },
        ],
        max_tokens: AI_CONFIG.textMaxTokens,
      });

      const responseText = (response as { response?: string }).response || '';
      if (!responseText) {
        throw new Error('Empty AI text response');
      }

      const jsonStr = sanitizeJsonString(responseText);
      const parsed = JSON.parse(jsonStr) as GeneratedResultContent;

      // Validate required fields
      if (!parsed.resultTitle || !parsed.description || !parsed.shareCaption) {
        throw new Error('Missing required fields in AI response');
      }

      // Ensure traits is an array
      if (!Array.isArray(parsed.traits) || parsed.traits.length === 0) {
        parsed.traits = result.traits;
      }

      // Fallback for image prompt
      if (!parsed.imagePrompt) {
        parsed.imagePrompt = result.imagePromptBase;
      }

      return parsed;
    } catch (err) {
      lastError = err as Error;
      if (attempt < AI_CONFIG.maxRetries) {
        // Wait briefly before retry
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }
  }

  // Fallback to base content if all retries fail
  return {
    resultTitle: result.name,
    description: result.description,
    traits: result.traits,
    strength: result.strength,
    weakness: result.weakness,
    movieEnergy: result.movieEnergy,
    humorousObservation: result.humorousObservation,
    shareCaption: `I got ${scorePercentage}% ${result.name} on MovieQuiz. What's your movie character?`,
    imagePrompt: result.imagePromptBase,
  };
}

export async function generateImage(
  ai: Ai,
  prompt: string
): Promise<Uint8Array> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= AI_CONFIG.maxRetries; attempt++) {
    try {
      const response = await ai.run(AI_CONFIG.imageModel, {
        prompt,
        steps: AI_CONFIG.imageSteps,
      });

      const base64Image = (response as { image?: string }).image;
      if (!base64Image) {
        throw new Error('No image in AI response');
      }

      const binaryString = atob(base64Image);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      return bytes;
    } catch (err) {
      lastError = err as Error;
      if (attempt < AI_CONFIG.maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }
    }
  }

  throw lastError || new Error('Image generation failed');
}
