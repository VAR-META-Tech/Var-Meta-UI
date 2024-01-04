import type { Meta, StoryFn } from '@storybook/react';
import { MinimalPagination, type MinimalPaginationProps } from '@swiss-digital-assets-institute/ui';
import React from 'react';

const meta: Meta = {
  title: 'Components/MinimalPagination',
  component: MinimalPagination,
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

const DefaultTemplate: StoryFn<MinimalPaginationProps> = ({ ...args }: any) => {
  return <MinimalPagination {...args} />;
};

export const Default: StoryFn<typeof MinimalPagination> = DefaultTemplate.bind({});
