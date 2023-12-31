import * as Ariakit from '@ariakit/react';

import styles from './SearchField.module.css';
import { getDictionaryApiData } from '../../api/api';
import { Store } from '../../types';

interface SearchFieldProps {
  setStore: React.Dispatch<React.SetStateAction<Store>>;
}

function SearchField(props: SearchFieldProps) {
  const form = Ariakit.useFormStore({ defaultValues: { word: '' } });

  form.useSubmit(async (state) => {
    const word = state.values.word;
    const res = await getDictionaryApiData(word);
    props.setStore(res);
  });

  return (
    <Ariakit.Form
      store={form}
      aria-label="Search a word in the dictionary"
      className={styles.wrapper}
      validateOnBlur={false}>
      <Ariakit.FormLabel name={form.names.word} className="sr-only">
        Search for any word
      </Ariakit.FormLabel>
      <Ariakit.FormInput
        name={form.names.word}
        placeholder="Search for any word..."
        className={styles.input}
        required
      />
      <Ariakit.FormSubmit className={styles.submit} aria-label="Search the API">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <path
            fill="none"
            stroke="#A445ED"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
          />
        </svg>
      </Ariakit.FormSubmit>
      <Ariakit.FormError name={form.names.word} className={styles.error} />
    </Ariakit.Form>
  );
}

export default SearchField;
