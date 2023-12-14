import { Alert, AlertAction, type AlertProps, Button } from '@hashgraph/ui';
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { View } from '@/components/View';

const icons: AlertProps['icon'][] = ['success', 'error', 'warning', 'gray'];

const meta: Meta = {
  title: 'Components/Alert',
  component: Alert,
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
    title: 'There was a problem with that action',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    icon: 'success',
    withAction: true,
    variant: 'floating',
  },
};

export default meta;

const DefaultTemplate: StoryFn<AlertProps> = ({ withAction, ...args }: any) => {
  return (
    <View prop="Default">
      <Alert actionProps={withAction ? {} : undefined} {...args}>
        {withAction ? (
          <AlertAction>
            <Button size="none" variant="link-gray">
              Dismiss
            </Button>
            <Button size="none" variant="link">
              View changes
            </Button>
          </AlertAction>
        ) : null}
      </Alert>
    </View>
  );
};

export const Default: StoryFn<typeof Alert> = DefaultTemplate.bind({});
