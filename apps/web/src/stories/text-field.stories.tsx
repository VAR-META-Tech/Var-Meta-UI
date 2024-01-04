import type { Meta, StoryFn } from '@storybook/react';
import { HelpCircleIcon, Mail01Icon } from '@swiss-digital-assets-institute/icons';
import { TextField, type TextFieldProps } from '@swiss-digital-assets-institute/ui';
import React from 'react';

import { EnhancedView } from '@/components/View';

const variants: TextFieldProps['variant'][] = ['default', 'destructive'];
const sizes: TextFieldProps['size'][] = ['sm', 'md'];

const meta: Meta = {
  title: 'Components/TextField',
  component: TextField,
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

const DefaultTemplate: StoryFn<TextFieldProps> = ({ suffix, prefix, ...args }) => {
  return (
    <EnhancedView prop="Default">
      <TextField
        {...args}
        prefix={prefix ? <Mail01Icon /> : undefined}
        suffix={suffix ? <HelpCircleIcon /> : undefined}
        placeholder="Placeholder"
      />
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof TextField> = DefaultTemplate.bind({});
