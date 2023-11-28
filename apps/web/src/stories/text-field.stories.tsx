import { TextField, type TextFieldProps } from '@hashgraph/ui';
import type { Meta, StoryFn } from '@storybook/react';
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
    size: {
      options: sizes,
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    docs: {
      page: null,
    },
    controls: { expanded: true },
  },
};

export default meta;

const DefaultTemplate: StoryFn<TextFieldProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <TextField {...args} label="Label" helperText="This is a hint text to help user." placeholder="Placeholder" />
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof TextField> = DefaultTemplate.bind({});
