import { z } from 'zod';
import { apiError, apiResponse } from './api/validators';

export type APIError = z.infer<typeof apiError>;
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

export interface Store {
  data: APIData[] | null;
  error: APIError | null;
}
