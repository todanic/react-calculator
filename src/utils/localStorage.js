import { useState, useCallback } from 'react';

// Function to store a value in localStorage with a specified key
export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Function to retrieve a value from localStorage using a specified key
export const getItem = (key) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

// Custom hook to manage a value in localStorage with provided key and initial value
export const useLocalStorageValue = (key, initialValue) => {
  // State to manage the current value
  const [value, setValue] = useState(initialValue);

  // Function to update the value in localStorage and state
  const handleValue = useCallback(
    (newValue) => {
      setItem(key, newValue);
      setValue(newValue);
    },
    [key] // Re-run the effect only if the 'key' changes
  );

  // Return an object containing the function to update the value
  return {
    setValue: handleValue,
    value
  };
};
