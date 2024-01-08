import * as PopperPrimitive from '@radix-ui/react-popper';
import { Portal } from '@radix-ui/react-portal';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { type ElementRef, forwardRef, type ReactNode, useState } from 'react';

import { useClickOutside } from '../../hooks/useClickOutSide';
import { type ElementProps, type VisibleState } from '../../types';
import { cn } from '../../utils/cn';

const PopperRoot = PopperPrimitive.Root;
const PopperAnchor = PopperPrimitive.Anchor;
const PopperArrow = PopperPrimitive.Arrow;

export interface PopperRootProps extends ElementProps<typeof PopperRoot> {}
export interface PopperArrowProps extends ElementProps<typeof PopperArrow> {}
export interface PopperAnchorProps extends ElementProps<typeof PopperAnchor> {}
export interface PopperContentProps extends ElementProps<typeof PopperPrimitive.Content> {}

const PopperContent = forwardRef<React.ElementRef<typeof PopperPrimitive.Content>, PopperContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <PopperPrimitive.Content
        ref={ref}
        className={cn(
          'bg-base-white z-50 min-h-[40px] rounded-sm shadow-md',
          'max-h-[var(--radix-popper-available-height)] w-[var(--radix-popper-anchor-width)] origin-[var(--radix-popper-transform-origin)]',
          className
        )}
        {...props}
      />
    );
  }
);

export interface PopperProps extends PopperContentProps, VisibleState {
  trigger?: ReactNode;
  arrow?: boolean;
  theme?: 'dark' | 'light';
}

const Popper = forwardRef<ElementRef<typeof PopperContent>, PopperProps>((props, ref) => {
  const {
    open: openProp,
    arrow,
    theme = 'light',
    defaultOpen,
    className,
    onOpenChange,
    trigger,
    children,
    sideOffset = 8,
    align = 'start',
    side = 'bottom',
    ...etc
  } = props;

  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });

  const [anchorRef, setAnchorRef] = useState<HTMLDivElement | null>(null);
  const [contentRef, setContentRef] = useState<HTMLDivElement | null>(null);
  const close = () => {
    setOpen(false);
  };
  useClickOutside(close, null, [contentRef, anchorRef] as any);
  return (
    <PopperRoot>
      <PopperAnchor ref={setAnchorRef} asChild onClick={() => setOpen(true)}>
        {trigger}
      </PopperAnchor>
      {open && (
        <Portal asChild>
          <PopperContent
            sideOffset={sideOffset}
            align={align}
            side={side}
            className={cn(theme === 'light' ? 'bg-base-white text-gray-700' : 'bg-gray-900 text-base-white', className)}
            ref={ref}
            {...etc}
          >
            <div ref={setContentRef}>{children}</div>
            {arrow ? (
              <PopperArrow
                className={cn('drop-shadow-lg -mt-px w-3', {
                  'fill-base-white': theme === 'light',
                  'fill-gray-900': theme === 'dark',
                })}
              />
            ) : null}
          </PopperContent>
        </Portal>
      )}
    </PopperRoot>
  );
});

export { Popper, PopperAnchor, PopperArrow, PopperContent, PopperRoot };
