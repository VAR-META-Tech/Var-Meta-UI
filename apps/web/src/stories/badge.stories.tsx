import type { Meta, StoryFn } from '@storybook/react';
import { Badge, type BadgeProps } from '@var-ui/core';
import { ArrowRightIcon, ArrowUpIcon, PlusIcon } from '@var-ui/icons';
import React from 'react';

import { EnhancedView } from '@/components/View';

const variants: BadgeProps['variant'][] = ['badge-color', 'badge-modern', 'pill-color', 'pill-outline'];
const sizes: BadgeProps['size'][] = ['sm', 'md', 'lg'];
const colors: BadgeProps['color'][] = [
  'gray',
  'brand',
  'error',
  'warning',
  'success',
  'blue',
  'indigo',
  'purple',
  'pink',
  'orange',
];

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
    color: {
      options: colors,
      control: { type: 'select' },
    },
    trailing: {
      control: { type: 'boolean' },
    },
    leading: {
      control: { type: 'boolean' },
    },
    iconOnly: {
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

const DefaultTemplate: StoryFn<BadgeProps> = ({ leading, iconOnly, trailing, ...args }) => {
  return (
    <EnhancedView prop="Default">
      {iconOnly ? (
        <Badge iconOnly {...args}>
          <PlusIcon />
        </Badge>
      ) : (
        <Badge
          leading={leading ? <ArrowUpIcon /> : undefined}
          trailing={trailing ? <ArrowRightIcon /> : undefined}
          {...args}
        >
          Label
        </Badge>
      )}
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Badge> = DefaultTemplate.bind({});
