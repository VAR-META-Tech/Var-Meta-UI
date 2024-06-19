import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Text, type TextProps } from '@var-meta/ui';

import { EnhancedView } from '@/components/View';

const aligns: TextProps['align'][] = ['center', 'center', 'justify', 'left'];
const sizes: TextProps['size'][] = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'];
const weights: TextProps['weight'][] = ['light', 'regular', 'medium', 'bold', 'semibold', 'extrabold', 'black'];

const meta: Meta = {
  title: 'Components/Typography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    align: {
      options: aligns,
      control: { type: 'select' },
    },
    size: {
      options: sizes,
      control: { type: 'select' },
    },
    weight: {
      options: weights,
      control: { type: 'select' },
    },
  },
  args: {},
};

export default meta;

const DefaultTemplate: StoryFn<TextProps> = ({ ...args }) => {
  return (
    <EnhancedView prop="Default">
      <Text {...args}>Text</Text>
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Text> = DefaultTemplate.bind({});
