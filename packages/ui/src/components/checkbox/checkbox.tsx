import { cn } from '@hashgraph/utils';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import * as React from 'react';

import { CheckboxIcon, MinusIcon } from '../icons';

const checkboxVariant = cva(
  [
    'border-gray-300 focus-visible:outline-none focus-visible:shadow-brand',
    'data-[state=checked]:bg-brand-600 data-[state=checked]:border-brand-600 data-[state=checked]:text-base-white',
    'shrink-0 border disabled:cursor-not-allowed disabled:bg-gray-50 disabled:border-gray-300 disabled:!text-gray-300',
    'disabled:data-[state=checked]:border-gray-300 disabled:data-[state=checked]:bg-gray-50 disabled:focus-visible:shadow-gray',
  ],
  {
    variants: {
      size: {
        sm: 'w-4 h-4 rounded-xs',
        md: 'w-5 h-5 rounded-sm',
        'tag-sm': 'w-3.5 h-3.5 rounded-xs',
        'tag-md': 'w-4 h-4 rounded-xs',
        'tag-lg': 'w-4.5 h-4.5 rounded-xs',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
);

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariant> {}

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, checked, size, ...props }, ref) => (
    <CheckboxPrimitive.Root ref={ref} className={cn(checkboxVariant({ size, className }))} {...props}>
      <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
        {checked === 'indeterminate' && <MinusIcon className="w-4 h-4" />}
        {checked === true && <CheckboxIcon className="w-4 h-4" />}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
