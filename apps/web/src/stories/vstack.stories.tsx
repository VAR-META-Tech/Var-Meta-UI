import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { VStack, type VStackProps } from '@var-meta-tech/ui';

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
        <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-red-300"> 1</div>
        <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-blue-300"> 2</div>
        <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-green-300"> 3</div>
      </VStack>
    </View>
  );
};

export const Default: StoryFn<typeof VStack> = DefaultTemplate.bind({});
