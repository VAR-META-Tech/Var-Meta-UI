import { cva, type VariantProps } from 'class-variance-authority';

import { radiusVariant } from '../../utils/variant-common';

export const buttonVariants = cva(
  'inline-flex min-h-0 cursor-pointer items-center justify-center text-base font-medium outline-none transition-all focus:outline-none disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        solid: 'shadow-xs disabled:text-disabled text-white disabled:border-gray-200 disabled:bg-gray-100',
        outline: 'disabled:bg-gray-10 disabled:text-disabled disabled:border-gray-200',
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
        xs: 'gap-xs p-2 h-8 text-sm font-semibold',
        sm: 'gap-xs p-2 h-9 text-sm font-semibold',
        md: 'gap-xs h-10 px-3.5 py-2.5 text-sm font-semibold',
        lg: 'gap-sm h-11 px-4 py-2.5 text-base font-semibold',
        xl: 'px-4.5 gap-sm h-12 py-3 text-base font-semibold',
        '2xl': 'h-15 px-5.5 gap-2.5 py-4 text-lg font-semibold',
      },
      freeHeight: {
        true: 'h-auto',
      },
      radius: radiusVariant,
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
          'bg-background text-foreground border-background hover:border-background-secondary hover:bg-background-secondary focus:shadow-brand-xs border',
      },
      {
        variant: 'solid',
        color: 'primary',
        className:
          'bg-brand-500 border-brand-500 hover:border-brand-600 hover:bg-brand-600 focus:shadow-brand-xs border',
      },
      {
        variant: 'solid',
        color: 'secondary',
        className:
          'bg-secondary-500 border-secondary-500 hover:border-secondary-600 hover:bg-secondary-600 focus:shadow-secondary-xs border',
      },
      {
        variant: 'solid',
        color: 'tertiary',
        className:
          'bg-tertiary-500 border-tertiary-500 hover:border-tertiary-600 hover:bg-tertiary-600 focus:shadow-gray-xs border',
      },
      {
        variant: 'solid',
        color: 'gray',
        className: 'focus:shadow-gray-xs border border-gray-500 bg-gray-500 hover:border-gray-600 hover:bg-gray-600',
      },
      {
        variant: 'solid',
        color: 'error',
        className:
          'bg-error-500 border-error-500 hover:border-error-600 hover:bg-error-600 focus:shadow-error-xs border',
      },
      {
        variant: 'solid',
        color: 'warning',
        className:
          'bg-warning-500 border-warning-500 hover:border-warning-600 hover:bg-warning-600 focus:shadow-warning-xs border',
      },
      {
        variant: 'solid',
        color: 'success',
        className:
          'bg-success-500 border-success-500 hover:border-success-600 hover:bg-success-600 focus:shadow-success-xs border',
      },
      // --------------
      {
        variant: 'outline',
        color: 'default',
        className:
          'bg-background border-border hover:border-border-secondary hover:bg-background text-foreground shadow-xs focus:shadow-brand-xs border ',
      },
      {
        variant: 'outline',
        color: 'primary',
        className:
          'bg-background border-brand-300 hover:border-brand-300 hover:bg-brand-50 text-brand-600 shadow-xs focus:shadow-brand-xs border ',
      },
      {
        variant: 'outline',
        color: 'secondary',
        className:
          'bg-background border-secondary-300 hover:border-secondary-300 hover:bg-secondary-50 text-secondary-600 shadow-xs focus:shadow-brand-xs border ',
      },
      {
        variant: 'outline',
        color: 'tertiary',
        className:
          'bg-background border-tertiary-300 hover:border-tertiary-300 hover:bg-tertiary-50 text-tertiary-600 shadow-xs focus:shadow-brand-xs border',
      },
      {
        variant: 'outline',
        color: 'gray',
        className:
          'bg-background-secondary border-border hover:bg-background text-foreground-secondary hover:text-foreground shadow-xs focus:shadow-gray-xs border',
      },
      {
        variant: 'outline',
        color: 'error',
        className:
          'bg-background border-error-300 hover:border-error-300 hover:bg-error-50 text-error-600 shadow-xs focus:shadow-error-xs border ',
      },
      {
        variant: 'outline',
        color: 'warning',
        className:
          'bg-background border-warning-300 hover:border-warning-300 hover:bg-warning-50 text-warning-600 shadow-xs focus:shadow-warning-xs border ',
      },
      {
        variant: 'outline',
        color: 'success',
        className:
          'bg-background border-success-300 hover:border-success-300 hover:bg-success-50 text-success-600 shadow-xs focus:shadow-success-xs border ',
      },
      // --------------
      {
        variant: 'ghost',
        color: 'default',
        className:
          'text-foreground hover:text-foreground-secondary active:text-foreground hover:bg-background-secondary active:bg-transparent',
      },
      {
        variant: 'ghost',
        color: 'primary',
        className: 'text-brand-500 hover:text-brand-600 active:text-brand-500 hover:bg-brand-50 active:bg-transparent',
      },
      {
        variant: 'ghost',
        color: 'secondary',
        className:
          'text-secondary-500 hover:text-secondary-600 active:text-secondary-500 hover:bg-secondary-50 active:bg-transparent',
      },
      {
        variant: 'ghost',
        color: 'tertiary',
        className:
          'text-tertiary-500 hover:text-tertiary-600 active:text-tertiary-500 hover:bg-tertiary-50 active:bg-transparent',
      },
      {
        variant: 'ghost',
        color: 'gray',
        className:
          'hover:text-foreground-secondary text-gray-500 hover:bg-gray-50 active:bg-transparent active:text-gray-500',
      },
      {
        variant: 'ghost',
        color: 'error',
        className: 'text-error-500 hover:text-error-600 active:text-error-500 hover:bg-error-50 active:bg-transparent',
      },
      {
        variant: 'ghost',
        color: 'warning',
        className:
          'text-warning-500 hover:text-warning-600 active:text-warning-500 hover:bg-warning-50 active:bg-transparent',
      },
      {
        variant: 'ghost',
        color: 'success',
        className:
          'text-success-500 hover:text-success-600 active:text-success-500 hover:bg-success-50 active:bg-transparent',
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
        className: 'text-brand-500 active:text-brand-600 hover:text-brand-600',
      },
      {
        variant: 'link',
        color: 'secondary',
        className: 'text-secondary-500 active:text-secondary-600 hover:text-secondary-600',
      },
      {
        variant: 'link',
        color: 'tertiary',
        className: 'text-tertiary-500 active:text-tertiary-600 hover:text-tertiary-600',
      },
      {
        variant: 'link',
        color: 'gray',
        className: 'text-foreground active:text-foreground-secondary hover:text-foreground-secondary',
      },
      {
        variant: 'link',
        color: 'error',
        className: 'text-error-500 active:text-error-600 hover:text-error-600',
      },
      {
        variant: 'link',
        color: 'warning',
        className: 'text-warning-500 active:text-warning-600 hover:text-warning-600',
      },
      {
        variant: 'link',
        color: 'success',
        className: 'text-success-500 active:text-success-600 hover:text-success-600',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'primary',
      size: 'md',
      radius: 'md',
      fullWidth: false,
      iconOnly: false,
      loading: false,
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
