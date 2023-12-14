import { useState } from 'react';

interface UseUncontrolledInput<T> {
  /** Value for controlled state */
  value?: T;

  /** Initial value for uncontrolled state */
  defaultValue?: T;

  /** Final value for uncontrolled state when value and defaultValue are not provided */
  finalValue?: T;

  /** Controlled state onChange handler */
  onChange?: (value: T) => void;
}

/**
 * A hook that provides the ability to use uncontrolled input values.
 *
 * @param {Object} options - The options object.
 * @param {T} options.value - The controlled value of the input.
 * @param {T} options.defaultValue - The default value of the input.
 * @param {T} options.finalValue - The final value of the input.
 * @param {Function} options.onChange - The callback function to be called when the value changes.
 * @return {[T, (value: T) => void, boolean]} - An array containing the current value, the function to update the value, and a boolean indicating whether the value is controlled.
 */
export function useUncontrolled<T>({
  value,
  defaultValue,
  finalValue,
  onChange = () => {},
}: UseUncontrolledInput<T>): [T, (value: T) => void, boolean] {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue !== undefined ? defaultValue : finalValue);

  const handleUncontrolledChange = (val: T) => {
    setUncontrolledValue(val);
    onChange?.(val);
  };

  if (value !== undefined) {
    return [value as T, onChange, true];
  }

  return [uncontrolledValue as T, handleUncontrolledChange, false];
}
