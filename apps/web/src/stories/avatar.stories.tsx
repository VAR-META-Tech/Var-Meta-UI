import type { Meta, StoryFn } from '@storybook/react';
import { Star06Icon } from '@var-meta/icons';
import { Avatar, type AvatarProps } from '@var-meta/ui';
import React from 'react';

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
