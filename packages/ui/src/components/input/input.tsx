import { cva, type VariantProps } from 'class-variance-authority';
import React, { type ReactNode } from 'react';

import { cn } from '../../utils/cn';

const inputVariants = cva(
  ['inline-flex gap-2 justify-between items-center relative', 'border bg-base-white rounded-md'],
  {
    variants: {
      variant: {
        default: 'border-gray-300 focus-within:shadow-brand-xs focus-within:border-brand-300',
        destructive: 'border-error-300 bg-base-white focus-within:shadow-error-xs focus-within:border-error-300',
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

const baseInputVariant = cva(
  [
    'block w-full flex-1 min-w-0 ',
    'text-gray-900 placeholder:text-gray-500',
    'focus-visible:outline-none outline-none',
    'disabled:cursor-not-allowed disabled:shadow-xs disabled:bg-gray-50 disabled:text-gray-500',
    'read-only:bg-readonly read-only:border-readonly-border read-only:cursor-default',
  ],
  {
    variants: {},
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>,
    VariantProps<typeof inputVariants> {
  prefix?: ReactNode;
  suffix?: ReactNode;
  fullWidth?: boolean;
  prefixClassName?: string;
  suffixClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, variant = 'default', suffixClassName, prefixClassName, prefix, fullWidth, size, suffix, ...props },
    ref
  ) => {
    return (
      <div
        className={cn(inputVariants({ variant, size, className }), {
          'w-full': fullWidth,
        })}
      >
        {prefix && <div className={prefixClassName}>{prefix}</div>}
        <input className={cn(baseInputVariant())} ref={ref} {...props} />

        {suffix && (
          <div className={cn('bg-base-white', { 'text-error-300': variant === 'destructive' }, suffixClassName)}>
            {suffix}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input, inputVariants };
