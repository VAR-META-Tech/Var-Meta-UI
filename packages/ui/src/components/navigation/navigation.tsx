import React, { forwardRef, type ElementRef } from 'react';
import { Primitive } from '@radix-ui/react-primitive';
import { tv, type VariantProps } from 'tailwind-variants';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { NavigationProvider } from './navigation-context';

const navigationVariants = tv({
  base: 'flex w-full list-none gap-1',
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
  collapsed?: boolean;
}

const Navigation = forwardRef<ElementRef<'ul'>, NavigationProps>(
  ({ className, orientation, collapsed, asChild, variant, ...props }, ref) => {
    return (
      <NavigationProvider value={{ variant, collapsed, orientation }}>
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
