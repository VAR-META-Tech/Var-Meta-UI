import { SelectField, type SelectFieldProps } from '@hashgraph/ui';
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { EnhancedView } from '@/components/View';

const variants: SelectFieldProps['variant'][] = ['default', 'destructive'];
const sizes: SelectFieldProps['size'][] = ['sm', 'md'];

const meta: Meta = {
  title: 'Components/Select',
  component: SelectField,
  argTypes: {
    variant: {
      options: variants,
      control: { type: 'select' },
    },
    size: {
      options: sizes,
      control: { type: 'select' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
    helperText: {
      control: { type: 'text' },
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

const options = [
  {
    value: '1',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=1" />
        <div className="font-medium text-gray-900 text-md">Phoenix Baker</div>
        <div className="text-gray-600 text-md">@phoenix</div>
      </div>
    ),
  },
  {
    value: '2',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=2" />
        <div className="font-medium text-gray-900 text-md">Phoenix Baker</div>
        <div className="text-gray-600 text-md">@phoenix</div>
      </div>
    ),
  },
  {
    value: '3',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=3" />
        <div className="font-medium text-gray-900 text-md">Phoenix Baker</div>
        <div className="text-gray-600 text-md">@phoenix</div>
      </div>
    ),
  },
];

const DefaultTemplate: StoryFn<SelectFieldProps> = (args) => {
  return (
    <EnhancedView prop="Default" value={''}>
      <SelectField {...args} placeholder="Select team member" options={options} />
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof SelectField> = DefaultTemplate.bind({});
