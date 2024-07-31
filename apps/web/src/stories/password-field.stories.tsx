import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { HelpCircleIcon, Mail01Icon } from '@var-meta/icons';
import { Form, type PasswordFieldProps } from '@var-meta/ui';

import { EnhancedView } from '@/components/View';

const variants: PasswordFieldProps['variant'][] = ['default', 'destructive'];
const sizes: PasswordFieldProps['size'][] = ['xs', 'sm', 'md'];

const meta: Meta = {
  title: 'Components/Input/PasswordField',
  component: Form.Password,
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
    size: {
      options: sizes,
      control: { type: 'select' },
    },
    prefix: {
      control: { type: 'boolean' },
    },
    suffix: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      true: 'w-full',
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

const DefaultTemplate: StoryFn<typeof Form.Input> = ({ suffix, prefix, ...args }) => {
  return (
    <EnhancedView prop="Default">
      <Form.Password {...args} prefix={prefix ? <Mail01Icon /> : undefined} placeholder="Placeholder" />
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Form.Input> = DefaultTemplate.bind({});
