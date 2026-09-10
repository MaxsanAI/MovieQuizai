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

  const jsonMatch = cleaned.match(
    /```(?:json)?\s*([\s\S]*?)```/
  );

  if (jsonMatch) {
    cleaned = jsonMatch[1].trim();
  }

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

function getGenderInstruction(
  gender: Gender
): string {
  if (gender === 'female') {
    return `
The user selected female.

Personalize the result for a female user.
Use natural female pronouns and gendered descriptions
where appropriate.

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
where appropriate.

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
  "imagePrompt": "A concise cinematic image prompt for the exact movie character"
}

IMPORTANT IMAGE CHARACTER IDENTITY RULE:

The imagePrompt MUST directly include the exact movie character name "${result.name}".

The imagePrompt must describe the actual recognizable on-screen movie character "${result.name}".

Do NOT generate a generic person.

Do NOT generate a generic interpretation of the archetype.

Do NOT generate a lookalike.

Do NOT invent a new character.

Do NOT replace "${result.name}" with another character.

Do NOT substitute another movie character.

The character's established movie appearance must be preserved.

Preserve recognizable facial features, hairstyle, approximate age, wardrobe, accessories, body type and signature visual details.

If "${result.name}" is portrayed by a well-known actor, use that actor's recognizable on-screen appearance as the visual reference.

The image must contain ONE main character only.

Do not add other recognizable movie characters.

Return ONLY the JSON object.`;
}

export function buildImagePrompt(
  result: QuizResult,
  generatedContent: GeneratedResultContent,
  gender: Gender
): string {
  const characterName = result.name;

  const trim = (
    value: string,
    max: number
  ): string => {
    return value
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, max);
  };

  const characterDescription =
    trim(
      result.imagePromptBase || '',
      350
    );

  const aiDescription =
    trim(
      generatedContent.imagePrompt || '',
      350
    );

  const genderText =
    gender === 'female'
      ? 'female'
      : 'male';

  const prompt = `Create one photorealistic cinematic movie-poster portrait of the exact movie character "${characterName}".

IDENTITY:
"${characterName}" must be the recognizable on-screen movie character, not a generic person, archetype, lookalike, invented character, or different character.

Preserve the established appearance of "${characterName}", including recognizable facial features, hairstyle, approximate age, wardrobe, accessories, body type and signature visual details.

If "${characterName}" is portrayed by a famous actor, use that actor's recognizable on-screen appearance as the visual reference.

USER PRESENTATION:
The user selected ${genderText}. Keep the recognizable identity of "${characterName}" while presenting the subject as ${genderText}.

CHARACTER DETAILS:
${characterDescription}

ADDITIONAL DETAILS:
${aiDescription}

STYLE:
Premium photorealistic cinematic photography, dramatic movie lighting, realistic skin texture, realistic human anatomy, strong cinematic composition, portrait orientation, centered character, unobstructed recognizable face, wardrobe and environment appropriate to "${characterName}".

STRICT:
ONE CHARACTER ONLY.

No other people.
No other movie characters.
No background people.
No duplicate character.
No collage.
No split screen.
No alternate character.
No generic person.
No random actor.
No text.
No title.
No captions.
No logos.
No watermark.
No UI.`;

  return prompt
    .trim()
    .slice(0, 2000);
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
        sanitizeJsonString(
          responseText
        );

      const parsed =
        JSON.parse(
          jsonStr
        ) as GeneratedResultContent;

      if (
        !parsed.resultTitle ||
        !parsed.description ||
        !parsed.shareCaption
      ) {
        throw new Error(
          'Missing required fields in AI response'
        );
      }

      if (
        !Array.isArray(parsed.traits) ||
        parsed.traits.length === 0
      ) {
        parsed.traits =
          result.traits;
      }

      if (!parsed.imagePrompt) {
        parsed.imagePrompt =
          result.imagePromptBase;
      }

      return parsed;

    } catch (err) {
      lastError = err as Error;

      if (
        attempt <
        AI_CONFIG.maxRetries
      ) {
        await new Promise(
          (resolve) =>
            setTimeout(
              resolve,
              1000
            )
        );
      }
    }
  }

  return {
    resultTitle:
      result.name,

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
      /*
       * Cloudflare image models enforce a maximum
       * prompt length. Keep a final safety limit here
       * even if another caller sends a longer prompt.
       */
      const safePrompt =
        prompt.length > 2000
          ? prompt.slice(0, 2000)
          : prompt;

      const response = await ai.run(
        AI_CONFIG.imageModel,
        {
          prompt: safePrompt,
          steps:
            AI_CONFIG.imageSteps
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
      lastError =
        err as Error;

      if (
        attempt <
        AI_CONFIG.maxRetries
      ) {
        await new Promise(
          (resolve) =>
            setTimeout(
              resolve,
              1500
            )
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
