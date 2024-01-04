import type { Meta, StoryFn } from '@storybook/react';
import { Toggle, type ToggleProps } from '@swiss-digital-assets-institute/ui';
import React from 'react';

import { EnhancedView } from '@/components/View';

const meta: Meta = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    size: 'md',
    disabled: false,
    checked: undefined,
  },
};

export default meta;

const DefaultTemplate: StoryFn<ToggleProps> = ({ ...args }) => {
  return (
    <EnhancedView prop="Default">
      <Toggle {...args} />
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Toggle> = DefaultTemplate.bind({});
