import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '../../utils/cn';
import { CheckboxIcon, MinusIcon } from '../icons';

const checkboxVariant = cva(
  [
    'border-gray-300 focus-visible:outline-none focus-visible:shadow-brand',
    'data-[state=indeterminate]:bg-brand-600 data-[state=indeterminate]:border-brand-600 data-[state=indeterminate]:text-white',
    'data-[state=checked]:bg-brand-600 data-[state=checked]:border-brand-600 data-[state=checked]:text-white',
    'shrink-0 border disabled:cursor-not-allowed disabled:bg-gray-50 disabled:border-gray-300 disabled:!text-gray-300 disabled:focus-visible:shadow-gray',
    'disabled:data-[state=checked]:border-gray-300 disabled:data-[state=checked]:bg-gray-50',
    'disabled:data-[state=indeterminate]:border-gray-300 disabled:data-[state=indeterminate]:bg-gray-50 ',
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
    <CheckboxPrimitive.Root checked={checked} ref={ref} className={cn(checkboxVariant({ size, className }))} {...props}>
      <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
        {checked === 'indeterminate' && <MinusIcon className="w-3 h-w-3" />}
        {(checked === true || checked === undefined) && <CheckboxIcon className="w-4 h-4" />}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
