import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { TimeInput, type TimeInputProps } from '@var-meta/ui';

import { EnhancedView } from '@/components/View';

const meta: Meta = {
  title: 'Components/Calendar/TimeInput',
  component: TimeInput,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;

const DefaultTemplate: StoryFn<TimeInputProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <TimeInput {...args} />
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof TimeInput> = DefaultTemplate.bind({});
