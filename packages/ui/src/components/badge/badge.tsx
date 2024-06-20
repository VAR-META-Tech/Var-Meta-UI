import React, { forwardRef, type ElementRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { radiusVariant } from '../../utils/variant-common';

const badgeVariants = tv({
  base: 'inline-flex items-center justify-center text-center font-medium transition-colors focus:outline-none',
  variants: {
    size: {
      sm: 'px-2.5 py-2 text-xs',
      md: 'px-3 py-2.5 text-xs',
      lg: 'px-4 py-3.5 text-base',
    },
    variant: {
      gray: 'text-foreground-secondary border border-border-secondary bg-gray-50',
      brand: 'text-brand-500 border border-brand-500 bg-brand-50 ',
      error: 'text-error-500 border border-error-500 bg-error-50 ',
      warning: 'text-warning-500 border border-warning-500 bg-warning-50 ',
      success: 'text-success-500 border border-success-500 bg-success-50 ',
    },
    radius: radiusVariant,
  },
  defaultVariants: {
    size: 'md',
    variant: 'gray',
    radius: 'xs',
  },
});

export interface BadgeProps extends ElementProps<'div'>, VariantProps<typeof badgeVariants> {}

const Badge = forwardRef<ElementRef<'div'>, BadgeProps>((props: BadgeProps, ref) => {
  const { className, radius = 'xs', variant, size = 'md', children, ...etc } = props;

  return (
    <div ref={ref} className={cn(badgeVariants({ variant, radius, size, className }))} {...etc}>
      {children}
    </div>
  );
});

export { Badge, badgeVariants };
