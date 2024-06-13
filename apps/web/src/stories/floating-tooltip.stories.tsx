import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { FloatingTooltip, type FloatingTooltipProps } from '@var-meta/ui';

import { EnhancedView } from '@/components/View';

const positions: FloatingTooltipProps['position'][] = [
  'bottom',
  'bottom-end',
  'bottom-start',
  'left-start',
  'left',
  'right',
  'right-end',
  'right-start',
  'top',
  'top-end',
  'top-start',
  'bottom',
];

const meta: Meta = {
  title: 'Components/Tooltip/FloatingTooltip',
  component: FloatingTooltip,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    content: {
      control: { type: 'text' },
    },
    theme: {
      options: ['default', 'light', 'dark'],
      control: { type: 'select' },
    },
    arrow: {
      control: { type: 'boolean' },
    },
    open: {
      control: { type: 'boolean' },
    },
    defaultOpen: {
      control: { type: 'boolean' },
    },
    position: {
      options: positions,
      control: { type: 'select' },
    },
  },
  args: {
    title: 'This is a tooltip',
    content:
      'FloatingTooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text.',
    theme: 'default',
    arrow: true,
    position: 'top',
  },
  parameters: {
    docs: {
      page: null,
    },
    controls: { expanded: true },
  },
};

export default meta;

const DefaultTemplate: StoryFn<FloatingTooltipProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <FloatingTooltip {...args}>
        <div className="bg-background-light h-[300px] w-[300px]" />
      </FloatingTooltip>
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof FloatingTooltip> = DefaultTemplate.bind({});
