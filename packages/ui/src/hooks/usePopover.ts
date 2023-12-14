import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/react-dom';

import { useDisclosure } from './useDisclosures';

/**
 * Generates a popover hook that manages the state of a popover component.
 *
 * @return {[boolean, CSSProperties, MutableRefObject<any>[], { open: () => void, close: () => void, toggle: () => void }]} - An array containing the following elements:
 *   - isOpen: A boolean indicating whether the popover is open or closed.
 *   - floatingStyles: An object containing CSS styles for the floating popover.
 *   - refs: An array of mutable ref objects for the popover components.
 *   - actions: An object containing functions to open, close, and toggle the popover.
 */
export const usePopover = () => {
  const [isOpen, { open, close, toggle }] = useDisclosure(false);

  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  return [isOpen, floatingStyles, refs, { open, close, toggle }] as const;
};
