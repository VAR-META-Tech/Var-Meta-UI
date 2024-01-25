import type { Meta, StoryFn } from '@storybook/react';
import {
  Button,
  type Calendar,
  CalendarIcon,
  DatePicker,
  type DatePickerProps,
  Modal,
  Popper,
  useDisclosure,
} from '@var-meta/ui';
import dayjs from 'dayjs';
import React, { useState } from 'react';

import { View } from '@/components/View';

const mode = ['single', 'multiple', 'range'];

const meta: Meta = {
  title: 'Components/DatePicker/DatePicker',
  component: DatePicker,
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

const DefaultTemplate: StoryFn<DatePickerProps> = ({ ...args }) => {
  const [value, setValue] = useState<Date>();
  return (
    <View prop="Default">
      <DatePicker {...args} onCancel={close} value={value} onChange={(date) => setValue(date)} />
    </View>
  );
};

export const Default: StoryFn<typeof Calendar> = DefaultTemplate.bind({});

const WithPopperTemplate: StoryFn<DatePickerProps> = ({ ...args }) => {
  const [value, setValue] = useState<Date>();
  const [isOpen, { close, setOpened }] = useDisclosure(false);

  const handleChange = (date?: Date) => {
    setValue(date);
    close();
  };
  return (
    <View prop="Default">
      <Popper
        onOpenChange={setOpened}
        open={isOpen}
        trigger={
          <Button variant="secondary-gray">
            <CalendarIcon />
            {value ? dayjs(value).format('MMM DD, YYYY') : 'Select date'}
          </Button>
        }
      >
        <DatePicker {...args} onCancel={close} value={value} onChange={handleChange} />
      </Popper>
    </View>
  );
};

export const WithPopper: StoryFn<typeof Calendar> = WithPopperTemplate.bind({});

const WithModalTemplate: StoryFn<DatePickerProps> = ({ ...args }) => {
  const [value, setValue] = useState<Date>();
  const [isOpen, { close, setOpened }] = useDisclosure(false);

  const handleChange = (date?: Date) => {
    setValue(date);
    close();
  };
  return (
    <View prop="Default">
      <Modal
        className="max-w-fit"
        onOpenChange={setOpened}
        open={isOpen}
        fitContent
        trigger={
          <Button variant="secondary-gray">
            <CalendarIcon />
            {value ? dayjs(value).format('MMM DD, YYYY') : 'Select date'}
          </Button>
        }
      >
        <DatePicker {...args} onCancel={close} value={value} onChange={handleChange} />
      </Modal>
    </View>
  );
};

export const WithModal: StoryFn<typeof Calendar> = WithModalTemplate.bind({});
