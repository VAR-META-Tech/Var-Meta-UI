import React, { type ElementRef } from 'react';
import { composeEventHandlers } from '@radix-ui/primitive';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { domMax, LazyMotion, m } from 'framer-motion';
import { tv } from 'tailwind-variants';

import { type ElementProps } from '../../types';
import { useTabsContext } from './tabs.context';

const tabsTriggerVariant = tv({
  base: 'relative inline-flex h-full w-full font-medium flex-auto p-0.5 items-center justify-center gap-2 transition-all whitespace-nowrap disabled:pointer-events-none',
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-sm',
      lg: 'text-md',
    },
    active: {
      true: 'text-foreground',
      false: 'text-foreground-quaternary',
    },
  },
});

const cursorVariant = tv({
  base: 'absolute inset-0 z-0',
  variants: {
    variant: {
      solid: 'bg-white dark:bg-gray-600 shadow-sm',
      outline: 'bg-transparent border border-border',
    },
    radius: {
      none: 'rounded-none',
      xs: 'rounded-[1px]',
      sm: 'rounded-[2px]',
      md: 'rounded-xs',
      lg: 'rounded-sm',
      xl: 'rounded-md',
      '2xl': 'rounded-xl',
      '3xl': 'rounded-2xl',
      half: 'rounded-half',
      full: 'rounded-full',
    },
  },
});

export interface TabsTriggerProps extends ElementProps<typeof TabsPrimitive.Trigger> {}

export const TabsTrigger = React.forwardRef<ElementRef<typeof TabsPrimitive.Trigger>, TabsTriggerProps>(
  ({ className, children, onClick, ...props }, ref) => {
    const { value, size, variant, radius, setValue } = useTabsContext();

    const isSelected = props.value === value;

    return (
      <TabsPrimitive.Trigger
        onClick={composeEventHandlers(onClick, () => setValue(props.value))}
        ref={ref}
        className={tabsTriggerVariant({ size, active: isSelected, className })}
        {...props}
      >
        <div className="relative z-10">{children}</div>
        {isSelected ? (
          <LazyMotion features={domMax}>
            <m.span
              className={cursorVariant({ variant, radius })}
              data-slot="cursor"
              layoutDependency={false}
              layoutId="cursor"
              transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
            />
          </LazyMotion>
        ) : null}
      </TabsPrimitive.Trigger>
    );
  }
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
