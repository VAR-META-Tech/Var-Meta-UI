import { cn } from '@hashgraph/utils';
import * as Popper from '@radix-ui/react-popper';
import { forwardRef } from 'react';

const PopperRoot = Popper.Root;
const PopperTrigger = Popper.Anchor;
const PopperContent = forwardRef<
  React.ElementRef<typeof Popper.Content>,
  React.ComponentPropsWithoutRef<typeof Popper.Content>
>(({ className, ...props }, ref) => {
  return (
    <Popper.Content
      ref={ref}
      className={cn(
        'bg-base-white z-50 min-h-[40px] w-full rounded-sm shadow-md',
        'max-h-[var(--radix-popper-available-height)] w-[var(--radix-popper-anchor-width)] origin-[var(--radix-popper-transform-origin)]',
        className
      )}
      {...props}
    />
  );
});
const PopperArrow = Popper.Arrow;

export { PopperArrow, PopperContent, PopperRoot, PopperTrigger };
