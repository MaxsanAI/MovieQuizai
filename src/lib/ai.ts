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

IMPORTANT IMAGE CHARACTER IDENTITY RULE:

The imagePrompt MUST be anchored to the exact movie character named in the result:

"${result.name}"

The imagePrompt MUST represent the actual recognizable on-screen movie character "${result.name}".

Do NOT generate a generic person.

Do NOT generate a generic interpretation of the archetype.

Do NOT generate a lookalike.

Do NOT invent a new character.

Do NOT replace "${result.name}" with another character.

Do NOT turn "${result.name}" into a random male or female character.

The exact character identity must remain "${result.name}".

The imagePrompt MUST represent the user as ${gender === 'female' ? 'a female woman' : 'a male man'} while preserving the established identity and recognizable visual characteristics of "${result.name}".

Preserve the named character's established movie appearance, including:

- recognizable facial features
- hairstyle
- approximate age
- clothing
- accessories
- body type
- physical appearance
- signature visual details
- attitude
- overall screen identity

If the character is portrayed by a well-known actor, use that actor's recognizable on-screen appearance as the visual reference for the named character.

The character's identity is more important than a generic cinematic interpretation.

The imagePrompt should describe:

- cinematic dramatic lighting
- a strong character-focused portrait
- movie-poster composition
- an environment appropriate to the character
- wardrobe appropriate to the character
- cinematic atmosphere
- realistic human anatomy
- premium film photography
- portrait orientation
- one single main character
- recognizable face
- unobstructed face
- strong cinematic composition

Do not add other recognizable movie characters.

Do NOT include:

- text
- logos
- watermarks
- UI elements
- interface elements
- borders
- captions
- additional characters
- collage
- split screen

Return ONLY the JSON object.`;
}

export function buildImagePrompt(
  result: QuizResult,
  generatedContent: GeneratedResultContent,
  gender: Gender
): string {
  const characterName = result.name;

  const base = result.imagePromptBase;

  const aiPrompt =
    generatedContent.imagePrompt ||
    base;

  const genderVisual =
    gender === 'female'
      ? `
The user selected female.

The representation must be clearly female.

Create a realistic adult female representation
while preserving the identity of the movie character
"${characterName}".

Use realistic female anatomy and natural feminine
styling only where it does not destroy the character's
recognizable identity.
`
      : `
The user selected male.

The representation must be clearly male.

Create a realistic adult male representation
while preserving the identity of the movie character
"${characterName}".

Use realistic male anatomy and natural masculine
styling only where it does not destroy the character's
recognizable identity.
`;

  return `
CRITICAL CHARACTER IDENTITY:

The exact movie character is:

"${characterName}"

Generate "${characterName}" as the actual recognizable
on-screen movie character.

The character name "${characterName}" is the PRIMARY
IDENTITY ANCHOR for this image.

The generated image MUST depict "${characterName}".

Do NOT replace "${characterName}" with a generic person.

Do NOT replace "${characterName}" with an archetype.

Do NOT create an inspired-by character.

Do NOT create a lookalike.

Do NOT invent a different character.

Do NOT substitute another movie character.

Do NOT generate multiple characters.

The final image must have ONE primary character only.

CHARACTER APPEARANCE:

Preserve the established appearance and visual identity
of "${characterName}" from the movie.

Preserve recognizable:

- facial features
- hairstyle
- approximate age
- clothing
- accessories
- body type
- physical appearance
- signature details
- attitude
- posture
- overall screen appearance

If "${characterName}" is portrayed by a well-known actor,
use that actor's recognizable on-screen appearance as
the visual reference for "${characterName}".

The character should be immediately recognizable to
someone familiar with the movie.

SOURCE CHARACTER DESCRIPTION:

${base}

AI-GENERATED CHARACTER DESCRIPTION:

${aiPrompt}

${genderVisual}

IMPORTANT:

The character identity must remain "${characterName}".

The selected gender must NOT cause the AI to replace
the movie character with another person or character.

The image should remain faithful to "${characterName}"
while applying the selected gender presentation.

The subject is one single movie character:

"${characterName}"

IMAGE STYLE:

Premium cinematic movie poster portrait.

Photorealistic cinematic photography.

Dramatic studio-quality lighting.

Strong contrast.

Atmospheric depth.

Detailed recognizable face.

Natural skin texture.

Realistic human anatomy.

Professional movie cinematography.

Premium blockbuster poster composition.

Portrait orientation.

Strong character-focused composition.

The character must be centered and clearly visible.

The face must be unobstructed and recognizable.

Use a cinematic environment appropriate to
"${characterName}".

Use wardrobe appropriate to
"${characterName}".

Use visual details that reinforce the established
movie identity of "${characterName}".

The background must support the character but must
not contain another person.

ONE CHARACTER ONLY.

Do not add secondary people.

Do not add background characters.

Do not add other recognizable movie characters.

Do not create a group scene.

Do not create a collage.

Do not create split screen.

Do not create multiple versions of the character.

NEGATIVE INSTRUCTIONS:

No text.

No title.

No subtitles.

No captions.

No logos.

No watermark.

No interface.

No UI.

No border.

No extra characters.

No background people.

No collage.

No split screen.

No duplicate character.

No alternate character.

No generic person.

No random actor.

No unrelated face.

No fantasy reinterpretation unless it is part of
the established visual identity of "${characterName}".

FINAL IDENTITY CHECK:

Before generating the image, prioritize this exact
identity:

"${characterName}"

The final image must visually represent
"${characterName}" as the recognizable movie character.
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

    description:
      result.description,

    traits:
      result.traits,

    strength:
      result.strength,

    weakness:
      result.weakness,

    movieEnergy:
      result.movieEnergy,

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
