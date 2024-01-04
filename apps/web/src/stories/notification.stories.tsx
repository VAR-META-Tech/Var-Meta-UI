import type { Meta, StoryFn } from '@storybook/react';
import { Notification, type NotificationProps } from '@swiss-digital-assets-institute/ui';
import React from 'react';

import { EnhancedView, View } from '@/components/View';

const icons: NotificationProps['icon'][] = ['success', 'error', 'warning'];

const meta: Meta = {
  title: 'Components/Notification',
  component: Notification,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
    icon: {
      options: icons,
      control: {
        type: 'select',
      },
    },
    withAction: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    src: 'https://images.pexels.com/photos/17485678/pexels-photo-17485678/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-could-be-used-in-the-field-of-sustainability-from-biodiversity-to-climate-it-was-created-by-nidia-dias.png',
    title: 'We’ve just released a new update!',
    description: 'Check out the all new dashboard view. Pages and exports now load faster.',
    icon: 'success',
    withAction: true,
  },
};

export default meta;

const DefaultTemplate: StoryFn<NotificationProps> = ({ withAction, ...args }: any) => {
  return (
    <EnhancedView prop="Default">
      <Notification actionProps={withAction ? {} : undefined} {...args} />
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Notification> = DefaultTemplate.bind({});

const ImageVariant: StoryFn<NotificationProps> = ({ ...args }) => {
  return (
    <View prop="ImageVariant">
      <Notification {...args} variant="image" />
    </View>
  );
};

export const Image: StoryFn<typeof Notification> = ImageVariant.bind({});

const AvatarVariant: StoryFn<NotificationProps> = ({ ...args }) => {
  return (
    <View prop="AvatarVariant">
      <Notification {...args} variant="avatar" />
    </View>
  );
};

export const Avatar: StoryFn<typeof Notification> = AvatarVariant.bind({});
