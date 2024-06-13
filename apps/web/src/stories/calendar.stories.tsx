import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Calendar, type CalendarProps } from '@var-meta/ui';

import { EnhancedView } from '@/components/View';

const meta: Meta = {
  title: 'Components/Calendar/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;

const DefaultTemplate: StoryFn<CalendarProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Calendar {...args} />
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Calendar> = DefaultTemplate.bind({});

const WithPickerTemplate: StoryFn<CalendarProps> = (args) => {
  return (
    <EnhancedView prop="WithPicker">
      <Calendar withPicker {...args} />
    </EnhancedView>
  );
};

export const WithPicker: StoryFn<typeof Calendar> = WithPickerTemplate.bind({});

const MultipleMonthsTemplate: StoryFn<CalendarProps> = (args) => {
  return (
    <EnhancedView prop="MultipleMonths">
      <Calendar visibleMonths={2} {...args} />
    </EnhancedView>
  );
};

export const MultipleMonths: StoryFn<typeof Calendar> = MultipleMonthsTemplate.bind({});
