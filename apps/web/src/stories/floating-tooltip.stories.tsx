import type { Meta, StoryFn } from '@storybook/react';
import { FloatingTooltip } from '@swiss-digital-assets-institute/ui';
import { type FloatingTooltipProps } from '@swiss-digital-assets-institute/ui';
import React from 'react';

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
  title: 'Components/FloatingTooltip',
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
      options: ['light', 'dark'],
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
    theme: 'light',
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
        <div
          style={{
            width: 300,
            height: 300,
            background: '#f5f5f5',
          }}
        />
      </FloatingTooltip>
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof FloatingTooltip> = DefaultTemplate.bind({});
