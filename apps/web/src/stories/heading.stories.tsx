import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Heading, type HeadingProps } from '@var-meta/ui';

import { EnhancedView } from '@/components/View';

const aligns: HeadingProps['align'][] = ['center', 'center', 'justify', 'left'];
const sizes: HeadingProps['size'][] = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'];
const weights: HeadingProps['weight'][] = ['light', 'regular', 'medium', 'bold', 'semibold', 'extrabold', 'black'];

const meta: Meta = {
  title: 'Components/Typography/Heading',
  component: Heading,
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

const DefaultTemplate: StoryFn<HeadingProps> = ({ ...args }) => {
  return (
    <EnhancedView prop="Default">
      <Heading {...args}>Heading</Heading>
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Heading> = DefaultTemplate.bind({});
