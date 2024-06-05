import React, { forwardRef, type ElementRef, type ElementType, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { useNavigationContext } from './navigation-context';

export const navigationItemVariants = cva(
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
export interface NavigationItemProps extends ElementProps<'div'>, VariantProps<typeof navigationItemVariants> {
  label?: ReactNode;
  icon?: ReactNode;
  as?: ElementType;
}

const NavigationItem = forwardRef<ElementRef<'div'>, NavigationItemProps>(
  (
    { className, as, onClick, label, icon, children, variant: variantProp, active, collapsed: collapsedProp, ...props },
    ref
  ) => {
    const { variant, collapsed: collapsedContext } = useNavigationContext();

    const collapsed = Boolean(collapsedProp || collapsedContext);

    const Comp = as ? as : 'a';

    return (
      <Comp
        data-active={active}
        ref={ref}
        className={cn(navigationItemVariants({ collapsed, variant: variantProp || variant, active, className }))}
        onClick={onClick}
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
      </Comp>
    );
  }
);

NavigationItem.displayName = 'NavigationItem';

export { NavigationItem };
