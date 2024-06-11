import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Form, type TextareaFieldProps } from '@var-ui/core';

import { EnhancedView } from '@/components/View';

const variants: TextareaFieldProps['variant'][] = ['default', 'background', 'destructive'];

const meta: Meta = {
  title: 'Components/Textarea/TextAreaField',
  component: Form.Textarea,
  argTypes: {
    variant: {
      options: variants,
      control: { type: 'select' },
    },
    label: {
      control: { type: 'text' },
    },
    helperText: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    helperText: 'This is a hint text to help user.',
    label: 'Label',
  },
  parameters: {
    docs: {
      page: null,
    },
    controls: { expanded: true },
  },
};

export default meta;

const DefaultTemplate: StoryFn<TextareaFieldProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Form.Textarea {...args} placeholder="Placeholder" />
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Form.Textarea> = DefaultTemplate.bind({});
