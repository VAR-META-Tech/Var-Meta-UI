import { cn } from '@hashgraph/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const tagVariants = cva(
  'inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-main-10 text-main-100 hover:bg-main-100/20',
        success: 'border-transparent bg-success-light text-success hover:bg-success',
        'success-filled': 'border-transparent bg-success text-white hover:bg-success',
        error: 'border-transparent bg-error-light text-error',
        'error-filled': 'border-transparent bg-error text-white',
        warning: 'border-transparent bg-warning-light text-warning',
        'warning-filled': 'border-transparent bg-warning text-white',
        info: 'border-transparent bg-info-light text-info',
        'info-filled': 'border-transparent bg-info text-white',
        outline: 'border-main-100 font-medium text-info',
        secondary: 'font-medium text-main-100 bg-main-10 hover:bg-main-10',
        'secondary-outlined': 'font-medium border border-main-100 text-main-100 bg-main-10 hover:bg-main-10',
        disabled: 'bg-neutral-40 text-white',
        text: 'text-main-100 border-none',
      },
      rounded: {
        default: 'rounded-full',
        sm: 'rounded-sm',
        none: '',
      },
      size: {
        default: 'font-medium text-xs px-4 py-2',
        sm: 'text-xs py-1 px-5',
        xs: 'text-xxs py-0.5 px-2.5',
        mixin: 'text-xs font-medium',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'default',
    },
  }
);

export interface TagProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tagVariants> {}

function Tag({ className, variant, size, rounded, ...props }: TagProps) {
  return <div className={cn(tagVariants({ variant, rounded, size }), className)} {...props} />;
}

export { Tag, tagVariants };
