import React, { forwardRef, type ElementRef, type ReactNode } from 'react';
import { Primitive } from '@radix-ui/react-primitive';
import { cva, type VariantProps } from 'class-variance-authority';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { useNavigationContext } from './navigation-context';

export const navigationItemVariants = cva(
  'text-md flex h-10 cursor-pointer items-center justify-between gap-2 rounded-sm px-3 py-2 font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground-secondary focus:shadow-gray-base hover:bg-gray-50 hover:text-gray-800',
        brand: 'bg-brand-700 text-brand-100 hover:bg-brand-600 focus:shadow-brand-base hover:text-white',
        dark: 'focus:shadow-gray-base bg-gray-950 text-gray-100 hover:bg-gray-800 hover:text-white',
      },
      active: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
    compoundVariants: [
      {
        variant: 'default',
        active: true,
        className: 'bg-gray-50 text-gray-800',
      },
      {
        variant: 'dark',
        active: true,
        className: 'bg-gray-800 text-white',
      },
      {
        variant: 'brand',
        active: true,
        className: 'bg-brand-600 text-white',
      },
    ],
  }
);
export interface NavigationItemProps extends ElementProps<'li'>, VariantProps<typeof navigationItemVariants> {
  asChild?: boolean;
  label?: ReactNode;
  icon?: ReactNode;
}

const NavigationItem = forwardRef<ElementRef<'li'>, NavigationItemProps>(
  ({ className, label, icon, children, variant: variantProp, active, asChild, ...props }, ref) => {
    const { variant } = useNavigationContext();

    return (
      <Primitive.li
        asChild={asChild}
        className={cn(navigationItemVariants({ variant: variantProp || variant, active, className }))}
        data-active={active}
        ref={ref}
        {...props}
      >
        <div className="flex flex-1 items-center gap-3">
          {icon}
          {label}
        </div>
        {children}
      </Primitive.li>
    );
  }
);

NavigationItem.displayName = 'NavigationItem';

export { NavigationItem };
