/// <reference path="../../types/env.d.ts" />

import { SITE_CONFIG } from '../config';
import type { ResultRow, GeneratedResultContent } from '../types';

export async function saveResult(
  db: D1Database,
  params: {
    id: string;
    quizId: string;
    resultKey: string;
    scorePercentage: number;
    content: GeneratedResultContent;
    imageObjectKey: string;
    imageUrl: string;
    shareImageUrl: string;
  }
): Promise<void> {
  const now = new Date().toISOString();

  await db
    .prepare(
      `INSERT INTO results (
        id,
        quiz_id,
        result_key,
        score_percentage,
        result_title,
        description,
        traits_json,
        strength,
        weakness,
        movie_energy,
        humorous_observation,
        share_caption,
        image_prompt,
        image_url,
        share_image_url,
        created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .bind(
      params.id,
      params.quizId,
      params.resultKey,
      params.scorePercentage,
      params.content.resultTitle,
      params.content.description,
      JSON.stringify(params.content.traits),
      params.content.strength,
      params.content.weakness,
      params.content.movieEnergy,
      params.content.humorousObservation,
      params.content.shareCaption,
      params.content.imagePrompt,
      params.imageUrl,
      params.shareImageUrl,
      now
    )
    .run();
}

export async function getResultById(
  db: D1Database,
  id: string
): Promise<ResultRow | null> {
  return db
    .prepare('SELECT * FROM results WHERE id = ?')
    .bind(id)
    .first<ResultRow>();
}

export function buildImageUrl(resultId: string): string {
  return `${SITE_CONFIG.url}/api/image/${resultId}`;
}

export function buildResultUrl(resultId: string): string {
  return `${SITE_CONFIG.url}/result/${resultId}`;
}

export function parseResultRow(row: ResultRow): {
  id: string;
  quizId: string;
  resultKey: string;
  scorePercentage: number;
  resultTitle: string;
  description: string;
  traits: string[];
  strength: string;
  weakness: string;
  movieEnergy: string;
  humorousObservation: string;
  shareCaption: string;
  imagePrompt: string;
  imageUrl: string;
  shareImageUrl: string;
  createdAt: string;
} {
  let traits: string[] = [];

  try {
    const parsedTraits = JSON.parse(row.traits_json);

    if (Array.isArray(parsedTraits)) {
      traits = parsedTraits.filter(
        (trait): trait is string => typeof trait === 'string'
      );
    }
  } catch {
    traits = [];
  }

  return {
    id: row.id,
    quizId: row.quiz_id,
    resultKey: row.result_key,
    scorePercentage: row.score_percentage,
    resultTitle: row.result_title,
    description: row.description,
    traits,
    strength: row.strength,
    weakness: row.weakness,
    movieEnergy: row.movie_energy,
    humorousObservation: row.humorous_observation,
    shareCaption: row.share_caption,
    imagePrompt: row.image_prompt,
    imageUrl: row.image_url,
    shareImageUrl: row.share_image_url,
    createdAt: row.created_at,
  };
}
