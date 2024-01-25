import type { Meta, StoryFn } from '@storybook/react';
import { Button, type Modal, toast, Toaster, type ToasterProps, VStack } from '@var-meta/ui';
import React from 'react';

import { EnhancedView } from '@/components/View';

const meta: Meta = {
  title: 'Components/Toaster',
  tags: ['autodocs'],
  component: Toaster,
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
    src: {
      control: {
        type: 'text',
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
    withAction: true,
  },
};

export default meta;

const DefaultTemplate: StoryFn<ToasterProps> = ({ title, withAction, description, src, ...args }: any) => {
  const action = withAction ? {} : undefined;
  return (
    <>
      <EnhancedView prop="Default">
        <VStack className="w-fit" style={{ height: 700 }}>
          <Button onClick={() => toast.success(title, { description, action })} variant="success">
            Success toast
          </Button>
          <Button onClick={() => toast.error(title, { description, action })} variant="error">
            Error toast
          </Button>
          <Button onClick={() => toast.warning(title, { description, action })} variant="warning">
            Warning toast
          </Button>
          <Button onClick={() => toast.avatar(title, { description, action, src })} variant="primary">
            Avatar toast
          </Button>

          <Button onClick={() => toast.image(title, { description, action, src })} variant="secondary-gray">
            Image toast
          </Button>
        </VStack>
      </EnhancedView>
      <Toaster {...args} />
    </>
  );
};

export const Default: StoryFn<typeof Modal> = DefaultTemplate.bind({});
