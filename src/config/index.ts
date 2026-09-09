export const SITE_CONFIG = {
  name: 'MovieQuiz',
  tagline: 'Meet your cinematic alter ego',
  description:
    'Take a movie personality quiz and discover your cinematic alter ego. Get a unique AI-generated movie poster and share your result.',
  url: 'https://moviequiz.example',
  themeColor: '#0a0a0f',
  ogImage: '/og-default.svg',
};

export const AI_CONFIG = {
  textModel: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
  imageModel: '@cf/black-forest-labs/flux-1-schnell',
  imageSteps: 4,
  textMaxTokens: 1200,
  generationTimeoutMs: 45000,
  maxRetries: 1,
};

export const QUOTA_CONFIG = {
  maxDailyGenerations: 3,
  maxRequestSize: 16384,
  rateWindowMs: 60_000,
  rateMaxRequests: 10,
};

export const STORAGE_CONFIG = {
  r2ObjectPrefix: 'results/',
  imageContentType: 'image/jpeg',
};

export const RESULT_ID_LENGTH = 10;
export const RESULT_ID_ALPHABET = 'abcdefghijklmnopqrstuvwxyz0123456789';

export function generateResultId(): string {
  const alphabet = RESULT_ID_ALPHABET;
  const length = RESULT_ID_LENGTH;
  let id = '';
  for (let i = 0; i < length; i++) {
    id += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return id;
}

export function isValidResultId(id: string): boolean {
  return /^[a-z0-9]{10}$/.test(id);
}
