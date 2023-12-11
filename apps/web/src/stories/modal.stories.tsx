import { CheckCircleIcon } from '@hashgraph/icons';
import { Button, FeaturedIcon, Modal, ModalAction, ModalHeader, type ModalProps } from '@hashgraph/ui';
import { type ModalHeaderProps } from '@hashgraph/ui';
import type { Meta, StoryFn } from '@storybook/react';
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
        type: 'select',
      },
    },
    align: {
      options: aligns,
      control: {
        type: 'select',
      },
    },
  },
  args: {},
  parameters: {
    docs: {
      page: null,
    },
    controls: { expanded: true },
  },
};

export default meta;

const DefaultTemplate: StoryFn<ModalProps> = ({ align, ...args }: any) => {
  return (
    <EnhancedView prop="Default">
      <Modal trigger={<Button>Show Modal</Button>} {...args}>
        <ModalHeader
          align={align}
          icon={
            <FeaturedIcon variant="light-outline" color="success" size="xl">
              <CheckCircleIcon />
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

export const Default: StoryFn<typeof Modal> = DefaultTemplate.bind({});