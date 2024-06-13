import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Progress, type ProgressProps } from '@var-meta/ui';

import { EnhancedView } from '@/components/View';

const meta: Meta = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    value: 50,
  },
};

export default meta;

const DefaultTemplate: StoryFn<ProgressProps> = ({ ...args }) => {
  return (
    <EnhancedView prop="Default">
      <Progress {...args} />
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Progress> = DefaultTemplate.bind({});
