import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Badge, type BadgeProps } from '@var-meta/ui';

import { EnhancedView } from '@/components/View';

const sizes: BadgeProps['size'][] = ['sm', 'md', 'lg'];
const variants: BadgeProps['variant'][] = ['gray', 'brand', 'error', 'warning', 'success'];

const meta: Meta = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      options: variants,
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

const DefaultTemplate: StoryFn<BadgeProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Badge {...args}>Check-in successfully at: 08:25 22/05/2024!</Badge>
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Badge> = DefaultTemplate.bind({});
