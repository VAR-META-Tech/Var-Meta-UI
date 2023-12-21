/* eslint-disable react-hooks/exhaustive-deps */
import type React from 'react';
import { useCallback } from 'react';

type UseVisible = [opened: boolean, setOpened: (value: React.SetStateAction<boolean | undefined>) => void];
const useVisibleAction = (
  [opened, setOpened]: UseVisible,
  callbacks?: { onOpen?: () => void; onClose?: () => void }
) => {
  const { onOpen, onClose } = callbacks || {};

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

  return { open, close, toggle };
};

export default useVisibleAction;
