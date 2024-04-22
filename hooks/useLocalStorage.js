import { useState, useEffect } from 'react';

// Chan Note to Ammalgam: I made this for hooks practice, figured I'd throw it in there
const useLocalStorage = (key, defaultValue) => {
  // first check if there is a value stored, then use initalValue
  const initialValue = defaultValue;
  const [value, setLocalStorage] = useState(initialValue);

  const updateValue = (input) => {
    window.localStorage.setItem(key, input);
    setLocalStorage(input);
  };

  // retrieve value from window local storage AFTER render and on client side
  useEffect(() => {
    const storedValue = window.localStorage.getItem(key);
    if (storedValue !== null) {
      updateValue(storedValue)
    };
  }, [])

  return [value, updateValue];
};

export default useLocalStorage;