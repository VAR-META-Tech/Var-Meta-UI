import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { VStack, type VStackProps } from '@var-ui/core';

import { View } from '@/components/View';

const spacing: VStackProps['spacing'][] = [
  0,
  2,
  4,
  6,
  8,
  10,
  12,
  16,
  20,
  24,
  32,
  40,
  48,
  64,
  'none',
  'xxs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
  '8xl',
  '9xl',
  '10xl',
  '11xl',
];

const justify: VStackProps['justify'][] = ['around', 'between', 'evenly', 'start', 'end', 'default'];
const align: VStackProps['align'][] = ['default', 'center', 'start', 'end', 'baseline'];

const meta: Meta = {
  title: 'Components/utilities/VStack',
  component: VStack,
  tags: ['autodocs'],
  argTypes: {
    spacing: {
      options: spacing,
      control: { type: 'select' },
    },
    justify: {
      options: justify,
      control: { type: 'select' },
    },
    align: {
      options: align,
      control: { type: 'select' },
    },
  },
  args: {},
};

export default meta;

const DefaultTemplate: StoryFn<VStackProps> = ({ ...args }) => {
  return (
    <View prop="Default">
      <VStack className="w-full" {...args}>
        <div className="bg-red-300 w-10 h-10 rounded-sm flex justify-center items-center"> 1</div>
        <div className="bg-blue-300 w-10 h-10 rounded-sm flex justify-center items-center"> 2</div>
        <div className="bg-green-300 w-10 h-10 rounded-sm flex justify-center items-center"> 3</div>
      </VStack>
    </View>
  );
};

export const Default: StoryFn<typeof VStack> = DefaultTemplate.bind({});
