import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Button, DateRangePicker, Modal, type DateRange } from '@var-meta/ui';

import { View } from '@/components/View';

const meta: Meta = {
  title: 'Components/Calendar/DateRangePicker',
  component: DateRangePicker,
  argTypes: {},
  args: {
    visibleMonths: 1,
    weekdayStyle: 'short',
    withPicker: false,
    withTimeInput: false,
  },
};

export default meta;

const DefaultTemplate: StoryFn<typeof DateRangePicker> = ({ ...args }) => {
  return (
    <View prop="Default">
      <DateRangePicker {...args} />
    </View>
  );
};

export const Default: StoryFn<typeof DateRangePicker> = DefaultTemplate.bind({});

const MultipleMonthsTemplate: StoryFn<typeof DateRangePicker> = ({ ...args }) => {
  return (
    <View prop="MultipleMonths">
      <DateRangePicker {...args} visibleMonths={2} />
    </View>
  );
};

export const MultipleMonths: StoryFn<typeof DateRangePicker> = MultipleMonthsTemplate.bind({});

const WithTimeFieldTemplate: StoryFn<typeof DateRangePicker> = ({ ...args }) => {
  return (
    <View prop="WithTimeField">
      <DateRangePicker {...args} granularity="minute" withTimeInput />
    </View>
  );
};

export const WithTimeField: StoryFn<typeof DateRangePicker> = WithTimeFieldTemplate.bind({});

const WithControlledTemplate: StoryFn<typeof DateRangePicker> = ({ ...args }) => {
  const [value, setValue] = useState<DateRange>();
  return (
    <View prop="WithControlled">
      <DateRangePicker value={value} onChange={setValue} {...args} />
    </View>
  );
};

export const WithControlled: StoryFn<typeof DateRangePicker> = WithControlledTemplate.bind({});

const WithModalTemplate: StoryFn<typeof DateRangePicker> = ({ ...args }) => {
  return (
    <View prop="WithModal">
      <Modal trigger={<Button>Show Modal</Button>}>
        <Modal.Header
          title="Blog post published"
          description="This blog post has been published. Team members will be able to edit this post and republish changes."
        />
        <Modal.Body>
          <DateRangePicker {...args} />
        </Modal.Body>
      </Modal>
    </View>
  );
};

export const WithModal: StoryFn<typeof DateRangePicker> = WithModalTemplate.bind({});
