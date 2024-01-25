import type { Meta, StoryFn } from '@storybook/react';
import { AlertCircleIcon } from '@var-meta/icons';
import { Button, FeaturedIcon, Modal, ModalAction, ModalHeader, type ModalProps } from '@var-meta/ui';
import { type ModalHeaderProps } from '@var-meta/ui';
import React from 'react';

import { EnhancedView } from '@/components/View';

const aligns: ModalHeaderProps['align'][] = ['left', 'center', 'baseline'];

const meta: Meta = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    defaultOpen: {
      options: [true, false],
      control: {
        type: 'select',
      },
    },
    open: {
      options: [true, false, undefined],
      control: {
        type: 'radio',
      },
    },
    align: {
      options: aligns,
      control: {
        type: 'radio',
      },
    },
    fullScreen: {
      options: [true, false, undefined],
      control: {
        type: 'radio',
      },
    },
    fitContent: {
      options: [true, false, undefined],
      control: {
        type: 'radio',
      },
    },
  },
  args: {},
};

export default meta;

const DefaultTemplate: StoryFn<ModalProps> = ({ align, ...args }: any) => {
  return (
    <EnhancedView prop="Default">
      <Modal trigger={<Button>Show Modal</Button>} {...args}>
        <ModalHeader
          align={align}
          icon={
            <FeaturedIcon variant="outline" color="brand" size="md">
              <AlertCircleIcon />
            </FeaturedIcon>
          }
          title="Blog post published"
          description="This blog post has been published. Team members will be able to edit this post and republish changes."
        />

        <ModalAction>
          <Button variant="secondary-gray" fullWidth>
            Discard
          </Button>
          <Button fullWidth>Save changes</Button>
        </ModalAction>
      </Modal>
    </EnhancedView>
  );
};

export const Default: StoryFn<ModalProps> = DefaultTemplate.bind({});
