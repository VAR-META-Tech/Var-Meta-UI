import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import {
  Button,
  FeaturedIcon,
  Form,
  Modal,
  ModalAction,
  ModalBody,
  ModalHeader,
  toast,
  VStack,
  type AutocompleteProps,
  type ModalHeaderProps,
  type ModalProps,
} from '@var-ui/core';
import { AlertCircleIcon } from '@var-ui/icons';

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
    dismissable: {
      options: [true, false, undefined],
      control: {
        type: 'radio',
      },
    },
  },
  args: {},
};

export default meta;

const options: AutocompleteProps['options'] = [
  {
    value: 'Phoenix Baker',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=1" />
        <div className="font-medium text-foreground text-md">Phoenix Baker</div>
        <div className="text-gray-600 text-md">@Phoenix</div>
      </div>
    ),
  },
  {
    value: 'Henry',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=2" />
        <div className="font-medium text-foreground text-md">Henry</div>
        <div className="text-gray-600 text-md">@Henry</div>
      </div>
    ),
  },
  {
    value: 'Kevin Baker',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=3" />
        <div className="font-medium text-foreground text-md">Kevin Baker</div>
        <div className="text-gray-600 text-md">@kevin</div>
      </div>
    ),
  },
  {
    value: 'Josh William',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=4" />
        <div className="font-medium text-foreground text-md">Josh William</div>
        <div className="text-gray-600 text-md">@William</div>
      </div>
    ),
  },

  {
    value: 'William',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=5" />
        <div className="font-medium text-foreground text-md">Jenifer Change</div>
        <div className="text-gray-600 text-md">@William</div>
      </div>
    ),
  },
];

const DefaultTemplate: StoryFn<ModalProps> = ({ align, ...args }: any) => {
  return (
    <EnhancedView prop="Default">
      <div className="flex gap-4">
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

          <ModalBody>
            <VStack>
              <Form.Autocomplete label="Team" placeholder="Placeholder" options={options} />
              <Form.Select
                fullWidth
                placeholder="Placeholder"
                options={Array.from({ length: 100 }, (_, i) => ({ value: `${i}`, label: `Option ${i}` }))}
              />
            </VStack>
          </ModalBody>

          <ModalAction>
            <Button variant="outline" fullWidth>
              Discard
            </Button>
            <Button onClick={() => toast.error('error')} fullWidth>
              Save changes
            </Button>
          </ModalAction>
        </Modal>
      </div>
    </EnhancedView>
  );
};

export const Default: StoryFn<ModalProps> = DefaultTemplate.bind({});
