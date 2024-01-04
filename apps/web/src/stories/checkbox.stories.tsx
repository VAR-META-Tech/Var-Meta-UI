import type { Meta, StoryFn } from '@storybook/react';
import { Checkbox, type CheckboxProps } from '@swiss-digital-assets-institute/ui';
import React from 'react';

import { EnhancedView } from '@/components/View';

const sizes: CheckboxProps['size'][] = ['sm', 'md'];
const checkboxOptions: CheckboxProps['checked'][] = ['indeterminate', true, false, undefined];
const meta: Meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
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
  parameters: {
    docs: {
      page: null,
    },
    controls: { expanded: true },
  },
};

export default meta;

const DefaultTemplate: StoryFn<CheckboxProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <label htmlFor="checkbox" className="flex items-center space-x-2">
        <Checkbox id="checkbox" {...args} />
        <span className="text-sm">Please accept the conditions</span>
      </label>
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Checkbox> = DefaultTemplate.bind({});
