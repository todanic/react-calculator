import { useState, useCallback } from 'react';

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const useLocalStorageValue = (key, initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleValue = useCallback(
    (newValue) => {
      setItem(key, newValue);
      setValue(newValue);
    },
    [key]
  );

  return {
    setValue: handleValue,
    value
  };
};
