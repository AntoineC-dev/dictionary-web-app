import * as React from 'react';

const LOCAL_PREFIX = 'dictionary-web-app';

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const localKey = `${LOCAL_PREFIX}.${key}`;
  const [value, setValue] = React.useState<T>(() => {
    try {
      const localValue = window.localStorage.getItem(localKey);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (err) {
      console.log(err);
      return initialValue;
    }
  });

  React.useEffect(() => {
    window.localStorage.setItem(localKey, JSON.stringify(value));
  }, [localKey, value]);

  return [value, setValue] as const;
};
export default useLocalStorage;
