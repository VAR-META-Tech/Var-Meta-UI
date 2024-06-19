import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Form, type CheckboxFieldProps } from '@var-meta/ui';

import { EnhancedView } from '@/components/View';

const sizes: CheckboxFieldProps['size'][] = ['sm', 'md'];
const checkboxOptions: CheckboxFieldProps['checked'][] = ['indeterminate', true, false, undefined];
const meta: Meta = {
  title: 'Components/Checkbox/CheckboxField',
  component: Form.Checkbox,
  argTypes: {
    size: {
      options: sizes,
      control: { type: 'select' },
    },
    checked: {
      options: checkboxOptions,
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    label: 'Please accept the conditions',
  },
  parameters: {
    docs: {
      page: null,
    },
    controls: { expanded: true },
  },
};

export default meta;

const DefaultTemplate: StoryFn<CheckboxFieldProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Form.Checkbox id="checkbox" {...args} />
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Form.Checkbox> = DefaultTemplate.bind({});
