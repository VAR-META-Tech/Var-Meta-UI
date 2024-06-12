import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonGroup, type ButtonProps } from '@var-ui/core';
import { CircleIcon } from '@var-ui/icons';

import { EnhancedView } from '@/components/View';

const variants: ButtonProps['variant'][] = ['solid', 'ghost', 'link', 'outline'];
const color: ButtonProps['color'][] = [
  'default',
  'primary',
  'secondary',
  'tertiary',
  'gray',
  'error',
  'success',
  'warning',
];
const sizes: ButtonProps['size'][] = ['sm', 'md', 'lg', 'xl', '2xl'];
const radius: ButtonProps['radius'][] = ['sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'];

const meta: Meta = {
  title: 'Components/Button Group',
  component: ButtonGroup,
  argTypes: {
    variant: {
      options: variants,
      control: { type: 'select' },
    },
    color: {
      options: color,
      control: { type: 'select' },
    },
    size: {
      options: sizes,
      control: { type: 'select' },
    },
    radius: {
      options: radius,
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
