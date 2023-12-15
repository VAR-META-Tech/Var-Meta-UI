import { cn } from '@hashgraph/utils';
import * as PopperPrimitive from '@radix-ui/react-popper';
import { Portal } from '@radix-ui/react-portal';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { forwardRef, type ReactNode } from 'react';

const PopperRoot = PopperPrimitive.Root;
const PopperTrigger = PopperPrimitive.Anchor;
const PopperArrow = PopperPrimitive.Arrow;

export interface PopperRootProps extends React.ComponentPropsWithoutRef<typeof PopperRoot> {}
export interface PopperArrowProps extends React.ComponentPropsWithoutRef<typeof PopperArrow> {}
export interface PopperTriggerProps extends React.ComponentPropsWithoutRef<typeof PopperTrigger> {}
export interface PopperContentProps extends React.ComponentPropsWithoutRef<typeof PopperPrimitive.Content> {}

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

export interface PopperProps extends PopperContentProps {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?(open: boolean): void;
  anchor?: ReactNode;
  arrow?: boolean;
  theme?: 'dark' | 'light';
}

const Popper = forwardRef<React.ElementRef<typeof PopperContent>, PopperProps>((props, ref) => {
  const { open: openProp, arrow, theme = 'light', defaultOpen, className, onOpenChange, anchor, ...etc } = props;

  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });

  return (
    <PopperRoot>
      <PopperTrigger asChild onClick={() => setOpen(true)}>
        {anchor}
      </PopperTrigger>
      {open && (
        <Portal asChild>
          <PopperContent
            className={cn(theme === 'light' ? 'bg-base-white text-gray-700' : 'bg-gray-900 text-base-white', className)}
            ref={ref}
            {...etc}
          >
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

export { Popper, PopperArrow, PopperContent, PopperRoot, PopperTrigger };
