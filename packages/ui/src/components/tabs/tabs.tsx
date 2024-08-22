import React, { forwardRef, useMemo, type ElementRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { useControllableState } from '@radix-ui/react-use-controllable-state';

import { type ElementProps } from '../../types';
import { TabsProvider, type TabsContext } from './tabs.context';

export interface TabsProps
  extends ElementProps<typeof TabsPrimitive.Root>,
    Pick<TabsContext, 'variant' | 'radius' | 'size' | 'orientation' | 'layoutId'> {}

export const Tabs = forwardRef<ElementRef<typeof TabsPrimitive.Root>, TabsProps>((props, ref) => {
  const {
    size = 'md',
    radius = 'lg',
    variant = 'solid',
    orientation = 'horizontal',
    value,
    defaultValue,
    onValueChange,
    layoutId = 'cursor',
    ...etc
  } = props;

  const [selectedItem = '', setSelectedItem] = useControllableState<string>({
    prop: value,
    defaultProp: defaultValue,
    onChange: onValueChange,
  });

  return (
    <TabsProvider
      value={useMemo(
        () => ({ value: selectedItem, setValue: setSelectedItem, size, radius, variant, orientation, layoutId }),
        [selectedItem, setSelectedItem, size, radius, variant, orientation, layoutId]
      )}
    >
      <TabsPrimitive.Root
        ref={ref}
        {...etc}
        value={selectedItem}
        onValueChange={setSelectedItem}
        className={'overflow-hidden'}
      />
    </TabsProvider>
  );
});

Tabs.displayName = TabsPrimitive.Root.displayName;
