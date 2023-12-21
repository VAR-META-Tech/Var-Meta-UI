import { DatePicker, type DatePickerProps } from '@hashgraph/ui';
import type { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';

import { EnhancedView } from '@/components/View';

const meta: Meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

const DefaultTemplate: StoryFn<DatePickerProps> = ({ ...args }) => {
  const [select, setSelect] = useState<any>();
  return (
    <EnhancedView prop="Default">
      <DatePicker {...args} value={select} onChange={setSelect} placeholder="Placeholder" />
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof DatePicker> = DefaultTemplate.bind({});
