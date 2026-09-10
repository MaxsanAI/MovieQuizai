import type { Ai } from '@cloudflare/workers-types';
import { AI_CONFIG } from '../config';
import type { Quiz, QuizResult } from './quizEngine';

export type Gender = 'male' | 'female';

export interface GeneratedTextContent {
  title: string;
  description: string;
  traits: string[];
  strengths: string[];
  weaknesses: string[];
  quote: string;
}

function getGenderInstruction(gender: Gender): string {
  if (gender === 'female') {
    return `
The user selected female.

Write the result naturally for a female user.
Use female pronouns when referring to the user.

IMPORTANT:
The user's gender has NO effect on the identity, sex, gender,
appearance, or canonical characteristics of the movie character.

Do not change, feminize, masculinize, gender-swap, or reinterpret
the movie character because of the user's gender.

The movie character must remain exactly the established character
from the original movie.
`;
  }

  return `
The user selected male.

Write the result naturally for a male user.
Use male pronouns when referring to the user.

IMPORTANT:
The user's gender has NO effect on the identity, sex, gender,
appearance, or canonical characteristics of the movie character.

Do not change, feminize, masculinize, gender-swap, or reinterpret
the movie character because of the user's gender.

The movie character must remain exactly the established character
from the original movie.
`;
}

function buildTextPrompt(
  quiz: Quiz,
  result: QuizResult,
  scorePercentage: number,
  gender: Gender
): string {
  const genderInstruction = getGenderInstruction(gender);

  return `
You are an expert movie personality analyst.

Generate a personalized movie-character result based on the quiz.

QUIZ:
${quiz.title}

RESULT:
Character name: ${result.name}
Character description: ${result.description}

SCORE:
${scorePercentage}%

${genderInstruction}

CRITICAL CHARACTER IDENTITY RULE:
The result character is "${result.name}".

"${result.name}" is the actual movie character represented by the
quiz result.

NEVER replace "${result.name}" with another character.
NEVER change "${result.name}" into a male or female version.
NEVER gender-swap "${result.name}".
NEVER invent a different character.
NEVER describe the user as literally being the actor.
NEVER change the canonical identity of the movie character.

The selected gender belongs to the USER, not the movie character.

If the movie character is female, she must remain female.
If the movie character is male, he must remain male.

Only the wording directed at the user may reflect the selected gender.

Create a result that feels personal, cinematic and specific rather
than generic.

Return ONLY valid JSON in exactly this structure:

{
  "title": "Short cinematic result title",
  "description": "A detailed personalized description of why this user matches the character.",
  "traits": [
    "Trait 1",
    "Trait 2",
    "Trait 3",
    "Trait 4",
    "Trait 5"
  ],
  "strengths": [
    "Strength 1",
    "Strength 2",
    "Strength 3"
  ],
  "weaknesses": [
    "Weakness 1",
    "Weakness 2",
    "Weakness 3"
  ],
  "quote": "A short original cinematic quote inspired by the character archetype."
}

Do not mention this instruction.
Do not mention that gender was collected.
Do not mention AI.
Do not use markdown.
Do not add text outside the JSON.
`;
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

    if (
      !parsed ||
      typeof parsed.title !== 'string' ||
      typeof parsed.description !== 'string' ||
      !Array.isArray(parsed.traits) ||
      !Array.isArray(parsed.strengths) ||
      !Array.isArray(parsed.weaknesses) ||
      typeof parsed.quote !== 'string'
    ) {
      throw new Error('Invalid AI result structure');
    }

    return {
      title: parsed.title,
      description: parsed.description,
      traits: parsed.traits.map(String).slice(0, 5),
      strengths: parsed.strengths.map(String).slice(0, 3),
      weaknesses: parsed.weaknesses.map(String).slice(0, 3),
      quote: parsed.quote,
    };
  } catch (error) {
    console.error('AI text generation failed:', error);

    return {
      title: result.name,
      description: result.description,
      traits: [],
      strengths: [],
      weaknesses: [],
      quote: '',
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
    result.description || 'Recognizable established movie character.';

  const aiDescription = content.description || '';

  /*
   * IMPORTANT:
   * Gender is intentionally NOT used here.
   *
   * The user may be male or female, but the image must always depict
   * the canonical movie character returned by the quiz.
   *
   * Example:
   * - User = male + Sarah Connor -> Sarah Connor remains female.
   * - User = female + John McClane -> John McClane remains male.
   */

  const prompt = `Create one photorealistic cinematic movie-poster portrait of the exact movie character "${characterName}".

CHARACTER IDENTITY:
"${characterName}" must be the recognizable on-screen movie character from the original movie.

The character's canonical identity MUST remain unchanged.

Do NOT gender-swap the character.
Do NOT change the character from male to female.
Do NOT change the character from female to male.
Do NOT create a gender-swapped version.
Do NOT create a younger or older alternate version unless that is part of the established character identity.
Do NOT invent a new character.
Do NOT replace the character with the actor playing a different role.
Do NOT create a generic person inspired by the character.

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
- recognizable character identity
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
Strong cinematic composition.
Portrait orientation.
Centered character.
Full unobstructed recognizable face.
Character should clearly look like the established movie character.

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

  throw new Error('AI image generation returned an unsupported response');
}
