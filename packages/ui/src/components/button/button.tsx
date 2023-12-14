import { cn } from '@hashgraph/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import { Dot } from '../dot';
import { Spinner } from '../spinner';

const base = {
  solid: 'text-base-white shadow-xs disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400',
  outline: 'disabled:bg-base-white disabled:border-gray-200 disabled:text-gray-400',
  ghost: 'disabled:text-gray-400',
  link: 'disabled:text-gray-400',
};

const buttonVariants = cva(
  'inline-flex cursor-pointer items-center min-h-0 rounded-xs justify-center text-base font-medium transition disabled:cursor-not-allowed focus:outline-none',
  {
    variants: {
      variant: {
        primary: [
          'bg-brand-600 border border-brand-600 hover:border-brand-700 hover:bg-brand-700  focus:shadow-brand-xs',
          base.solid,
        ],
        secondary: [
          'bg-base-white border border-brand-300 hover:border-brand-300 hover:bg-brand-50 text-brand-700 shadow-xs focus:shadow-brand-xs ',
          base.outline,
        ],
        'secondary-gray': [
          'bg-base-white border border-gray-300 hover:bg-gray-50 text-gray-700 shadow-xs focus:shadow-gray-xs ',
          base.outline,
        ],
        tertiary: ['text-brand-700 hover:text-brand-800 hover:bg-brand-50', base.ghost],
        'tertiary-gray': ['text-gray-600 hover:text-gray-700', base.ghost],
        link: ['text-brand-700 hover:text-brand-800', base.ghost],
        'link-gray': ['text-gray-600 hover:text-gray-700', base.ghost],

        destructive: [
          'bg-error-600 border border-error-600 hover:border-error-700 hover:bg-error-700  focus:shadow-error-xs',
          base.solid,
        ],
        'destructive-secondary': [
          'bg-base-white border border-error-300 hover:border-error-300 hover:bg-error-50 text-error-700 shadow-xs focus:shadow-error-xs ',
          base.outline,
        ],
        'destructive-tertiary': ['text-error-700 hover:text-error-800 hover:bg-error-50', base.ghost],
        'destructive-link': ['text-error-700 hover:text-error-800', base.ghost],

        error: [
          'bg-error-600 border border-error-600 hover:border-error-700 hover:bg-error-700  focus:shadow-error-xs',
          base.solid,
        ],
        'error-secondary': [
          'bg-base-white border border-error-300 hover:border-error-300 hover:bg-error-50 text-error-700 shadow-xs focus:shadow-error-xs ',
          base.outline,
        ],
        'error-tertiary': ['text-error-700 hover:text-error-800 hover:bg-error-50', base.ghost],
        'error-link': ['text-error-700 hover:text-error-800', base.ghost],

        warning: [
          'bg-warning-600 border border-warning-600 hover:border-warning-700 hover:bg-warning-700  focus:shadow-warning-xs',
          base.solid,
        ],
        'warning-secondary': [
          'bg-base-white border border-warning-300 hover:border-warning-300 hover:bg-warning-50 text-warning-700 shadow-xs focus:shadow-warning-xs ',
          base.outline,
        ],
        'warning-tertiary': ['text-warning-700 hover:text-warning-800 hover:bg-warning-50', base.ghost],
        'warning-link': ['text-warning-700 hover:text-warning-800', base.ghost],

        success: [
          'bg-success-600 border border-success-600 hover:border-success-700 hover:bg-success-700  focus:shadow-success-xs',
          base.solid,
        ],
        'success-secondary': [
          'bg-base-white border border-success-300 hover:border-success-300 hover:bg-success-50 text-success-700 shadow-xs focus:shadow-success-xs ',
          base.outline,
        ],
        'success-tertiary': ['text-success-700 hover:text-success-800 hover:bg-success-50', base.ghost],
        'success-link': ['text-success-700 hover:text-success-800', base.ghost],
      },
      size: {
        none: 'gap-xs text-sm font-semibold',
        sm: 'h-9 px-lg py-md gap-xs text-sm font-semibold',
        md: 'h-10 px-3.5 py-2.5 gap-xs text-sm font-semibold',
        lg: 'h-11 px-4 py-2.5 gap-sm text-base font-semibold',
        xl: 'h-12 px-4.5 py-3 gap-sm text-base font-semibold',
        '2xl': 'h-15 px-5.5 py-4 gap-2.5 text-lg font-semibold',
      },
      radius: {
        none: 'rounded-none',
        default: 'rounded-xs',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        '3xl': 'rounded-3xl',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, ''>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  spinnerClasses?: string;
  fullWidth?: boolean;
  iconOnly?: boolean;
  dotLeading?: boolean;
}

const solidVariants: ButtonProps['variant'][] = ['destructive', 'primary', 'success', 'warning'];

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      spinnerClasses,
      fullWidth,
      loading,
      disabled,
      variant = 'primary',
      size,
      iconOnly = false,
      radius,
      asChild = false,
      dotLeading = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, radius, size }),
          {
            'w-full': fullWidth,
            'cursor-progress': loading,
            'aspect-square p-0': iconOnly,
          },
          className
        )}
        ref={ref}
        disabled={loading || disabled}
        aria-disabled={loading || disabled}
        {...props}
      >
        {dotLeading && (
          <Dot
            className="mr-0.5"
            variant="solid"
            type={disabled ? 'disabled' : solidVariants.includes(variant) ? 'white' : 'success'}
          />
        )}
        {children}
        {loading && <Spinner className={spinnerClasses} />}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
