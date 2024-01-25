import type { Meta, StoryFn } from '@storybook/react';
import { CardPagination, type CardPaginationProps } from '@var-meta/ui';
import React from 'react';

const meta: Meta = {
  title: 'Components/Pagination/CardPagination',
  component: CardPagination,
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

const DefaultTemplate: StoryFn<CardPaginationProps> = ({ ...args }: any) => {
  return <CardPagination {...args} />;
};

export const Default: StoryFn<typeof CardPagination> = DefaultTemplate.bind({});
