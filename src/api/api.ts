import { Store } from '../types';
import { normalizeApiData } from './helpers';
import { apiResponse } from './validators';

export const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export const getDictionaryApiData = async (word: string): Promise<Store> => {
  const url = `${API_URL}/${word}`;
  const data = await (await fetch(url)).json();
  const parsedData = apiResponse.safeParse(data[0]);
  if (parsedData.success) {
    const normalizedData = normalizeApiData(data);
    return { data: normalizedData, error: null };
  } else {
    return { data: null, error: data };
  }
};
