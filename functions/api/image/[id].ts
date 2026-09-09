/// <reference path="../../../types/env.d.ts" />

import { getImageFromR2 } from '../../../src/lib/storage';
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
    return new Response('Not found', { status: 404 });
  }

  if (!env.IMAGES) {
    return new Response('Storage not configured', { status: 503 });
  }

  const imageBytes = await getImageFromR2(env.IMAGES, id);
  if (!imageBytes) {
    return new Response('Image not found', { status: 404 });
  }

  return new Response(imageBytes, {
    status: 200,
    headers: {
      'Content-Type': 'image/jpeg',
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
