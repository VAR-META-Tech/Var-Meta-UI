import { autoUpdate, flip, offset as floatOffset, shift, useFloating } from '@floating-ui/react-dom';
import { useControllableState } from '@radix-ui/react-use-controllable-state';

import { type VisibleState } from '../types';

type FloatingPlacement = 'end' | 'start';
type FloatingSide = 'top' | 'right' | 'bottom' | 'left';
export type FloatingPosition = FloatingSide | `${FloatingSide}-${FloatingPlacement}`;
interface UsePopover extends VisibleState {
  offset?: number;
  placement?: FloatingPosition;
}

/**
 * Generates a popover hook that manages the state of a popover component.
 *
 * @return {[boolean, CSSProperties, MutableRefObject<any>[], { open: () => void, close: () => void, toggle: () => void }]} - An array containing the following elements:
 *   - isOpen: A boolean indicating whether the popover is open or closed.
 *   - floatingStyles: An object containing CSS styles for the floating popover.
 *   - refs: An array of mutable ref objects for the popover components.
 *   - actions: An object containing functions to open, close, and toggle the popover.
 */
export const usePopover = ({
  open: openProp,
  defaultOpen,
  onOpenChange,
  offset = 8,
  placement = 'bottom',
}: UsePopover) => {
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });

  const { refs, floatingStyles, update } = useFloating({
    open: open,
    placement: placement,
    strategy: 'fixed',
    middleware: [floatOffset(offset), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  return { opened: open, floatingStyles, refs, setOpen, update };
};
