import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { HStack, type HStackProps } from '@var-ui/core';

import { View } from '@/components/View';

const spacing: HStackProps['spacing'][] = [
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

const pos: HStackProps['pos'][] = ['left', 'right', 'center', 'apart', 'around', 'evenly'];
const align: HStackProps['align'][] = ['default', 'center', 'start', 'end', 'baseline'];

const meta: Meta = {
  title: 'Components/utilities/HStack',
  component: HStack,
  tags: ['autodocs'],
  argTypes: {
    spacing: {
      options: spacing,
      control: { type: 'select' },
    },
    pos: {
      options: pos,
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

const DefaultTemplate: StoryFn<HStackProps> = ({ ...args }) => {
  return (
    <View prop="Default">
      <HStack className="w-full" {...args}>
        <div className="bg-red-300 w-10 h-10 rounded-sm flex justify-center items-center"> 1</div>
        <div className="bg-blue-300 w-10 h-10 rounded-sm flex justify-center items-center"> 2</div>
        <div className="bg-green-300 w-10 h-10 rounded-sm flex justify-center items-center"> 3</div>
      </HStack>
    </View>
  );
};

export const Default: StoryFn<typeof HStack> = DefaultTemplate.bind({});
