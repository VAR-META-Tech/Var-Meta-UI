import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { DateInput, type DateInputProps } from '@var-meta/ui';

import { EnhancedView } from '@/components/View';

const meta: Meta = {
  title: 'Components/Calendar/DateInput',
  component: DateInput,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;

const DefaultTemplate: StoryFn<DateInputProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <DateInput {...args} />
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof DateInput> = DefaultTemplate.bind({});
