import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Text, type TextProps } from '@var-meta-tech/ui';

import { EnhancedView } from '@/components/View';

const meta: Meta = {
  title: 'Components/Typography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {},
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
