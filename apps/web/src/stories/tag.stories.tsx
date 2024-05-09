import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Tag, type TagProps } from '@var-ui/core';

import { View } from '@/components/View';

const meta: Meta = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
};

export default meta;

const DefaultTemplate: StoryFn<TagProps> = ({ ...args }) => {
  return (
    <View prop="Default">
      <Tag {...args}>Labeled</Tag>
    </View>
  );
};

export const Default: StoryFn<typeof Tag> = DefaultTemplate.bind({});
