import { Primitive } from '@radix-ui/react-primitive';
import { cva, type VariantProps } from 'class-variance-authority';
import React, { type ElementRef, forwardRef } from 'react';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { NavigationProvider } from './navigation-context';

const navigationVariants = cva('list-none w-full flex gap-1', {
  variants: {
    orientation: {
      horizontal: 'flex-row items-center',
      vertical: 'flex-col ',
    },
    variant: {
      default: '',
      brand: '',
      dark: '',
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
  ({ className, orientation, asChild, variant, ...props }, ref) => {
    return (
      <NavigationProvider
        value={{
          variant,
          orientation,
        }}
      >
        <Primitive.ul
          asChild={asChild}
          className={cn(navigationVariants({ orientation, className }))}
          ref={ref}
          {...props}
        />
      </NavigationProvider>
    );
  }
);

Navigation.displayName = 'Navigation';

export { Navigation };
