import { cn } from '@hashgraph/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const dotVariants = cva('aspect-square block rounded-half p-1', {
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
      sm: 'w-2 h-2 border-3',
      md: 'w-2.5 h-2.5 border-4',
      lg: 'w-3 h-3 border-5',
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
      className: 'bg-base-white border-0',
    },
    {
      variant: 'solid',
      type: 'disabled',
      className: 'bg-gray-300 border-0',
    },
    {
      variant: 'outline',
      type: 'success',
      className: 'border-success-500',
    },
    {
      variant: 'outline',
      type: 'white',
      className: 'border-base-white',
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
