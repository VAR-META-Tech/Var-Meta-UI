import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex cursor-pointer items-center min-h-0 justify-center text-base font-medium transition-all disabled:cursor-not-allowed outline-none focus:outline-none',
  {
    variants: {
      variant: {
        solid: 'text-white shadow-xs disabled:bg-gray-100 disabled:border-gray-200 disabled:text-disabled',
        outline: 'disabled:bg-white disabled:border-gray-200 disabled:text-disabled',
        ghost: 'disabled:text-disabled disabled:hover:bg-transparent',
        link: 'disabled:text-disabled',
      },
      color: {
        default: '',
        primary: '',
        secondary: '',
        tertiary: '',
        gray: '',
        warning: '',
        error: '',
        success: '',
      },
      size: {
        none: 'gap-xs text-sm font-semibold',
        sm: 'h-9 px-lg py-md gap-xs text-sm font-semibold',
        md: 'h-10 px-3.5 py-2.5 gap-xs text-sm font-semibold',
        lg: 'h-11 px-4 py-2.5 gap-sm text-base font-semibold',
        xl: 'h-12 px-4.5 py-3 gap-sm text-base font-semibold',
        '2xl': 'h-15 px-5.5 py-4 gap-2.5 text-lg font-semibold',
      },
      rounded: {
        none: '',
        default: 'rounded-xs',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        '3xl': 'rounded-3xl',
        full: 'rounded-full',
      },
      fullWidth: {
        true: 'w-full',
      },
      iconOnly: {
        true: 'aspect-square p-0',
      },
      loading: {
        true: 'cursor-progress',
      },
    },
    compoundVariants: [
      {
        variant: 'solid',
        color: 'default',
        className:
          'bg-background border text-foreground border-background hover:border-background-secondary hover:bg-background-secondary focus:shadow-brand-xs',
      },
      {
        variant: 'solid',
        color: 'primary',
        className:
          'bg-brand-600 border border-brand-600 hover:border-brand-700 hover:bg-brand-700 focus:shadow-brand-xs',
      },
      {
        variant: 'solid',
        color: 'secondary',
        className:
          'bg-secondary-600 border border-secondary-600 hover:border-secondary-700 hover:bg-secondary-700 focus:shadow-secondary-xs',
      },
      {
        variant: 'solid',
        color: 'tertiary',
        className:
          'bg-tertiary-600 border border-tertiary-600 hover:border-tertiary-700 hover:bg-tertiary-700 focus:shadow-gray-xs',
      },
      {
        variant: 'solid',
        color: 'gray',
        className: 'bg-gray-600 border border-gray-600 hover:border-gray-700 hover:bg-gray-700 focus:shadow-gray-xs',
      },
      {
        variant: 'solid',
        color: 'error',
        className:
          'bg-error-600 border border-error-600 hover:border-error-700 hover:bg-error-700 focus:shadow-error-xs',
      },
      {
        variant: 'solid',
        color: 'warning',
        className:
          'bg-warning-600 border border-warning-600 hover:border-warning-700 hover:bg-warning-700 focus:shadow-warning-xs',
      },
      {
        variant: 'solid',
        color: 'success',
        className:
          'bg-success-600 border border-success-600 hover:border-success-700 hover:bg-success-700 focus:shadow-success-xs',
      },
      // --------------
      {
        variant: 'outline',
        color: 'default',
        className:
          'bg-background border border-border hover:border-border-secondary hover:bg-background text-foreground shadow-xs focus:shadow-brand-xs ',
      },
      {
        variant: 'outline',
        color: 'primary',
        className:
          'bg-background border border-brand-300 hover:border-brand-300 hover:bg-brand-50 text-brand-700 shadow-xs focus:shadow-brand-xs ',
      },
      {
        variant: 'outline',
        color: 'secondary',
        className:
          'bg-background border border-secondary-300 hover:border-secondary-300 hover:bg-secondary-50 text-secondary-700 shadow-xs focus:shadow-brand-xs ',
      },
      {
        variant: 'outline',
        color: 'tertiary',
        className:
          'bg-background border border-tertiary-300 hover:border-tertiary-300 hover:bg-tertiary-50 text-tertiary-700 shadow-xs focus:shadow-brand-xs',
      },
      {
        variant: 'outline',
        color: 'gray',
        className:
          'bg-background-secondary border border-border hover:bg-background text-foreground-secondary hover:text-foreground shadow-xs focus:shadow-gray-xs',
      },
      {
        variant: 'outline',
        color: 'error',
        className:
          'bg-background border border-error-300 hover:border-error-300 hover:bg-error-50 text-error-700 shadow-xs focus:shadow-error-xs ',
      },
      {
        variant: 'outline',
        color: 'warning',
        className:
          'bg-background border border-warning-300 hover:border-warning-300 hover:bg-warning-50 text-warning-700 shadow-xs focus:shadow-warning-xs ',
      },
      {
        variant: 'outline',
        color: 'success',
        className:
          'bg-background border border-success-300 hover:border-success-300 hover:bg-success-50 text-success-700 shadow-xs focus:shadow-success-xs ',
      },
      // --------------
      {
        variant: 'ghost',
        color: 'default',
        className:
          'text-foreground hover:text-foreground-secondary active:bg-transparent active:text-foreground hover:bg-background-secondary',
      },
      {
        variant: 'ghost',
        color: 'primary',
        className: 'text-brand-600 hover:text-brand-700 active:bg-transparent active:text-brand-600 hover:bg-brand-50',
      },
      {
        variant: 'ghost',
        color: 'secondary',
        className:
          'text-secondary-600 hover:text-secondary-700 active:bg-transparent active:text-secondary-600 hover:bg-secondary-50',
      },
      {
        variant: 'ghost',
        color: 'tertiary',
        className:
          'text-tertiary-600 hover:text-tertiary-700 active:bg-transparent active:text-tertiary-600 hover:bg-tertiary-50',
      },
      {
        variant: 'ghost',
        color: 'gray',
        className:
          'text-gray-600 hover:text-foreground-secondary active:bg-transparent active:text-gray-600 hover:bg-gray-50',
      },
      {
        variant: 'ghost',
        color: 'error',
        className: 'text-error-600 hover:text-error-700 active:bg-transparent active:text-error-600 hover:bg-error-50',
      },
      {
        variant: 'ghost',
        color: 'warning',
        className:
          'text-warning-600 hover:text-warning-700 active:bg-transparent active:text-warning-600 hover:bg-warning-50',
      },
      {
        variant: 'ghost',
        color: 'success',
        className:
          'text-success-600 hover:text-success-700 active:bg-transparent active:text-success-600 hover:bg-success-50',
      },

      // --------------
      {
        variant: 'link',
        color: 'default',
        className: 'text-foreground active:text-foreground-secondary hover:text-foreground-secondary',
      },
      {
        variant: 'link',
        color: 'primary',
        className: 'text-brand-600 active:text-brand-700 hover:text-brand-700',
      },
      {
        variant: 'link',
        color: 'secondary',
        className: 'text-secondary-600 active:text-secondary-700 hover:text-secondary-700',
      },
      {
        variant: 'link',
        color: 'tertiary',
        className: 'text-tertiary-600 active:text-tertiary-700 hover:text-tertiary-700',
      },
      {
        variant: 'link',
        color: 'gray',
        className: 'text-foreground active:text-foreground-secondary hover:text-foreground-secondary',
      },
      {
        variant: 'link',
        color: 'error',
        className: 'text-error-600 active:text-error-700 hover:text-error-700',
      },
      {
        variant: 'link',
        color: 'warning',
        className: 'text-warning-600 active:text-warning-700 hover:text-warning-700',
      },
      {
        variant: 'link',
        color: 'success',
        className: 'text-success-600 active:text-success-700 hover:text-success-700',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'primary',
      size: 'md',
      rounded: 'default',
      fullWidth: false,
      iconOnly: false,
      loading: false,
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
