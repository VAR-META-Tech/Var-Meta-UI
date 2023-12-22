/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  type DrawerProps,
  DrawerTitle,
  DrawerTrigger,
} from '@hashgraph/ui';
import { type DrawerContentProps } from '@hashgraph/ui';
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { EnhancedView } from '@/components/View';

const sides: DrawerContentProps['side'][] = ['left', 'bottom', 'right', 'top'];

const meta: Meta = {
  title: 'Components/Drawer',
  component: Drawer,
  argTypes: {},
  args: {},
  parameters: {
    docs: {
      page: null,
    },
    controls: { expanded: true },
  },
};

export default meta;

const DefaultTemplate: StoryFn<DrawerProps> = ({ ...args }: any) => {
  return (
    <EnhancedView prop="Default">
      <div
        style={{
          gap: 8,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        }}
      >
        {sides.map((side) => (
          <Drawer key={side} {...args}>
            <DrawerTrigger asChild>
              <Button variant="secondary-gray">{side}</Button>
            </DrawerTrigger>
            <DrawerContent side={side}>
              <DrawerHeader>
                <DrawerTitle>Edit profile</DrawerTitle>
                <DrawerDescription>Make changes to your profile here. Click save when you're done.</DrawerDescription>
              </DrawerHeader>

              <DrawerFooter>
                <DrawerClose asChild>
                  <Button type="submit">Save changes</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        ))}
      </div>
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Drawer> = DefaultTemplate.bind({});
