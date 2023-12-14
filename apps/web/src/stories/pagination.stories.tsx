import { Pagination, type PaginationProps } from '@hashgraph/ui';
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    defaultValue: 1,
    total: 10,
    siblings: 1,
    boundaries: 1,
    withControls: true,
  },
};

export default meta;

const DefaultTemplate: StoryFn<PaginationProps> = ({ ...args }: any) => {
  return <Pagination {...args} />;
};

export const Default: StoryFn<typeof Pagination> = DefaultTemplate.bind({});
