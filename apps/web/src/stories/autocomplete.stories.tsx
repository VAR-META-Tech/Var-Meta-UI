import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Autocomplete, type AutocompleteProps } from '@var-ui/core';

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
    allowsCustomValue: true,
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
        <div className="font-medium text-foreground text-md">Phoenix Baker</div>
        <div className="text-foreground-secondary text-md">@phoenix</div>
      </div>
    ),
  },
  {
    value: 'Henry',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=2" />
        <div className="font-medium text-foreground text-md">Henry</div>
        <div className="text-foreground-secondary text-md">@Henry</div>
      </div>
    ),
  },
  {
    value: 'Kevin Baker',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=3" />
        <div className="font-medium text-foreground text-md">Kevin Baker</div>
        <div className="text-foreground-secondary text-md">@kevin</div>
      </div>
    ),
  },
  {
    value: 'Josh William',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=4" />
        <div className="font-medium text-foreground text-md">Josh William</div>
        <div className="text-foreground-secondary text-md">@william</div>
      </div>
    ),
  },
  {
    value: 'Jenifer',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=5" />
        <div className="font-medium text-foreground text-md">Jenifer Change</div>
        <div className="text-foreground-secondary text-md">@jenifer</div>
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
