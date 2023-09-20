import { z } from 'zod';

export const apiError = z.object({
  title: z.string(),
  message: z.string(),
  resolution: z.string(),
});

export type APIError = z.infer<typeof apiError>;

export const apiResponse = z.object({
  word: z.string(),
  phonetic: z.string(),
  phonetics: z
    .object({
      text: z.string(),
      audio: z.string(),
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

export type APIResponse = z.infer<typeof apiResponse>;

export interface Definition {
  definition: string;
  example?: string;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

export interface APIData {
  word: string;
  phonetic: {
    text: string;
    audio: string;
  };
  meanings: Meaning[];
  sourceUrl: string;
}
