import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Select, type SelectProps } from '@var-meta/ui';

import { EnhancedView } from '@/components/View';

const variants: SelectProps['variant'][] = ['default', 'destructive'];
const sizes: SelectProps['size'][] = ['xs', 'sm', 'md'];

const meta: Meta = {
  title: 'Components/Select',
  component: Select,
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
    withScrollAction: {
      control: { type: 'boolean' },
    },
    defaultOpen: {
      description: 'The initial open state of the menu.',
      control: { type: 'boolean' },
    },
    open: {
      description: 'The open state of the menu.',
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    withScrollAction: true,
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
        <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/500?img=1" />
        <div className="text-foreground text-md font-medium">Phoenix Baker</div>
        <div className="text-foreground-secondary text-md">@phoenix</div>
      </div>
    ),
  },
  {
    value: '2',
    label: (
      <div className="flex gap-2">
        <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/500?img=2" />
        <div className="text-foreground text-md font-medium">Phoenix Baker</div>
        <div className="text-foreground-secondary text-md">@phoenix</div>
      </div>
    ),
  },
  {
    value: '3',
    label: (
      <div className="flex gap-2">
        <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/500?img=3" />
        <div className="text-foreground text-md font-medium">Phoenix Baker</div>
        <div className="text-foreground-secondary text-md">@phoenix</div>
      </div>
    ),
  },
];

const DefaultTemplate: StoryFn<SelectProps> = (args) => {
  return (
    <EnhancedView prop="Default" value={''}>
      <Select {...args} placeholder="Select team member" options={options} />
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Select> = DefaultTemplate.bind({});
