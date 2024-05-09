import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import {
  Button,
  CalendarIcon,
  DateRangePicker,
  Modal,
  Popper,
  useDisclosure,
  type Calendar,
  type DatePickerProps,
  type DateRange,
  type DateRangePickerProps,
} from '@var-ui/core';
import dayjs from 'dayjs';

import { View } from '@/components/View';

const meta: Meta = {
  title: 'Components/DatePicker/DateRangePicker',
  component: DateRangePicker,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    withPreset: true,
  },
};

export default meta;

const DefaultTemplate: StoryFn<DateRangePickerProps> = ({ ...args }) => {
  return (
    <View prop="Default">
      <DateRangePicker {...args} />
    </View>
  );
};

export const Default: StoryFn<typeof DateRangePicker> = DefaultTemplate.bind({});

const WithPopperTemplate: StoryFn<DatePickerProps> = ({ ...args }) => {
  const [value, setValue] = useState<DateRange>({
    from: new Date(new Date().setHours(0, 0, 0, 0)),
    to: undefined,
  });
  const [isOpen, { close, setOpened }] = useDisclosure(false);

  const handleChange = (date?: DateRange) => {
    setValue(date);
    close();
  };
  return (
    <View prop="Default">
      <Popper
        onOpenChange={setOpened}
        open={isOpen}
        trigger={
          <Button variant="link">
            <CalendarIcon />
            {value?.to
              ? `${dayjs(value.from).format('MMM DD, YYYY')} - ${dayjs(value.to).format('MMM DD, YYYY')}`
              : 'Select date'}
          </Button>
        }
      >
        <DateRangePicker
          {...args}
          withPreset
          onCancel={close}
          from={value.from}
          to={value.to}
          onChange={handleChange}
        />
      </Popper>
    </View>
  );
};

export const WithPopper: StoryFn<typeof Calendar> = WithPopperTemplate.bind({});

const WithModalTemplate: StoryFn<DatePickerProps> = ({ ...args }) => {
  const [value, setValue] = useState<DateRange>({
    from: new Date(new Date().setHours(0, 0, 0, 0)),
    to: undefined,
  });
  const [isOpen, { close, setOpened }] = useDisclosure(false);

  const handleChange = (date?: DateRange) => {
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
          <Button variant="link">
            <CalendarIcon />
            {value?.to
              ? `${dayjs(value.from).format('MMM DD, YYYY')} - ${dayjs(value.to).format('MMM DD, YYYY')}`
              : 'Select date'}
          </Button>
        }
      >
        <DateRangePicker
          {...args}
          withPreset
          onCancel={close}
          from={value.from}
          to={value.to}
          onChange={handleChange}
        />
      </Modal>
    </View>
  );
};

export const WithModal: StoryFn<typeof Calendar> = WithModalTemplate.bind({});
