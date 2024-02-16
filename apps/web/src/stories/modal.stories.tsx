import type { Meta, StoryFn } from '@storybook/react';
import {
  Autocomplete,
  type AutocompleteProps,
  Button,
  FeaturedIcon,
  Modal,
  ModalAction,
  ModalHeader,
  type ModalProps,
  SelectField,
  VStack,
} from '@var-ui/core';
import { type ModalHeaderProps } from '@var-ui/core';
import { AlertCircleIcon } from '@var-ui/icons';
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
    modal: {
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
    overlayClosable: {
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
        <div className="font-medium text-gray-900 text-md">Phoenix Baker</div>
        <div className="text-gray-600 text-md">@phoenix</div>
      </div>
    ),
  },
  {
    value: 'Jerome',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=2" />
        <div className="font-medium text-gray-900 text-md">Jerome</div>
        <div className="text-gray-600 text-md">@Jerome</div>
      </div>
    ),
  },
  {
    value: 'Kevin Baker',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=3" />
        <div className="font-medium text-gray-900 text-md">Kevin Baker</div>
        <div className="text-gray-600 text-md">@kevin</div>
      </div>
    ),
  },
  {
    value: 'Kent',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=4" />
        <div className="font-medium text-gray-900 text-md">Kent</div>
        <div className="text-gray-600 text-md">kent</div>
      </div>
    ),
  },

  {
    value: 'Gaba',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=5" />
        <div className="font-medium text-gray-900 text-md">Gaba Gaba</div>
        <div className="text-gray-600 text-md">@gaba</div>
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

          <VStack className="px-4">
            <Autocomplete label="Team" placeholder="Placeholder" options={options} />
            <SelectField label="Member" fullWidth placeholder="Select team member" options={options} />
          </VStack>
          <ModalAction>
            <Button variant="secondary-gray" fullWidth>
              Discard
            </Button>
            <Button fullWidth>Save changes</Button>
          </ModalAction>
        </Modal>
      </div>
    </EnhancedView>
  );
};

export const Default: StoryFn<ModalProps> = DefaultTemplate.bind({});
