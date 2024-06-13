import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Button, DatePicker, Modal, ModalBody, ModalHeader } from '@var-meta/ui';

import { View } from '@/components/View';

const meta: Meta = {
  title: 'Components/Calendar/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
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

const WithModalTemplate: StoryFn<typeof DatePicker> = ({ ...args }) => {
  return (
    <View prop="WithModal">
      <Modal trigger={<Button>Show Modal</Button>}>
        <ModalHeader
          title="Blog post published"
          description="This blog post has been published. Team members will be able to edit this post and republish changes."
        />
        <ModalBody>
          <DatePicker {...args} />
        </ModalBody>
      </Modal>
    </View>
  );
};

export const WithModal: StoryFn<typeof DatePicker> = WithModalTemplate.bind({});
