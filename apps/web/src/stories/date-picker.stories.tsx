import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Button, DatePicker, LocaleProvider, Modal, type DateValue } from '@var-meta/ui';

import { View } from '@/components/View';

const meta: Meta = {
  title: 'Components/Calendar/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <LocaleProvider locale="en-US">
        <Story />
      </LocaleProvider>
    ),
  ],
};

export default meta;

const DefaultTemplate: StoryFn<typeof DatePicker> = ({ ...args }) => {
  return (
    <View prop="Default">
      <DatePicker {...args} />
    </View>
  );
};

export const Default: StoryFn<typeof DatePicker> = DefaultTemplate.bind({});

const WithTimeFieldTemplate: StoryFn<typeof DatePicker> = ({ ...args }) => {
  return (
    <View prop="WithTimeField">
      <DatePicker granularity="minute" withTimeInput {...args} />
    </View>
  );
};

export const WithTimeField: StoryFn<typeof DatePicker> = WithTimeFieldTemplate.bind({});

const WithControlledTemplate: StoryFn<typeof DatePicker> = ({ ...args }) => {
  const [value, setValue] = useState<DateValue>();
  return (
    <View prop="WithControlled">
      <DatePicker value={value} onChange={setValue} {...args} />
    </View>
  );
};

export const WithControlled: StoryFn<typeof DatePicker> = WithControlledTemplate.bind({});

const WithModalTemplate: StoryFn<typeof DatePicker> = ({ ...args }) => {
  return (
    <View prop="WithModal">
      <Modal trigger={<Button>Show Modal</Button>}>
        <Modal.Header
          title="Blog post published"
          description="This blog post has been published. Team members will be able to edit this post and republish changes."
        />
        <Modal.Body>
          <DatePicker {...args} />
        </Modal.Body>
      </Modal>
    </View>
  );
};

export const WithModal: StoryFn<typeof DatePicker> = WithModalTemplate.bind({});
