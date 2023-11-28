import { Input, type InputProps } from '@hashgraph/ui';
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { EnhancedView } from '@/components/View';

const variants: InputProps['variant'][] = ['default', 'destructive'];
const sizes: InputProps['size'][] = ['sm', 'md'];

const meta: Meta = {
  title: 'Components/Input',
  component: Input,
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

const DefaultTemplate: StoryFn<InputProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Input {...args} placeholder="Placeholder" />
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Input> = DefaultTemplate.bind({});
