import type { Ai } from '@cloudflare/workers-types';
import { AI_CONFIG } from '../config';
import type { Quiz, QuizResult } from './quizEngine';

export type Gender = 'male' | 'female';

export interface GeneratedTextContent {
  resultTitle: string;
  description: string;
  traits: string[];
  strength: string;
  weakness: string;
  movieEnergy: string;
  humorousObservation: string;
  shareCaption: string;
}

function getGenderInstruction(gender: Gender): string {
  if (gender === 'female') {
    return `
The user is female.
Use natural female pronouns when referring to the USER.

IMPORTANT:
The user's gender has absolutely NO effect on the movie character.

The movie character must keep the canonical gender, sex, identity,
appearance and personality established by the original movie.

Do NOT gender-swap the character.
Do NOT feminize a male character.
Do NOT masculinize a female character.
`;
  }

  return `
The user is male.
Use natural male pronouns when referring to the USER.

IMPORTANT:
The user's gender has absolutely NO effect on the movie character.

The movie character must keep the canonical gender, sex, identity,
appearance and personality established by the original movie.

Do NOT gender-swap the character.
Do NOT feminize a male character.
Do NOT masculinize a female character.
`;
}

function buildTextPrompt(
  quiz: Quiz,
  result: QuizResult,
  scorePercentage: number,
  gender: Gender
): string {
  return `
You are an expert movie personality analyst.

Create a personalized movie-character quiz result.

QUIZ:
${quiz.title}

QUIZ CATEGORY:
${quiz.category}

CHARACTER:
${result.name}

CHARACTER DESCRIPTION:
${result.description}

MATCH SCORE:
${scorePercentage}%

${getGenderInstruction(gender)}

CRITICAL CHARACTER RULE:

The result character is exactly:
"${result.name}"

"${result.name}" is the established movie character from the original movie.

NEVER replace this character with another character.
NEVER create a gender-swapped version.
NEVER change the character's canonical gender.
NEVER describe a different character.
NEVER say the user literally is the actor.
NEVER change the character's established identity.

The user's gender applies ONLY to wording about the USER.
It does NOT apply to the movie character.

Create writing that feels cinematic, personal, entertaining and specific.

Return ONLY valid JSON.

Use EXACTLY this structure:

{
  "resultTitle": "A short cinematic result title",
  "description": "A detailed personalized explanation of why the user matches this movie character.",
  "traits": [
    "Trait 1",
    "Trait 2",
    "Trait 3",
    "Trait 4",
    "Trait 5"
  ],
  "strength": "The user's strongest quality represented by this character.",
  "weakness": "The user's biggest weakness represented by this character.",
  "movieEnergy": "A short cinematic description of the energy this character represents.",
  "humorousObservation": "A short funny but relevant observation about the user's personality match.",
  "shareCaption": "A short social-media-friendly caption revealing the character result."
}

Rules:

- resultTitle must be a string.
- description must be a string.
- traits must contain exactly 5 strings.
- strength must be a string.
- weakness must be a string.
- movieEnergy must be a string.
- humorousObservation must be a string.
- shareCaption must be a string.
- Do not return null.
- Do not return undefined.
- Do not omit any field.
- Do not use markdown.
- Do not add text outside the JSON.
`;
}

function normalizeString(
  value: unknown,
  fallback: string
): string {
  return typeof value === 'string' && value.trim()
    ? value.trim()
    : fallback;
}

export async function generateTextContent(
  ai: Ai,
  quiz: Quiz,
  result: QuizResult,
  scorePercentage: number,
  gender: Gender
): Promise<GeneratedTextContent> {
  const prompt = buildTextPrompt(
    quiz,
    result,
    scorePercentage,
    gender
  );

  try {
    const response = await ai.run(
      AI_CONFIG.textModel as any,
      {
        messages: [
          {
            role: 'system',
            content:
              'You are a precise movie personality analyst. Return only valid JSON when JSON is requested.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
      } as any
    );

    const raw =
      typeof response === 'string'
        ? response
        : (response as any)?.response ??
          (response as any)?.result ??
          '';

    if (!raw || typeof raw !== 'string') {
      throw new Error('AI returned an empty response');
    }

    let cleaned = raw.trim();

    if (cleaned.startsWith('```')) {
      cleaned = cleaned
        .replace(/^```json\s*/i, '')
        .replace(/^```\s*/i, '')
        .replace(/\s*```$/i, '')
        .trim();
    }

    const parsed = JSON.parse(cleaned);

    const safeTraits = Array.isArray(parsed.traits)
      ? parsed.traits
          .filter(
            (trait: unknown): trait is string =>
              typeof trait === 'string' && trait.trim().length > 0
          )
          .map((trait: string) => trait.trim())
          .slice(0, 5)
      : [];

    while (safeTraits.length < 5) {
      safeTraits.push('Cinematic personality');
    }

    return {
      resultTitle: normalizeString(
        parsed.resultTitle,
        result.name
      ),

      description: normalizeString(
        parsed.description,
        result.description
      ),

      traits: safeTraits,

      strength: normalizeString(
        parsed.strength,
        'Strong personality'
      ),

      weakness: normalizeString(
        parsed.weakness,
        'Can be unpredictable'
      ),

      movieEnergy: normalizeString(
        parsed.movieEnergy,
        'Cinematic energy'
      ),

      humorousObservation: normalizeString(
        parsed.humorousObservation,
        'You would definitely make this movie more interesting.'
      ),

      shareCaption: normalizeString(
        parsed.shareCaption,
        `I got ${result.name} on MovieQuiz!`
      ),
    };
  } catch (error) {
    console.error(
      'AI text generation failed:',
      error
    );

    return {
      resultTitle: result.name,
      description: result.description,
      traits: [
        'Determined',
        'Adaptable',
        'Independent',
        'Bold',
        'Resilient',
      ],
      strength: 'Strong character and determination.',
      weakness: 'Can sometimes take things too far.',
      movieEnergy: 'Classic cinematic protagonist energy.',
      humorousObservation:
        'You probably would not survive this movie by playing it safe.',
      shareCaption:
        `I got ${result.name} on MovieQuiz!`,
    };
  }
}

export function buildImagePrompt(
  result: QuizResult,
  content: GeneratedTextContent,
  _gender: Gender
): string {
  const characterName = result.name;

  const characterDescription =
    result.description ||
    'Recognizable established movie character.';

  const aiDescription =
    content.description || '';

  const prompt = `Create one photorealistic cinematic movie-poster portrait of the exact movie character "${characterName}".

CHARACTER IDENTITY:
"${characterName}" must be the recognizable on-screen movie character from the original movie.

The character's canonical identity MUST remain unchanged.

Do NOT gender-swap the character.
Do NOT change male characters into female characters.
Do NOT change female characters into male characters.
Do NOT create a gender-swapped version.
Do NOT invent a new character.
Do NOT replace the character with another movie character.
Do NOT create a generic person.

PRESERVE THE ORIGINAL CHARACTER:

Preserve the established appearance of "${characterName}", including:

- canonical sex and gender
- recognizable facial features
- hairstyle
- approximate canonical age
- body type
- wardrobe
- accessories
- signature visual details
- recognizable identity
- appearance associated with the original movie

If "${characterName}" is portrayed by a famous actor, use that actor's recognizable on-screen appearance specifically as the visual reference for this character.

CHARACTER DESCRIPTION:
${characterDescription}

RESULT CONTEXT:
${aiDescription}

VISUAL REQUIREMENTS:

Premium photorealistic cinematic photography.
Realistic human anatomy.
Realistic skin texture.
Realistic facial proportions.
Dramatic movie lighting.
High-end theatrical movie-poster quality.
Portrait orientation.
Centered character.
Full unobstructed recognizable face.
Clearly recognizable as the established movie character.

ONE CHARACTER ONLY.

STRICT NEGATIVE REQUIREMENTS:

No other people.
No other movie characters.
No background people.
No duplicate character.
No second person.
No group.
No collage.
No split screen.
No alternate character.
No gender-swapped character.
No generic person.
No random actor.
No unrelated celebrity.
No invented character.
No text.
No title.
No captions.
No logos.
No watermark.
No UI.`;

  return prompt.slice(0, 2000);
}

export async function generateImage(
  ai: Ai,
  prompt: string
): Promise<Uint8Array> {
  if (!prompt.trim()) {
    throw new Error(
      'Image generation prompt is required'
    );
  }

  const response = await ai.run(
    AI_CONFIG.imageModel as any,
    {
      prompt,
    } as any
  );

  const result = response as any;

  if (result instanceof ArrayBuffer) {
    return new Uint8Array(result);
  }

  if (result instanceof Uint8Array) {
    return result;
  }

  if (result?.image) {
    if (typeof result.image === 'string') {
      const binary = atob(result.image);
      const bytes = new Uint8Array(binary.length);

      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }

      return bytes;
    }

    if (result.image instanceof Uint8Array) {
      return result.image;
    }

    if (result.image instanceof ArrayBuffer) {
      return new Uint8Array(result.image);
    }
  }

  throw new Error(
    'AI image generation returned an unsupported response'
  );
}
