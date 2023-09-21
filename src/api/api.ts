import { Store } from '../types';
import { normalizeApiData } from './helpers';
import { apiError } from './validators';

export const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export const getDictionaryApiData = async (word: string): Promise<Store> => {
  const url = `${API_URL}/${word}`;
  const data = await (await fetch(url)).json();

  const isErrorResponse = apiError.safeParse(data);

  return isErrorResponse.success
    ? { data: null, error: isErrorResponse.data }
    : { data: normalizeApiData(data), error: null };
};
