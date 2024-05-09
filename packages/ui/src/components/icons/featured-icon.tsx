import React, { forwardRef, type ElementRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../utils/cn';

const featuredIconVariants = cva('relative flex aspect-square items-center justify-center [&>svg]:z-20', {
  variants: {
    variant: {
      light: 'rounded-full',
      'light-outline': 'rounded-full',
      'dark-outline': 'rounded-full',
      'light-square': '',
      'dark-square': '',
      'mid-square': '',
      glass: [
        'text-white',
        '[&>span:first-of-type]:z-10 [&>span]:absolute [&>span]:inset-0 [&>span]:h-full [&>span]:w-full ',
        '[&>span:last-of-type]:left-[18%]  [&>span:last-of-type]:top-[-20%] [&>span:last-of-type]:rotate-[15deg]',
        '[&>span:first-of-type]:border [&>span:first-of-type]:border-white/60 [&>span:first-of-type]:bg-white/60 [&>span:first-of-type]:backdrop-blur-md',
      ],
      outline: [
        '[&>span]:absolute [&>span]:inset-0 [&>span]:h-full [&>span]:w-full [&>span]:rounded-full [&>span]:border-2',
        '[&>span]:left-1/2 [&>span]:top-1/2 [&>span]:-translate-x-1/2 [&>span]:-translate-y-1/2',
        '[&>span:first-of-type]:scale-[.65] [&>span:first-of-type]:opacity-30',
        '[&>span:last-of-type]:scale-[.83] [&>span:last-of-type]:opacity-10',
      ],
      modern: 'bg-background text-foreground-secondary shadow-xs border-border-secondary border',
    },
    color: {
      brand: '',
      gray: '',
      error: '',
      warning: '',
      success: '',
    },
    size: {
      sm: 'h-8 w-8 min-w-[2rem] [&>svg]:h-4 [&>svg]:w-4',
      md: 'h-10 w-10 min-w-[2.5rem] [&>svg]:h-5 [&>svg]:w-5',
      lg: 'h-12 w-12 min-w-[3rem] p-1.5 [&>svg]:h-6 [&>svg]:w-6',
      xl: 'h-14 w-14 min-w-[3.5rem] p-1.5 [&>svg]:h-7 [&>svg]:w-7',
    },
  },
  compoundVariants: [
    {
      size: 'sm',
      variant: ['light-square', 'dark-square', 'mid-square', 'modern'],
      className: 'rounded-sm',
    },
    {
      size: 'md',
      variant: ['light-square', 'dark-square', 'mid-square', 'modern'],
      className: 'rounded-md',
    },
    {
      size: 'lg',
      variant: ['light-square', 'dark-square', 'mid-square', 'modern'],
      className: 'rounded-lg',
    },
    {
      size: 'xl',
      variant: ['light-square', 'dark-square', 'mid-square', 'modern'],
      className: 'rounded-xl',
    },

    {
      size: 'sm',
      variant: ['glass'],
      className: '[&>span]:rounded-sm',
    },
    {
      size: 'md',
      variant: ['glass'],
      className: '[&>span]:rounded-md',
    },
    {
      size: 'lg',
      variant: ['glass'],
      className: '[&>span]:rounded-lg ',
    },
    {
      size: 'xl',
      variant: ['glass'],
      className: '[&>span]:rounded-xl ',
    },

    {
      size: 'sm',
      variant: ['light-outline', 'dark-outline'],
      className: 'border-4',
    },
    {
      size: 'md',
      variant: ['light-outline', 'dark-outline'],
      className: 'border-[6px]',
    },
    {
      size: 'lg',
      variant: ['light-outline', 'dark-outline'],
      className: 'border-[8px]',
    },
    {
      size: 'xl',
      variant: ['light-outline', 'dark-outline'],
      className: 'border-[10px]',
    },

    {
      variant: ['light', 'light-outline', 'light-square'],
      color: 'brand',
      className: 'text-brand-600 bg-brand-100',
    },
    {
      variant: ['light', 'light-outline', 'light-square'],
      color: 'gray',
      className: 'bg-gray-100 text-gray-500',
    },
    {
      variant: ['light', 'light-outline', 'light-square'],
      color: 'error',
      className: 'text-error-600 bg-error-100',
    },
    {
      variant: ['light', 'light-outline', 'light-square'],
      color: 'warning',
      className: 'text-warning-600 bg-warning-100',
    },
    {
      variant: ['light', 'light-outline', 'light-square'],
      color: 'success',
      className: 'text-success-600 bg-success-100',
    },

    {
      variant: 'light-outline',
      color: 'brand',
      className: 'border-brand-50',
    },
    {
      variant: 'light-outline',
      color: 'gray',
      className: 'border-gray-50',
    },
    {
      variant: 'light-outline',
      color: 'error',
      className: 'border-error-50',
    },
    {
      variant: 'light-outline',
      color: 'warning',
      className: 'border-warning-50',
    },
    {
      variant: 'light-outline',
      color: 'success',
      className: 'border-success-50',
    },

    {
      variant: ['dark-outline', 'dark-square', 'mid-square'],
      className: 'text-white',
    },

    {
      variant: ['dark-outline', 'mid-square'],
      color: 'brand',
      className: 'bg-brand-600 border-brand-700',
    },
    {
      variant: ['dark-outline', 'mid-square'],
      color: 'gray',
      className: 'border-gray-700 bg-gray-600',
    },
    {
      variant: ['dark-outline', 'mid-square'],
      color: 'error',
      className: 'bg-error-600 border-error-700',
    },
    {
      variant: ['dark-outline', 'mid-square'],
      color: 'warning',
      className: 'bg-warning-600 border-warning-700',
    },
    {
      variant: ['dark-outline', 'mid-square'],
      color: 'success',
      className: 'bg-success-600 border-success-700',
    },

    {
      variant: 'dark-square',
      color: 'brand',
      className: 'bg-brand-800',
    },
    {
      variant: 'dark-square',
      color: 'gray',
      className: 'bg-gray-800',
    },
    {
      variant: 'dark-square',
      color: 'error',
      className: 'bg-error-800',
    },
    {
      variant: 'dark-square',
      color: 'warning',
      className: 'bg-warning-800',
    },
    {
      variant: 'dark-square',
      color: 'success',
      className: 'bg-success-800',
    },

    {
      variant: 'glass',
      color: 'brand',
      className: '[&>span:last-of-type]:bg-brand-700',
    },
    {
      variant: 'glass',
      color: 'gray',
      className: '[&>span:last-of-type]:bg-gray-700',
    },
    {
      variant: 'glass',
      color: 'error',
      className: '[&>span:last-of-type]:bg-error-700',
    },
    {
      variant: 'glass',
      color: 'warning',
      className: '[&>span:last-of-type]:bg-warning-700',
    },
    {
      variant: 'glass',
      color: 'success',
      className: '[&>span:last-of-type]:bg-success-700',
    },

    {
      variant: 'outline',
      color: 'brand',
      className: 'text-brand-600 [&>span]:border-brand-600',
    },
    {
      variant: 'outline',
      color: 'gray',
      className: 'text-gray-600 [&>span]:border-gray-600',
    },
    {
      variant: 'outline',
      color: 'error',
      className: 'text-error-600 [&>span]:border-error-600',
    },
    {
      variant: 'outline',
      color: 'warning',
      className: 'text-warning-600 [&>span]:border-warning-600',
    },
    {
      variant: 'outline',
      color: 'success',
      className: 'text-success-600 [&>span]:border-success-600',
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'brand',
    variant: 'light',
  },
});

export interface FeaturedIconProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof featuredIconVariants> {}

const FeaturedIcon = forwardRef<ElementRef<'div'>, FeaturedIconProps>((props, ref) => {
  const { className, size, variant, color, children, ...etc } = props;

  if (variant === 'glass' || variant === 'outline') {
    return (
      <div className={cn(featuredIconVariants({ size, variant, color, className }))} ref={ref} {...etc}>
        <span />
        <span />
        {children}
      </div>
    );
  }

  return (
    <>
      <div className={cn(featuredIconVariants({ size, variant, color, className }))} ref={ref} {...etc}>
        {children}
      </div>
    </>
  );
});

export default FeaturedIcon;
