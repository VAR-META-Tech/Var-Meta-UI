import { CircularProgress, type CircularProgressProps } from '@hashgraph/ui';
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { EnhancedView } from '@/components/View';

const sizes: CircularProgressProps['size'][] = ['xxs', 'xs', 'sm', 'md', 'lg'];

const meta: Meta = {
  title: 'Components/CircularProgress',
  component: CircularProgress,
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

const DefaultTemplate: StoryFn<CircularProgressProps> = ({ ...args }) => {
  return (
    <EnhancedView prop="Default">
      <CircularProgress {...args} />
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof CircularProgress> = DefaultTemplate.bind({});
