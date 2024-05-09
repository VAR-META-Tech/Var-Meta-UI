import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

/**
 * Generates a debounced state value that updates after a specified delay.
 *
 * @param {T} initialValue - The initial value of the state.
 * @param {number} delay - The delay in milliseconds before updating the debounced value.
 * @returns {[T, T, Dispatch<SetStateAction<T>>]} - An array containing the current value, the debounced value, and a setter function to update the value.
 */
export const useDebouncedState = <T>(initialValue: T, delay = 300): [T, T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
    setDebouncedValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return [value, debouncedValue, setValue];
};
