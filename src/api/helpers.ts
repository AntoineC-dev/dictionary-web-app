import { APIData, APIResponse, Definition } from '../types';

const normalizePhonetics = (data: APIResponse['phonetics']): APIData['phonetic'] => {
  let audio = '';
  let text = '';
  for (let i = 0; i < data.length; i++) {
    const curr = data[i];
    if (!!curr.text && !!curr.audio) {
      return { text: curr.text, audio: curr.audio };
    }
    if (curr.text && !!curr.text) {
      text = curr.text;
    }
    if (curr.audio && !!curr.audio) {
      audio = curr.audio;
    }
  }
  return { text, audio };
};

const normalizeMeanings = (data: APIResponse['meanings']): APIData['meanings'] => {
  const meanings: APIData['meanings'] = [];
  for (let i = 0; i < data.length; i++) {
    const meaning = data[i];
    const definitions: Definition[] = [];
    for (let j = 0; j < meaning.definitions.length; j++) {
      const def = meaning.definitions[j];
      definitions.push({ definition: def.definition, example: def.example ?? '' });
    }
    meanings.push({
      partOfSpeech: meaning.partOfSpeech,
      definitions,
      antonyms: meaning.antonyms,
      synonyms: meaning.synonyms,
    });
  }
  return meanings;
};

export const normalizeApiData = (response: APIResponse[]): APIData[] => {
  const data = response.map((res) => {
    const word = res.word;
    const phonetic = normalizePhonetics(res.phonetics);
    const meanings = normalizeMeanings(res.meanings);
    const sourceUrls = res.sourceUrls;

    return { word, phonetic, meanings, sourceUrls };
  });
  return data;
};
