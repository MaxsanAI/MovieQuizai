/// <reference path="../../types/env.d.ts" />

import { STORAGE_CONFIG } from '../config';

/**
 * Composes a final share card by drawing the AI image with overlay text
 * using SVG, then converting to JPEG. Since Cloudflare Pages Functions
 * runtime supports Respond with binary, we create an SVG composition
 * with the image embedded and render it as a shareable JPEG.
 *
 * However, since we can't easily rasterize SVG in the Workers runtime,
 * we take a different approach: we store the raw AI image in R2 and
 * compose the share card using an SVG overlay that references the image.
 * For OG image purposes, social crawlers need a raster image, so we
 * store the raw AI-generated JPEG as the share image and use HTML/CSS
 * for the visual composition on the result page.
 *
 * The share image stored in R2 is the AI-generated cinematic image itself,
 * which is already a movie-poster style portrait. The "card" composition
 * (with text overlay) is done via HTML/CSS on the result page.
 */
export async function composeShareCard(
  rawImageBytes: Uint8Array
): Promise<Uint8Array> {
  // The raw AI image IS the share card for social media purposes.
  // The visual composition with text (result name, percentage, branding)
  // is rendered on the result page via HTML/CSS overlays.
  // For OG:image, the raw cinematic image is used directly.
  return rawImageBytes;
}

export async function storeImageInR2(
  bucket: R2Bucket,
  resultId: string,
  imageBytes: Uint8Array
): Promise<string> {
  const objectKey = `${STORAGE_CONFIG.r2ObjectPrefix}${resultId}.jpg`;
  await bucket.put(objectKey, imageBytes, {
    httpMetadata: {
      contentType: STORAGE_CONFIG.imageContentType,
      cacheControl: 'public, max-age=31536000, immutable',
    },
  });
  return objectKey;
}

export async function getImageFromR2(
  bucket: R2Bucket,
  resultId: string
): Promise<Uint8Array | null> {
  const objectKey = `${STORAGE_CONFIG.r2ObjectPrefix}${resultId}.jpg`;
  const obj = await bucket.get(objectKey);
  if (!obj) return null;
  const arrayBuffer = await obj.arrayBuffer();
  return new Uint8Array(arrayBuffer);
}
