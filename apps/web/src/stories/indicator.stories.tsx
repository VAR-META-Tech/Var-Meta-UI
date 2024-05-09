import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Indicator, type IndicatorProps } from '@var-ui/core';
import { Star06Icon } from '@var-ui/icons';

import { EnhancedView } from '@/components/View';

const type: IndicatorProps['type'][] = ['icon', 'offline', 'online', 'verified'];
const sizes: IndicatorProps['size'][] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'];

const meta: Meta = {
  title: 'Components/Indicator',
  component: Indicator,
  argTypes: {
    type: {
      options: type,
      control: { type: 'select' },
    },
    size: {
      options: sizes,
      control: { type: 'select' },
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

const DefaultTemplate: StoryFn<IndicatorProps> = ({ ...args }) => {
  return (
    <EnhancedView prop="Default">
      <Indicator {...args}>
        <Star06Icon />
      </Indicator>
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Indicator> = DefaultTemplate.bind({});
