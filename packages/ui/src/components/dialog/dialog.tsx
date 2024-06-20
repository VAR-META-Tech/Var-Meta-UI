import React, { useCallback, useId } from 'react';
import { useControllableState } from '@radix-ui/react-use-controllable-state';

import { type FCC } from '../../types';
import { DialogProvider } from './dialog.context';

export interface DialogProps {
  children?: React.ReactNode;
  dismissable?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?(open: boolean): void;
  modal?: boolean;
  scrollBehavior?: 'inside' | 'outside';
}

export const Dialog: FCC<DialogProps> = (props) => {
  const { children, defaultOpen, onOpenChange, open: openProp, dismissable = true, scrollBehavior = 'outside' } = props;
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });

  return (
    <DialogProvider
      value={{
        triggerRef,
        contentRef,
        contentId: useId(),
        titleId: useId(),
        descriptionId: useId(),
        dismissable,
        onOpenChange: setOpen,
        open: open,
        toggleOpen: useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
        scrollBehavior,
      }}
    >
      {children}
    </DialogProvider>
  );
};
