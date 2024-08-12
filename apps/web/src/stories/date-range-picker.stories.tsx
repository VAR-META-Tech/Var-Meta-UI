import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Button, DateRangePicker, Modal } from '@var-meta/ui';

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
      <DateRangePicker onChange={(e) => console.log(e)} calendarProps={{ visibleMonths: 2 }} {...args} />
    </View>
  );
};

export const MultipleMonths: StoryFn<typeof DateRangePicker> = MultipleMonthsTemplate.bind({});

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
