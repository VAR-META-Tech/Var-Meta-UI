import React, { type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../utils/cn';

const inputVariants = cva('bg-background relative inline-flex items-center justify-between gap-2 rounded-md border', {
  variants: {
    variant: {
      default: 'border-border focus-within:shadow-brand-xs focus-within:border-brand-300',
      destructive: 'border-error-300 focus-within:shadow-error-xs focus-within:border-error-300',
    },
    disabled: {
      true: 'shadow-xs bg-background-secondary text-disabled cursor-not-allowed',
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
    'block w-full min-w-0 flex-1 ',
    'text-foreground placeholder:text-muted bg-transparent disabled:cursor-not-allowed',
    'outline-none focus-visible:outline-none',
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
