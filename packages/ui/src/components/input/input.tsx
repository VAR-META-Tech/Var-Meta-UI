import React, { type ReactNode } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '../../utils/cn';
import { radiusVariant } from '../../utils/variant-common';

const inputVariants = tv({
  base: 'relative inline-flex items-center justify-between gap-2 border',
  variants: {
    variant: {
      default: 'bg-input border-input-border focus-within:shadow-brand-xs focus-within:border-brand-300',
      background: 'bg-background border-input-border focus-within:shadow-brand-xs focus-within:border-brand-300',
      destructive: 'bg-input border-error-300 focus-within:shadow-error-xs focus-within:border-error-300',
    },
    disabled: {
      true: 'shadow-xs bg-background-disabled text-disabled cursor-not-allowed',
    },
    readOnly: {
      true: 'bg-input border-input-border cursor-default',
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-auto',
    },
    size: {
      none: 'min-h-0',
      xs: 'h-8 px-3 py-1',
      sm: 'h-10 px-3 py-2',
      md: 'h-11 px-3.5 py-2.5',
    },
    radius: radiusVariant,
  },
  defaultVariants: {
    size: 'md',
    radius: 'xs',
    variant: 'default',
    fullWidth: true,
  },
});

const baseInputVariant = tv({
  base: [
    'block w-full min-w-0 flex-1 ',
    'text-foreground placeholder:text-foreground-secondary bg-transparent disabled:cursor-not-allowed',
    'outline-none focus-visible:outline-none',
  ],
});

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
      radius,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn(inputVariants({ radius, variant, fullWidth, disabled, readOnly, size, className }))}>
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
