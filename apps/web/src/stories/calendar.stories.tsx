import { Calendar, type CalendarProps } from '@hashgraph/ui';
import type { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';

import { EnhancedView } from '@/components/View';

const mode = ['single', 'multiple', 'range'];

const meta: Meta = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      options: mode,
      control: { type: 'select' },
    },
  },
  args: {},
};

export default meta;

const DefaultTemplate: StoryFn<CalendarProps> = ({ ...args }) => {
  const [selected, setSelect] = useState<any>([]);

  return (
    <EnhancedView prop="Default">
      <Calendar selected={selected} onSelect={setSelect} {...args} />
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Calendar> = DefaultTemplate.bind({});
