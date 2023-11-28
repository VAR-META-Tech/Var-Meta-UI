import { Autocomplete, type AutocompleteProps } from '@hashgraph/ui';
import type { Meta, StoryFn } from '@storybook/react';
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

const DefaultTemplate: StoryFn<AutocompleteProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Autocomplete {...args} placeholder="Placeholder" />
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Autocomplete> = DefaultTemplate.bind({});
