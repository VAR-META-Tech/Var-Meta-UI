import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Button, DateRangePicker, Modal, ModalBody, ModalHeader, type DateRangePickerProps } from '@var-meta/ui';

import { View } from '@/components/View';

const meta: Meta = {
  title: 'Components/Calendar/DateRangePicker',
  component: DateRangePicker,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
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
      <DateRangePicker calendarProps={{ visibleMonths: 2 }} {...args} />
    </View>
  );
};

export const MultipleMonths: StoryFn<typeof DateRangePicker> = MultipleMonthsTemplate.bind({});

const WithModalTemplate: StoryFn<typeof DateRangePicker> = ({ ...args }) => {
  return (
    <View prop="WithModal">
      <Modal trigger={<Button>Show Modal</Button>}>
        <ModalHeader
          title="Blog post published"
          description="This blog post has been published. Team members will be able to edit this post and republish changes."
        />
        <ModalBody>
          <DateRangePicker {...args} />
        </ModalBody>
      </Modal>
    </View>
  );
};

export const WithModal: StoryFn<typeof DateRangePicker> = WithModalTemplate.bind({});
