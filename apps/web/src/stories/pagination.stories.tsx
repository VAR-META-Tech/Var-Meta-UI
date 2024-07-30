import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Pagination } from '@var-meta/ui';

const shape = ['square', 'circle', 'button'];

const meta: Meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    shape: {
      options: shape,
      control: { type: 'radio' },
    },
  },
  args: {
    defaultValue: 1,
    total: 10,
    siblings: 1,
    boundaries: 1,
    withEdges: false,
    withControls: true,
    shape: 'square',
  },
};

export default meta;

const DefaultTemplate: StoryFn<typeof Pagination> = ({ ...args }: any) => {
  return <Pagination {...args}></Pagination>;
};

export const Default: StoryFn<typeof Pagination> = DefaultTemplate.bind({});
