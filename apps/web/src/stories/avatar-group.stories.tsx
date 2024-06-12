import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Avatar, AvatarGroup, type AvatarGroupProps } from '@var-meta-tech/ui';

import { EnhancedView } from '@/components/View';

const meta: Meta = {
  title: 'Components/Avatar/Avatar-Group',
  component: AvatarGroup,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    indicator: 'none',
    size: 'xl',
  },
};

export default meta;

const DefaultTemplate: StoryFn<AvatarGroupProps> = ({ ...args }) => {
  return (
    <EnhancedView prop="Group">
      <AvatarGroup {...args}>
        {Array.from({ length: 16 }, (_, i) => (
          <Avatar {...args} key={i} src={`https://i.pravatar.cc/1080?img=${i + 1}`}>
            {i}
          </Avatar>
        ))}
      </AvatarGroup>
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof AvatarGroup> = DefaultTemplate.bind({});
