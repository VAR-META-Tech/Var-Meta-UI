import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { AlertCircleIcon } from '@var-meta/icons';
import {
  Button,
  FeaturedIcon,
  Form,
  Modal,
  toast,
  VStack,
  type AutocompleteProps,
  type ModalHeaderProps,
  type ModalProps,
} from '@var-meta/ui';

import { EnhancedView } from '@/components/View';

const aligns: ModalHeaderProps['align'][] = ['left', 'center', 'baseline'];
const placement: ModalProps['placement'][] = ['top', 'bottom', 'center', 'default', 'bottom-center', 'top-center'];

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
    placement: {
      options: placement,
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
    scrollBehavior: {
      options: ['inside', 'outside'],
      description: 'when using scroll outside, consider using placement top so the content will always visible',
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
  args: {
    title: 'Blog post published',
    description:
      'This blog post has been published. Team members will be able to edit this post and republish changes.',
  },
};

const options: AutocompleteProps['options'] = [
  {
    value: 'Phoenix Baker',
    label: (
      <div className="flex gap-2">
        <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/500?img=1" />
        <div className="text-foreground text-md font-medium">Phoenix Baker</div>
        <div className="text-md text-gray-600">@Phoenix</div>
      </div>
    ),
  },
  {
    value: 'Henry',
    label: (
      <div className="flex gap-2">
        <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/500?img=2" />
        <div className="text-foreground text-md font-medium">Henry</div>
        <div className="text-md text-gray-600">@Henry</div>
      </div>
    ),
  },
  {
    value: 'Kevin Baker',
    label: (
      <div className="flex gap-2">
        <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/500?img=3" />
        <div className="text-foreground text-md font-medium">Kevin Baker</div>
        <div className="text-md text-gray-600">@kevin</div>
      </div>
    ),
  },
  {
    value: 'Josh William',
    label: (
      <div className="flex gap-2">
        <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/500?img=4" />
        <div className="text-foreground text-md font-medium">Josh William</div>
        <div className="text-md text-gray-600">@William</div>
      </div>
    ),
  },

  {
    value: 'William',
    label: (
      <div className="flex gap-2">
        <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/500?img=5" />
        <div className="text-foreground text-md font-medium">Jenifer Change</div>
        <div className="text-md text-gray-600">@William</div>
      </div>
    ),
  },
];

export default meta;

const DefaultTemplate: StoryFn<ModalProps> = ({ align, title, description, ...args }: any) => {
  return (
    <EnhancedView prop="Default">
      <div className="flex gap-4">
        <Modal className="" trigger={<Button>Show Modal</Button>} {...args}>
          <Modal.Header
            align={align}
            icon={
              <FeaturedIcon variant="outline" color="brand" size="md">
                <AlertCircleIcon />
              </FeaturedIcon>
            }
            title={title}
            description={description}
          />

          <Modal.Body>
            <VStack>
              <Form.Autocomplete label="Team" placeholder="Placeholder" options={options} />
              <Form.Select
                fullWidth
                placeholder="Placeholder"
                options={Array.from({ length: 100 }, (_, i) => ({ value: `${i}`, label: `Option ${i}` }))}
              />
            </VStack>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
              venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
              hendrerit risus, sed porttitor quam. Magna exercitation reprehenderit magna aute tempor cupidatat
              consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
              officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse
              laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque
              sit amet hendrerit risus, sed porttitor quam. Magna exercitation reprehenderit magna aute tempor cupidatat
              consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
              officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse
              laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam. Mollit dolor eiusmod
              sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
              Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
              deserunt nostrud ad veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus
              non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam. Magna
              exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor
              eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor
              eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et.
              Culpa deserunt nostrud ad veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
              risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam. Magna
              exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor
              eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor
              eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et.
              Culpa deserunt nostrud ad veniam. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
              officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse
              laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque
              sit amet hendrerit risus, sed porttitor quam. Magna exercitation reprehenderit magna aute tempor cupidatat
              consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
              officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse
              laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
            </div>
          </Modal.Body>

          <Modal.Action>
            <Button variant="outline" color="default" fullWidth>
              Discard
            </Button>
            <Button onClick={() => toast.error('error')} fullWidth>
              Save changes
            </Button>
          </Modal.Action>
        </Modal>

        <Modal className="" trigger={<Button>Show Modal Less Content</Button>} {...args}>
          <Modal.Header
            align={align}
            icon={
              <FeaturedIcon variant="outline" color="brand" size="md">
                <AlertCircleIcon />
              </FeaturedIcon>
            }
            title={title}
            description={description}
          />

          <Modal.Body>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
              venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </div>
          </Modal.Body>

          <Modal.Action>
            <Button variant="outline" color="default" fullWidth>
              Discard
            </Button>
            <Button onClick={() => toast.error('error')} fullWidth>
              Save changes
            </Button>
          </Modal.Action>
        </Modal>
      </div>
    </EnhancedView>
  );
};

export const Default: StoryFn<ModalProps> = DefaultTemplate.bind({});

const ModalInModalTemplate: StoryFn<ModalProps> = ({ align, title, description, ...args }: any) => {
  return (
    <EnhancedView prop="Modal In Modal">
      <div className="flex gap-4">
        <Modal className="" trigger={<Button>Show Modal</Button>} {...args}>
          <Modal.Header
            align={align}
            icon={
              <FeaturedIcon variant="outline" color="brand" size="md">
                <AlertCircleIcon />
              </FeaturedIcon>
            }
            title={title}
            description={description}
          />

          <Modal.Body>
            <VStack>
              <Form.Autocomplete label="Team" placeholder="Placeholder" options={options} />
              <Form.Select
                fullWidth
                placeholder="Placeholder"
                options={Array.from({ length: 100 }, (_, i) => ({ value: `${i}`, label: `Option ${i}` }))}
              />
            </VStack>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
              venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
              hendr
            </div>
          </Modal.Body>

          <Modal.Action>
            <Modal className="" trigger={<Button>Show Modal Less Content</Button>} {...args}>
              <Modal.Header
                align={align}
                icon={
                  <FeaturedIcon variant="outline" color="brand" size="md">
                    <AlertCircleIcon />
                  </FeaturedIcon>
                }
                title={title}
                description={description}
              />

              <Modal.Body>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
                  venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </div>
              </Modal.Body>

              <Modal.Action>
                <Button variant="outline" color="default" fullWidth>
                  Discard
                </Button>
                <Button onClick={() => toast.error('error')} fullWidth>
                  Save changes
                </Button>
              </Modal.Action>
            </Modal>
          </Modal.Action>
        </Modal>
      </div>
    </EnhancedView>
  );
};

export const ModalInModal: StoryFn<ModalProps> = ModalInModalTemplate.bind({});
