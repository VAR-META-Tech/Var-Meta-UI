import type { Meta, StoryFn } from '@storybook/react';
import { RadioGroup, RadioGroupItem, type RadioGroupItemProps } from '@swiss-digital-assets-institute/ui';
import React from 'react';

import { EnhancedView } from '@/components/View';

const sizes: RadioGroupItemProps['size'][] = ['sm', 'md'];

const meta: Meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  argTypes: {
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

const DefaultTemplate: StoryFn<RadioGroupItemProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <RadioGroup className="text-sm" defaultValue="comfortable">
        <div className="flex items-center">
          <RadioGroupItem {...args} value="default" id="r1" />
          <label className="ml-2" htmlFor="r1">
            Default
          </label>
        </div>
        <div className="flex items-center">
          <RadioGroupItem {...args} value="comfortable" id="r2" />
          <label className="ml-2" htmlFor="r2">
            Comfortable
          </label>
        </div>
        <div className="flex items-center">
          <RadioGroupItem {...args} value="compact" id="r3" />
          <label className="ml-2" htmlFor="r3">
            Compact
          </label>
        </div>
      </RadioGroup>
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof RadioGroup> = DefaultTemplate.bind({});
