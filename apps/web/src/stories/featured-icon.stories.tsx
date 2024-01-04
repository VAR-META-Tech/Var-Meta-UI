import type { Meta, StoryFn } from '@storybook/react';
import { AlertCircleIcon } from '@swiss-digital-assets-institute/icons';
import { FeaturedIcon, type FeaturedIconProps } from '@swiss-digital-assets-institute/ui';
import React from 'react';

import { EnhancedView } from '@/components/View';

const variants: FeaturedIconProps['variant'][] = [
  'light',
  'light-outline',
  'dark-outline',
  'mid-square',
  'light-square',
  'dark-square',
  'glass',
  'modern',
  'outline',
];
const sizes: FeaturedIconProps['size'][] = ['sm', 'md', 'lg', 'xl'];
const colors: FeaturedIconProps['color'][] = ['brand', 'gray', 'error', 'warning', 'success'];

const meta: Meta = {
  title: 'Components/FeaturedIcon',
  component: FeaturedIcon,
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
  },
  args: {},
  parameters: {
    docs: {
      page: null,
    },
    controls: { expanded: true },
  },
};

export default meta;

const DefaultTemplate: StoryFn<FeaturedIconProps> = ({ ...args }) => {
  return (
    <EnhancedView prop="Default">
      <FeaturedIcon {...args}>
        <AlertCircleIcon />
      </FeaturedIcon>
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof FeaturedIcon> = DefaultTemplate.bind({});
