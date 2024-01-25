import type { Meta, StoryFn } from '@storybook/react';
import { Autocomplete, type AutocompleteProps } from '@var-meta/ui';
import React from 'react';

import { EnhancedView } from '@/components/View';

const variants: AutocompleteProps['variant'][] = ['default', 'destructive'];
const sizes: AutocompleteProps['size'][] = ['sm', 'md'];

const meta: Meta = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
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
    showIcon: {
      control: { type: 'boolean' },
    },
    multiple: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    open: {
      options: [true, false, undefined],
      control: {
        type: 'select',
      },
    },
  },
  args: {
    helperText: 'This is a hint text to help user.',
    label: 'Label',
    showIcon: true,
  },
  parameters: {
    docs: {
      page: null,
    },
    controls: { expanded: true },
  },
};

export default meta;

const options: AutocompleteProps['options'] = [
  {
    value: 'Phoenix Baker',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=1" />
        <div className="font-medium text-gray-900 text-md">Phoenix Baker</div>
        <div className="text-gray-600 text-md">@phoenix</div>
      </div>
    ),
  },
  {
    value: 'Jerome',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=2" />
        <div className="font-medium text-gray-900 text-md">Jerome</div>
        <div className="text-gray-600 text-md">@Jerome</div>
      </div>
    ),
  },
  {
    value: 'Kevin Baker',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=3" />
        <div className="font-medium text-gray-900 text-md">Kevin Baker</div>
        <div className="text-gray-600 text-md">@kevin</div>
      </div>
    ),
  },
  {
    value: 'Kent',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=4" />
        <div className="font-medium text-gray-900 text-md">Kent</div>
        <div className="text-gray-600 text-md">kent</div>
      </div>
    ),
  },

  {
    value: 'Gaba',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=5" />
        <div className="font-medium text-gray-900 text-md">Gaba Gaba</div>
        <div className="text-gray-600 text-md">@gaba</div>
      </div>
    ),
  },
];

const DefaultTemplate: StoryFn<AutocompleteProps & { showIcon: boolean }> = ({ showIcon, ...args }) => {
  return (
    <EnhancedView prop="Default">
      <Autocomplete {...args} prefix={showIcon ? undefined : <></>} placeholder="Placeholder" options={options} />
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Autocomplete> = DefaultTemplate.bind({});
