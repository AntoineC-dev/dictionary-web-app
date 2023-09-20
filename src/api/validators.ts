import { z } from 'zod';

export const apiError = z.object({
  title: z.string(),
  message: z.string(),
  resolution: z.string(),
});

export const apiResponse = z.object({
  word: z.string(),
  phonetic: z.string().optional(),
  phonetics: z
    .object({
      text: z.string().optional(),
      audio: z.string().optional(),
      sourceUrl: z.string().optional(),
      license: z.object({ name: z.string(), url: z.string() }).optional(),
    })
    .array(),
  meanings: z
    .object({
      partOfSpeech: z.string(),
      definitions: z
        .object({
          definition: z.string(),
          synonyms: z.string().array(),
          antonyms: z.string().array(),
          example: z.string().optional(),
        })
        .array(),
      synonyms: z.string().array(),
      antonyms: z.string().array(),
    })
    .array(),
  license: z.object({ name: z.string(), url: z.string() }),
  sourceUrls: z.string().array(),
});
