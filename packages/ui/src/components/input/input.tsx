import { cva, type VariantProps } from 'class-variance-authority';
import React, { type ReactNode } from 'react';

import { cn } from '../../utils/cn';

const inputVariants = cva('inline-flex gap-2 justify-between items-center relative border bg-white rounded-md', {
  variants: {
    variant: {
      default: 'border-gray-300 focus-within:shadow-brand-xs focus-within:border-brand-300',
      destructive: 'border-error-300 bg-white focus-within:shadow-error-xs focus-within:border-error-300',
    },
    disabled: {
      true: 'cursor-not-allowed shadow-xs bg-gray-50 text-gray-500',
    },
    readOnly: {
      true: 'bg-readonly border-readonly-border cursor-default',
    },
    fullWidth: {
      true: 'w-full',
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
});

const baseInputVariant = cva(
  [
    'block w-full flex-1 min-w-0 ',
    'text-gray-900 placeholder:text-gray-500 bg-transparent',
    'focus-visible:outline-none outline-none',
  ],
  {
    variants: {},
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>,
    Omit<VariantProps<typeof inputVariants>, 'disabled' | 'readOnly'> {
  prefix?: ReactNode;
  suffix?: ReactNode;
  prefixClassName?: string;
  suffixClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      disabled = false,
      readOnly = false,
      variant = 'default',
      suffixClassName,
      prefixClassName,
      prefix,
      fullWidth,
      size,
      suffix,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn(inputVariants({ variant, fullWidth, disabled, readOnly, size, className }))}>
        {prefix && <div className={prefixClassName}>{prefix}</div>}
        <input className={cn(baseInputVariant())} ref={ref} readOnly={readOnly} disabled={disabled} {...props} />

        {suffix && (
          <div className={cn('bg-white', { 'text-error-300': variant === 'destructive' }, suffixClassName)}>
            {suffix}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input, inputVariants };
