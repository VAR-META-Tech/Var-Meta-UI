import { HalfCircularProgress, type HalfCircularProgressProps } from '@hashgraph/ui';
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { EnhancedView } from '@/components/View';

const sizes: HalfCircularProgressProps['size'][] = ['xxs', 'xs', 'sm', 'md', 'lg'];

const meta: Meta = {
  title: 'Components/HalfCircularProgress',
  component: HalfCircularProgress,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: sizes,
      control: {
        type: 'select',
      },
    },
  },
  args: {
    value: 40,
  },
};

export default meta;

const DefaultTemplate: StoryFn<HalfCircularProgressProps> = ({ ...args }) => {
  return (
    <EnhancedView prop="Default">
      <HalfCircularProgress {...args} />
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof HalfCircularProgress> = DefaultTemplate.bind({});
