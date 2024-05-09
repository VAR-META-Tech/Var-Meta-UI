import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Avatar, type AvatarProps } from '@var-ui/core';
import { Star06Icon } from '@var-ui/icons';

import { EnhancedView } from '@/components/View';

const meta: Meta = {
  title: 'Components/Avatar/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: { type: 'text' },
    },
  },
  args: {
    src: 'https://i.pravatar.cc/1080?img=5',
    indicator: 'none',
    size: 'xl',
  },
};

export default meta;

const DefaultTemplate: StoryFn<AvatarProps> = ({ ...args }) => {
  return (
    <EnhancedView prop="Default">
      <Avatar {...args}>
        <Star06Icon />
      </Avatar>
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Avatar> = DefaultTemplate.bind({});
