import React, { type ElementRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { tv } from 'tailwind-variants';

import { type ElementProps } from '../../types';
import { radiusVariant } from '../../utils/variant-common';
import { useTabsContext } from './tabs.context';

const tabsListVariant = tv({
  base: 'inline-flex gap-1 p-1 items-center justify-between w-full',
  variants: {
    variant: {
      solid: 'bg-background-tertiary border border-border-secondary',
      outline: 'bg-transparent border border-border-secondary',
    },
    radius: radiusVariant,
    size: {
      sm: 'h-10',
      md: 'h-11',
      lg: 'h-12',
    },
    orientation: {
      vertical: 'flex-col',
      horizontal: 'flex-row',
    },
  },
  defaultVariants: {
    variant: 'solid',
    radius: 'md',
    size: 'md',
    orientation: 'horizontal',
  },
});

export interface TabsListProps extends ElementProps<typeof TabsPrimitive.List> {}

export const TabsList = React.forwardRef<ElementRef<typeof TabsPrimitive.List>, TabsListProps>(
  ({ className, ...props }, ref) => {
    const { radius, orientation, size, variant } = useTabsContext();

    return (
      <TabsPrimitive.List
        ref={ref}
        className={tabsListVariant({
          radius,
          orientation,
          size,
          variant,
          className,
        })}
        {...props}
      />
    );
  }
);
TabsList.displayName = TabsPrimitive.List.displayName;
