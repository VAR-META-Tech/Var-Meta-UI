import type { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonGroup, type ButtonProps } from '@var-ui/core';
import { CircleIcon } from '@var-ui/icons';
import React from 'react';

import { EnhancedView } from '@/components/View';

const variants: ButtonProps['variant'][] = [
  'primary',
  'secondary',
  'secondary-gray',
  'tertiary',
  'tertiary-gray',

  'destructive',
  'destructive-secondary',
  'destructive-tertiary',
  'destructive-link',

  'warning',
  'warning-secondary',
  'warning-tertiary',
  'warning-link',

  'success',
  'success-secondary',
  'success-tertiary',
  'success-link',
];
const sizes: ButtonProps['size'][] = ['sm', 'md', 'lg', 'xl', '2xl'];
const radiuses: ButtonProps['radius'][] = ['sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'];

const meta: Meta = {
  title: 'Components/Button Group',
  component: ButtonGroup,
  argTypes: {
    variant: {
      options: variants,
      control: { type: 'select' },
    },
    size: {
      options: sizes,
      control: { type: 'select' },
    },
    radius: {
      options: radiuses,
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    dotLeading: {
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

const DefaultTemplate: StoryFn<ButtonProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <ButtonGroup>
        <Button {...args}>{args.iconOnly ? <CircleIcon /> : 'Button CTA'}</Button>
        <Button {...args}>{args.iconOnly ? <CircleIcon /> : 'Button CTA'}</Button>
        <Button {...args}>{args.iconOnly ? <CircleIcon /> : 'Button CTA'}</Button>
      </ButtonGroup>
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Button> = DefaultTemplate.bind({});
