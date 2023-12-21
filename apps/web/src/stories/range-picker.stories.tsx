import { DateRangePicker, type DateRangePickerProps } from '@hashgraph/ui';
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { EnhancedView } from '@/components/View';

const meta: Meta = {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;

const DefaultTemplate: StoryFn<DateRangePickerProps> = ({ ...args }) => {
  return (
    <EnhancedView prop="Default">
      <DateRangePicker {...args} />
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof DateRangePicker> = DefaultTemplate.bind({});
