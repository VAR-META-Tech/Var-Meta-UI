import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '../../utils/cn';

const dotVariants = tv({
  base: 'rounded-half block aspect-square p-1',
  variants: {
    variant: {
      solid: '',
      outline: '',
    },
    type: {
      success: '',
      white: '',
      disabled: '',
    },
    size: {
      sm: 'border-3 h-2 w-2',
      md: 'h-2.5 w-2.5 border-4',
      lg: 'border-5 h-3 w-3',
    },
  },
  defaultVariants: {
    variant: 'solid',
    type: 'success',
  },
  compoundVariants: [
    {
      variant: 'solid',
      type: 'success',
      className: 'bg-success-500 border-0',
    },
    {
      variant: 'solid',
      type: 'white',
      className: 'border-0 bg-white',
    },
    {
      variant: 'solid',
      type: 'disabled',
      className: 'border-0 bg-gray-300',
    },
    {
      variant: 'outline',
      type: 'success',
      className: 'border-success-500',
    },
    {
      variant: 'outline',
      type: 'white',
      className: 'border-white',
    },
    {
      variant: 'outline',
      type: 'disabled',
      className: 'border-gray-300',
    },
  ],
});

export interface DotProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof dotVariants> {}

const Dot = React.forwardRef<HTMLDivElement, DotProps>(({ className, type, variant, ...props }, ref) => {
  return <span ref={ref} className={cn(dotVariants({ variant, type }), className)} {...props} />;
});
Dot.displayName = 'Dot';

export { Dot, dotVariants };
