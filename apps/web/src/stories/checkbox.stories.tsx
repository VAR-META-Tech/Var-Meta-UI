import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Star01Icon } from '@var-meta/icons';
import { Checkbox, type CheckboxProps } from '@var-meta/ui';

import { EnhancedView, View } from '@/components/View';

const sizes: CheckboxProps['size'][] = ['sm', 'md', 'tag-sm', 'tag-md', 'tag-lg'];
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
      <Checkbox id="checkbox" {...args} />
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Checkbox> = DefaultTemplate.bind({});

const CheckBoxIconTemplate: StoryFn<CheckboxProps> = (args) => {
  return (
    <View prop="Default">
      <Checkbox id="checkbox-icon" icon={<Star01Icon />} {...args} />
    </View>
  );
};

export const CheckBoxIcon: StoryFn<typeof Checkbox> = CheckBoxIconTemplate.bind({});
