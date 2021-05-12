import { useEffect, useState } from 'react';

const PREFIX = 'my-app-';

const useLocalStorage = (key, initValue) => {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    }
    if (typeof initValue === 'function') {
      return initValue();
    }
    return initValue;
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
};

export default useLocalStorage;
