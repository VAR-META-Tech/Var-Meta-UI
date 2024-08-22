import React, { forwardRef, type ElementRef, type ElementType, type ReactNode } from 'react';
import { domMax, LazyMotion, m } from 'framer-motion';
import { tv, type VariantProps } from 'tailwind-variants';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { useNavigationContext } from './navigation-context';

export const navigationItemVariants = tv({
  base: 'text-sm relative flex h-10 cursor-pointer items-center justify-between gap-2 rounded-sm  font-medium transition-colors',
  variants: {
    variant: {
      default: 'text-foreground-secondary hover:bg-background-light hover:text-button dark:hover:text-white',
      brand: 'bg-brand-700 text-brand-100 hover:bg-brand-600 focus:shadow-brand-base hover:text-white',
      dark: 'focus:shadow-gray-base bg-gray-950 text-gray-100 hover:bg-gray-800 hover:text-white',
    },
    active: {
      true: '',
      false: '',
    },
    collapsed: {
      true: 'p-2.5 min-w-10',
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
      className: 'bg-background-light text-button dark:text-foreground-button dark:bg-button',
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
});
export interface NavigationItemProps extends ElementProps<'div'>, VariantProps<typeof navigationItemVariants> {
  label?: ReactNode;
  icon?: ReactNode;
  as?: ElementType;
  withActiveCursor?: boolean;
  forceCollapse?: boolean;
}

const NavigationItem = forwardRef<ElementRef<'div'>, NavigationItemProps>(
  (
    {
      className,
      as,
      onClick,
      withActiveCursor,
      label,
      icon,
      children,
      variant: variantProp,
      active,
      collapsed: collapsedProp,
      forceCollapse = undefined,
      ...props
    },
    ref
  ) => {
    const { variant, collapsed: collapsedContext } = useNavigationContext();

    const collapsed = forceCollapse !== undefined ? forceCollapse : Boolean(collapsedProp || collapsedContext);

    const Comp = as ? as : 'a';

    return (
      <Comp
        data-active={active}
        ref={ref}
        className={navigationItemVariants({ collapsed, variant: variantProp || variant, active, className })}
        onClick={onClick}
        {...props}
      >
        {collapsed ? (
          <div className="aspect-square min-w-5">{icon}</div>
        ) : (
          <>
            <div
              className={cn('flex flex-1 items-center gap-3', {
                'w-[calc(100%-28px)]': !!children,
              })}
            >
              {icon}
              <div className="flex-1 truncate whitespace-nowrap" title={String(label)}>
                {label}
              </div>
            </div>
            {children && <>{children}</>}
          </>
        )}

        {active && withActiveCursor ? (
          <LazyMotion features={domMax}>
            <m.span
              className={cn('bg-button absolute -left-5 top-2.5 h-5 w-1 rounded-r-sm')}
              layoutDependency={false}
              layoutId="nav-cursor"
              transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
            />
          </LazyMotion>
        ) : null}
      </Comp>
    );
  }
);

NavigationItem.displayName = 'NavigationItem';

export { NavigationItem };
