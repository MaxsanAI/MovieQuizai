/// <reference path="../../types/env.d.ts" />

import { QUOTA_CONFIG } from '../config';

interface QuotaCheckResult {
  allowed: boolean;
  count: number;
  limit: number;
  error?: string;
}

function getDateKey(): string {
  return new Date().toISOString().slice(0, 10);
}

export function getIdentifier(request: Request): string {
  const forwarded = request.headers.get('cf-connecting-ip')
    || request.headers.get('x-forwarded-for')
    || 'unknown';
  const ip = forwarded.split(',')[0].trim();
  return `ip:${ip}`;
}

export async function checkQuota(
  db: D1Database,
  identifier: string
): Promise<QuotaCheckResult> {
  const dateKey = getDateKey();
  const row = await db
    .prepare('SELECT generation_count FROM rate_limits WHERE identifier = ? AND date_key = ?')
    .bind(identifier, dateKey)
    .first<{ generation_count: number }>();

  const count = row?.generation_count || 0;
  const limit = QUOTA_CONFIG.maxDailyGenerations;

  if (count >= limit) {
    return {
      allowed: false,
      count,
      limit,
      error: 'You have used all 3 AI results for today. Come back tomorrow for another movie personality.',
    };
  }
  return { allowed: true, count, limit };
}

export async function incrementQuota(
  db: D1Database,
  identifier: string
): Promise<void> {
  const dateKey = getDateKey();
  const now = new Date().toISOString();
  await db
    .prepare(
      `INSERT INTO rate_limits (identifier, date_key, generation_count, last_generation_at, created_at, updated_at)
       VALUES (?, ?, 1, ?, ?, ?)
       ON CONFLICT(identifier, date_key) DO UPDATE SET
         generation_count = generation_count + 1,
         last_generation_at = ?,
         updated_at = ?`
    )
    .bind(identifier, dateKey, now, now, now, now, now)
    .run();
}
