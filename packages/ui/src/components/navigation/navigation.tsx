import { Primitive } from '@radix-ui/react-primitive';
import { cva, type VariantProps } from 'class-variance-authority';
import React, { type ElementRef, forwardRef } from 'react';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';

const navigationVariants = cva('list-none w-full flex gap-1', {
  variants: {
    orientation: {
      horizontal: 'flex-row items-center',
      vertical: 'flex-col ',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});
export interface NavigationProps extends ElementProps<'ul'>, VariantProps<typeof navigationVariants> {
  asChild?: boolean;
}

const Navigation = forwardRef<ElementRef<'ul'>, NavigationProps>(
  ({ className, orientation, asChild, ...props }, ref) => {
    return (
      <Primitive.ul
        asChild={asChild}
        className={cn(navigationVariants({ orientation, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Navigation.displayName = 'Navigation';

export { Navigation };
