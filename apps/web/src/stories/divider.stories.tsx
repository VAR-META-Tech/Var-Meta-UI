import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Divider, type DividerProps } from '@var-meta-tech/ui';

import { EnhancedView } from '@/components/View';

const aligns: DividerProps['align'][] = ['left', 'center', 'right'];
const orientations: DividerProps['orientation'][] = ['horizontal', 'vertical'];

const meta: Meta = {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    align: {
      options: aligns,
      control: {
        type: 'select',
      },
    },
    orientation: {
      options: orientations,
      control: {
        type: 'select',
      },
    },
  },
  args: {
    align: 'center',
    orientation: 'horizontal',
  },
  parameters: {
    docs: {
      page: null,
    },
    controls: { expanded: true },
  },
};

export default meta;

const DefaultTemplate: StoryFn<DividerProps> = ({ ...args }: any) => {
  return (
    <EnhancedView prop="Default">
      <Divider {...args}>Hello</Divider>
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Divider> = DefaultTemplate.bind({});
