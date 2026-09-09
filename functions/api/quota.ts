/// <reference path="../../types/env.d.ts" />

import {
  checkQuota,
  getIdentifier
} from '../../src/lib/quota';

interface OnRequestContext {
  request: Request;
  env: CloudflareEnv;
}

export const onRequestGet: PagesFunction<CloudflareEnv> = async (
  ctx: OnRequestContext
) => {
  const { request, env } = ctx;

  if (!env.DB) {
    return new Response(
      JSON.stringify({
        count: 0,
        limit: 3,
        allowed: true
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  const identifier = getIdentifier(request);

  const quota = await checkQuota(
    env.DB,
    identifier
  );

  return new Response(
    JSON.stringify({
      count: quota.count,
      limit: quota.limit,
      allowed: quota.allowed,
      error: quota.error
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
      }
    }
  );
};
