/* eslint-disable react/no-unescaped-entities */
import type { Meta, StoryFn } from '@storybook/react';
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
} from '@swiss-digital-assets-institute/ui';
import { type DrawerContentProps } from '@swiss-digital-assets-institute/ui';
import React from 'react';

import { EnhancedView } from '@/components/View';

const sides: DrawerContentProps['side'][] = ['left', 'bottom', 'right', 'top'];

const meta: Meta = {
  title: 'Components/Drawer',
  component: Drawer,
  argTypes: {
    defaultOpen: {
      options: [true, false],
      control: {
        type: 'select',
      },
    },
    open: {
      options: [true, false, undefined],
      control: {
        type: 'select',
      },
    },
    side: {
      options: sides,
      control: {
        type: 'select',
      },
    },
  },
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
                <DrawerTitle>Drawer title</DrawerTitle>
                <DrawerDescription>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex corrupti ducimus amet nihil error eum?
                  Eum alias unde voluptate nisi, dolorem suscipit ullam molestiae nobis? Deserunt voluptatibus facere in
                  praesentium!
                </DrawerDescription>
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
