import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/react-dom';

import { useDisclosure } from './useDisclosures';

export const usePopover = () => {
  const [isOpen, { open, close, toggle }] = useDisclosure(false);

  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  return [isOpen, floatingStyles, refs, { open, close, toggle }] as const;
};
