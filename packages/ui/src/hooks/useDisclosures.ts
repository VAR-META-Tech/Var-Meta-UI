import { useCallback, useState } from 'react';

/**
 * Creates a custom hook for managing state of a disclosure.
 *
 * @param {boolean} initialState - The initial state of the disclosure (default: false).
 * @param {object} callbacks - Optional object containing onOpen and onClose callback functions.
 * @param {function} callbacks.onOpen - Function to be called when the disclosure is opened.
 * @param {function} callbacks.onClose - Function to be called when the disclosure is closed.
 * @return {array} A tuple containing the current state of the disclosure and an object with functions to open, close, toggle and set the state.
 */
export function useDisclosure(initialState = false, callbacks?: { onOpen?: () => void; onClose?: () => void }) {
  const { onOpen, onClose } = callbacks || {};
  const [opened, setOpened] = useState(initialState);

  const open = useCallback(() => {
    setOpened((isOpened) => {
      if (!isOpened) {
        onOpen?.();
        return true;
      }
      return isOpened;
    });
  }, [onOpen]);

  const close = useCallback(() => {
    setOpened((isOpened) => {
      if (isOpened) {
        onClose?.();
        return false;
      }
      return isOpened;
    });
  }, [onClose]);

  const toggle = useCallback(() => {
    opened ? close() : open();
  }, [close, open, opened]);

  return [opened, { open, close, toggle, setOpened }] as const;
}
