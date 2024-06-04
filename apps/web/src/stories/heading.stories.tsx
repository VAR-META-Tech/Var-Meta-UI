import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Heading, type HeadingProps } from '@var-ui/core';

import { EnhancedView } from '@/components/View';

const meta: Meta = {
  title: 'Components/Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;

const DefaultTemplate: StoryFn<HeadingProps> = ({ ...args }) => {
  return (
    <EnhancedView prop="Default">
      <Heading {...args}>Heading</Heading>
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Heading> = DefaultTemplate.bind({});
