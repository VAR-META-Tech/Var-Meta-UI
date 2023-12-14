import { cn } from '@hashgraph/utils';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import { type ElementProps } from '../../types';

const toggleVariants = cva(
  'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none  data-[state=checked]:bg-brand-600 data-[state=unchecked]:bg-gray-100 focus-visible:shadow-gray-secondary focus-visible:data-[state=checked]:shadow-brand disabled:cursor-not-allowed  disabled:data-[state=checked]:bg-gray-100',
  {
    variants: {
      size: {
        sm: 'w-9 h-5',
        md: 'w-11 h-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const thumbVariant = cva(
  'pointer-events-none block rounded-full bg-base-white shadow-sm ring-0 transition-transform data-[state=unchecked]:translate-x-0',
  {
    variants: {
      size: {
        sm: 'h-4 w-4 data-[state=checked]:translate-x-4',
        md: 'w-5 h-5 data-[state=checked]:translate-x-5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

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
