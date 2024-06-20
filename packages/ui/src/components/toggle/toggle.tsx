import React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { tv, type VariantProps } from 'tailwind-variants';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';

const toggleVariants = tv({
  base: 'data-[state=checked]:bg-brand-300 data-[state=unchecked]:bg-gray-200 focus-visible:shadow-gray-secondary focus-visible:data-[state=checked]:shadow-brand-base disabled:data-[state=checked]:bg-gray-200 peer inline-flex shrink-0 cursor-pointer items-center  rounded-full border-2 border-transparent transition-colors focus-visible:outline-none  disabled:cursor-not-allowed',
  variants: {
    size: {
      sm: 'h-5 w-9',
      md: 'h-6 w-11',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const thumbVariant = tv({
  base: 'pointer-events-none block rounded-full bg-white shadow-sm ring-0 transition-transform data-[state=unchecked]:translate-x-0',
  variants: {
    size: {
      sm: 'h-4 w-4 data-[state=checked]:translate-x-4',
      md: 'h-5 w-5 data-[state=checked]:translate-x-5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface ToggleProps extends ElementProps<typeof SwitchPrimitives.Root>, VariantProps<typeof toggleVariants> {
  thumbClassName?: string;
}

const Toggle = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, ToggleProps>(
  ({ className, size, thumbClassName, ...props }, ref) => (
    <SwitchPrimitives.Root className={cn(toggleVariants({ size, className }))} {...props} ref={ref}>
      <SwitchPrimitives.Thumb className={cn(thumbVariant({ size, className: thumbClassName }))} />
    </SwitchPrimitives.Root>
  )
);
Toggle.displayName = 'Toggle';

export { Toggle };
