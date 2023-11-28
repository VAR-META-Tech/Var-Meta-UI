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
        <img className="rounded-full" src="https://i.pravatar.cc/24?img=1" />
        <div className="text-md font-medium text-gray-900">Phoenix Baker</div>
        <div className="text-md text-gray-600">@phoenix</div>
      </div>
    ),
  },
  {
    value: '2',
    label: (
      <div className="flex gap-2">
        <img className="rounded-full" src="https://i.pravatar.cc/24?img=2" />
        <div className="text-md font-medium text-gray-900">Phoenix Baker</div>
        <div className="text-md text-gray-600">@phoenix</div>
      </div>
    ),
  },
  {
    value: '3',
    label: (
      <div className="flex gap-2">
        <img className="rounded-full" src="https://i.pravatar.cc/24?img=3" />
        <div className="text-md font-medium text-gray-900">Phoenix Baker</div>
        <div className="text-md text-gray-600">@phoenix</div>
      </div>
    ),
  },
];

const DefaultTemplate: StoryFn<SelectFieldProps> = (args) => {
  return (
    <EnhancedView prop="Default" value={''}>
      <SelectField
        {...args}
        label="Team member"
        placeholder="Select team member"
        helperText="This is a hint text to help user."
        options={options}
      />
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof SelectField> = DefaultTemplate.bind({});
