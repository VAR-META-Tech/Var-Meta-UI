import { cn } from '@hashgraph/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const inputVariants = cva(
  cn(
    'flex w-full border text-gray-900 placeholder:text-gray-500 bg-base-white rounded-md',
    'focus-visible:outline-none  outline-none',
    'disabled:cursor-not-allowed disabled:shadow-xs disabled:bg-gray-50 disabled:text-gray-500',
    'read-only:bg-readonly read-only:border-readonly-border read-only:cursor-default'
  ),
  {
    variants: {
      variant: {
        default: 'border-gray-300 focus-visible:shadow-brand-xs focus-visible:border-brand-300',
        destructive: 'border-error-300 bg-base-white focus-visible:shadow-error-xs focus-visible:border-error-300',
      },
      size: {
        none: '',
        sm: 'h-10 px-3 py-2',
        md: 'h-11 px-3.5 py-2.5',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  suffix?: any;
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', fullWidth, size, suffix, ...props }, ref) => {
    return (
      <div className={cn('relative', fullWidth && 'w-full')}>
        <input className={cn(inputVariants({ variant, size, className }))} ref={ref} {...props} />
        {suffix && (
          <div
            className={cn('bg-base-white absolute right-[10px] top-1/2 -translate-y-1/2', {
              'text-error-300': variant === 'destructive',
            })}
          >
            {suffix}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input, inputVariants };
