import React, { forwardRef, type ElementRef, type ReactNode } from 'react';
import { Primitive } from '@radix-ui/react-primitive';
import { cva, type VariantProps } from 'class-variance-authority';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { useNavigationContext } from './navigation-context';

export const navigationLinkVariants = cva(
  'text-sm flex h-10 cursor-pointer items-center justify-between gap-2 rounded-sm  font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'focus:shadow-gray-base text-foreground-quaternary hover:bg-background-tertiary hover:text-foreground',
        brand: 'bg-brand-700 text-brand-100 hover:bg-brand-600 focus:shadow-brand-base hover:text-white',
        dark: 'focus:shadow-gray-base bg-gray-950 text-gray-100 hover:bg-gray-800 hover:text-white',
      },
      active: {
        true: '',
        false: '',
      },
      collapsed: {
        true: 'p-2.5',
        false: 'px-3 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
    compoundVariants: [
      {
        variant: 'default',
        active: true,
        className: 'bg-background-tertiary text-brand-500 hover:text-brand-500',
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
export interface NavigationLinkProps extends ElementProps<'a'>, VariantProps<typeof navigationLinkVariants> {
  asChild?: boolean;
  label?: ReactNode;
  icon?: ReactNode;
}

const NavigationLink = forwardRef<ElementRef<'a'>, NavigationLinkProps>(
  (
    { className, label, icon, children, variant: variantProp, active, asChild, collapsed: collapsedProp, ...props },
    ref
  ) => {
    const { variant, collapsed: collapsedContext } = useNavigationContext();

    const collapsed = Boolean(collapsedProp || collapsedContext);
    return (
      <Primitive.a
        asChild={asChild}
        data-active={active}
        ref={ref}
        className={cn(navigationLinkVariants({ collapsed, variant: variantProp || variant, active, className }))}
        {...props}
      >
        {collapsed ? (
          icon
        ) : (
          <>
            <div className="flex flex-1 items-center gap-3">
              {icon}
              {label}
            </div>
            <div className="ml-2">{children}</div>
          </>
        )}
      </Primitive.a>
    );
  }
);

NavigationLink.displayName = 'NavigationLink';

export { NavigationLink };
