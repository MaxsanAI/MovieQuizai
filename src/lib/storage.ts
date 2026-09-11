/// <reference path="../../types/env.d.ts" />

import { STORAGE_CONFIG } from '../config';

/**
 * Stores the generated AI image in R2.
 *
 * The generated image is already suitable for direct social sharing,
 * so no additional SVG/card composition is performed here.
 */
export async function storeImageInR2(
  bucket: R2Bucket,
  resultId: string,
  imageBytes: Uint8Array
): Promise<string> {
  if (!resultId || !resultId.trim()) {
    throw new Error('Result ID is required');
  }

  if (!imageBytes || imageBytes.length === 0) {
    throw new Error('Image data is empty');
  }

  const objectKey =
    `${STORAGE_CONFIG.r2ObjectPrefix}${resultId}.jpg`;

  await bucket.put(objectKey, imageBytes, {
    httpMetadata: {
      contentType: STORAGE_CONFIG.imageContentType,
      cacheControl:
        'public, max-age=31536000, immutable',
    },
  });

  return objectKey;
}

/**
 * Loads a generated result image from R2.
 */
export async function getImageFromR2(
  bucket: R2Bucket,
  resultId: string
): Promise<Uint8Array | null> {
  if (!resultId || !resultId.trim()) {
    return null;
  }

  const objectKey =
    `${STORAGE_CONFIG.r2ObjectPrefix}${resultId}.jpg`;

  const object = await bucket.get(objectKey);

  if (!object) {
    return null;
  }

  const arrayBuffer = await object.arrayBuffer();

  if (arrayBuffer.byteLength === 0) {
    return null;
  }

  return new Uint8Array(arrayBuffer);
}
