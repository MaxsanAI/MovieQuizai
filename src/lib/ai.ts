/// <reference path="../../types/env.d.ts" />

import { AI_CONFIG } from '../config';
import type {
  Quiz,
  QuizResult,
  GeneratedResultContent
} from '../types';

type Gender = 'male' | 'female';

function sanitizeJsonString(raw: string): string {
  let cleaned = raw.trim();

  // Remove markdown code blocks
  const jsonMatch = cleaned.match(
    /```(?:json)?\s*([\s\S]*?)```/
  );

  if (jsonMatch) {
    cleaned = jsonMatch[1].trim();
  }

  // Find first { and last }
  const firstBrace = cleaned.indexOf('{');
  const lastBrace = cleaned.lastIndexOf('}');

  if (
    firstBrace !== -1 &&
    lastBrace !== -1
  ) {
    cleaned = cleaned.slice(
      firstBrace,
      lastBrace + 1
    );
  }

  return cleaned;
}

/**
 * Converts the internal gender value into natural
 * instructions for the AI.
 */
function getGenderInstruction(
  gender: Gender
): string {
  if (gender === 'female') {
    return `
The user selected female.

Personalize the result for a female user.
Use natural female pronouns and gendered descriptions
where grammatically appropriate.

The generated movie character representation should
be female.

Do not mention that gender was collected.
Do not explain this instruction.
`;
  }

  return `
The user selected male.

Personalize the result for a male user.
Use natural male pronouns and gendered descriptions
where grammatically appropriate.

The generated movie character representation should
be male.

Do not mention that gender was collected.
Do not explain this instruction.
`;
}

export function buildTextPrompt(
  quiz: Quiz,
  result: QuizResult,
  scorePercentage: number,
  gender: Gender
): string {
  const genderInstruction =
    getGenderInstruction(gender);

  return `You are a witty, cinematic entertainment writer for a viral movie personality quiz platform called MovieQuiz.

A user just completed the quiz "${quiz.title}" and their result is "${result.name}" with a ${scorePercentage}% match.

Result archetype: ${result.archetype}
Base description: ${result.description}
Base traits: ${result.traits.join(', ')}
Base strength: ${result.strength}
Base weakness: ${result.weakness}
Base movie energy: ${result.movieEnergy}
Base humorous observation: ${result.humorousObservation}

${genderInstruction}

Write a personalized, cinematic, witty result.

Be confident, entertaining, dramatic, and social-media friendly.

Avoid generic AI language.

Make it feel like a premium movie reveal.

The result should feel specifically written for this person and their selected gender while still staying faithful to the original result archetype.

Do not change the underlying movie character archetype into a different character simply because of gender.

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

The imagePrompt must describe the same result archetype as the result.

The imagePrompt MUST represent the user as ${gender === 'female' ? 'a female woman' : 'a male man'}.

The imagePrompt should describe:

- cinematic dramatic lighting
- a strong character-focused portrait
- movie-poster composition
- an environment appropriate to the result
- wardrobe appropriate to the result
- cinematic atmosphere
- realistic human anatomy
- premium film photography
- portrait orientation

Generate the character as the actual, recognizable on-screen movie character,
not as a generic person or a loose interpretation of the archetype.

Preserve the character's established appearance from the movie, including
facial features, hairstyle, age, clothing, accessories, physical appearance,
and overall visual identity.

The generated image should clearly be recognizable as that specific movie
character to someone familiar with the film.

Do NOT replace the character with a generic person who merely resembles the
character archetype.

If the character is portrayed by a well-known actor, use the actor's
recognizable on-screen appearance as the visual reference for the character.

The character's identity is more important than creating a generic cinematic
interpretation.


Do NOT include:
- text
- logos
- watermarks
- UI elements
- interface elements
- borders
- captions

Return ONLY the JSON object.`;
}

export function buildImagePrompt(
  result: QuizResult,
  generatedContent: GeneratedResultContent,
  gender: Gender
): string {
  const base = result.imagePromptBase;

  const aiPrompt =
    generatedContent.imagePrompt ||
    base;

  const genderVisual =
    gender === 'female'
      ? `
The main character must be clearly female.
Create a realistic adult woman as the protagonist.
Use feminine facial structure, feminine styling,
and natural female anatomy.
`
      : `
The main character must be clearly male.
Create a realistic adult man as the protagonist.
Use masculine facial structure, masculine styling,
and natural male anatomy.
`;

  return `
${aiPrompt}

${base}

${genderVisual}

The image is a premium cinematic movie poster portrait.

The subject must be the visual embodiment of the quiz result archetype.

Keep the personality, wardrobe, environment,
attitude, mood, and cinematic identity faithful
to the result.

Photorealistic cinematic photography.
Dramatic studio-quality lighting.
Strong contrast.
Atmospheric depth.
Detailed face.
Natural skin texture.
Realistic anatomy.
Professional movie cinematography.
Premium blockbuster poster composition.
Portrait orientation.

No text.
No title.
No subtitles.
No logos.
No watermark.
No interface.
No UI.
No border.
No extra characters.
No collage.
No split screen.
`;
}

export async function generateTextContent(
  ai: Ai,
  quiz: Quiz,
  result: QuizResult,
  scorePercentage: number,
  gender: Gender
): Promise<GeneratedResultContent> {
  const prompt = buildTextPrompt(
    quiz,
    result,
    scorePercentage,
    gender
  );

  let lastError: Error | null = null;

  for (
    let attempt = 0;
    attempt <= AI_CONFIG.maxRetries;
    attempt++
  ) {
    try {
      const response = await ai.run(
        AI_CONFIG.textModel,
        {
          messages: [
            {
              role: 'system',
              content:
                'You are a witty cinematic entertainment writer. Return only valid JSON.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          max_tokens:
            AI_CONFIG.textMaxTokens
        }
      );

      const responseText =
        (
          response as {
            response?: string;
          }
        ).response || '';

      if (!responseText) {
        throw new Error(
          'Empty AI text response'
        );
      }

      const jsonStr =
        sanitizeJsonString(responseText);

      const parsed =
        JSON.parse(
          jsonStr
        ) as GeneratedResultContent;

      // Validate required fields
      if (
        !parsed.resultTitle ||
        !parsed.description ||
        !parsed.shareCaption
      ) {
        throw new Error(
          'Missing required fields in AI response'
        );
      }

      // Ensure traits is an array
      if (
        !Array.isArray(parsed.traits) ||
        parsed.traits.length === 0
      ) {
        parsed.traits = result.traits;
      }

      // Fallback for image prompt
      if (!parsed.imagePrompt) {
        parsed.imagePrompt =
          result.imagePromptBase;
      }

      return parsed;

    } catch (err) {
      lastError = err as Error;

      if (
        attempt < AI_CONFIG.maxRetries
      ) {
        await new Promise(
          (resolve) =>
            setTimeout(resolve, 1000)
        );
      }
    }
  }

  // Fallback to base content
  return {
    resultTitle: result.name,
    description: result.description,
    traits: result.traits,
    strength: result.strength,
    weakness: result.weakness,
    movieEnergy: result.movieEnergy,
    humorousObservation:
      result.humorousObservation,

    shareCaption:
      `I got ${scorePercentage}% ${result.name} on MovieQuiz. What's your movie character?`,

    imagePrompt:
      result.imagePromptBase
  };
}

export async function generateImage(
  ai: Ai,
  prompt: string
): Promise<Uint8Array> {
  let lastError: Error | null = null;

  for (
    let attempt = 0;
    attempt <= AI_CONFIG.maxRetries;
    attempt++
  ) {
    try {
      const response = await ai.run(
        AI_CONFIG.imageModel,
        {
          prompt,
          steps: AI_CONFIG.imageSteps
        }
      );

      const base64Image =
        (
          response as {
            image?: string;
          }
        ).image;

      if (!base64Image) {
        throw new Error(
          'No image in AI response'
        );
      }

      const binaryString =
        atob(base64Image);

      const bytes =
        new Uint8Array(
          binaryString.length
        );

      for (
        let i = 0;
        i < binaryString.length;
        i++
      ) {
        bytes[i] =
          binaryString.charCodeAt(i);
      }

      return bytes;

    } catch (err) {
      lastError = err as Error;

      if (
        attempt < AI_CONFIG.maxRetries
      ) {
        await new Promise(
          (resolve) =>
            setTimeout(resolve, 1500)
        );
      }
    }
  }

  throw (
    lastError ||
    new Error(
      'Image generation failed'
    )
  );
}
