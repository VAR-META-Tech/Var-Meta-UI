/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  type DrawerContentProps,
  type DrawerProps,
} from '@var-ui/core';

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
    blur: {
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
  args: {
    blur: true,
  },
  parameters: {
    docs: {
      page: null,
    },
    controls: { expanded: true },
  },
};

export default meta;

const DefaultTemplate: StoryFn<DrawerProps & { blur: boolean }> = ({ blur, ...args }) => {
  return (
    <EnhancedView prop="Default">
      <div style={{ gap: 8, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
        {sides.map((side) => (
          <Drawer key={side} {...args}>
            <DrawerTrigger asChild>
              <Button color="gray" variant="outline">
                {side}
              </Button>
            </DrawerTrigger>
            <DrawerContent blur={blur} side={side}>
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
