import type { Meta, StoryFn } from '@storybook/react';
import { HelpCircleIcon } from '@var-meta/icons';
import { Button, Tooltip, TooltipProvider } from '@var-meta/ui';
import { type TooltipProps } from '@var-meta/ui';
import React from 'react';

import { EnhancedView } from '@/components/View';

const align: TooltipProps['align'][] = ['center', 'end', 'start'];
const side: TooltipProps['side'][] = ['bottom', 'left', 'right', 'top'];

const meta: Meta = {
  title: 'Components/Tooltip/Tooltip',
  component: Tooltip,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    content: {
      control: { type: 'text' },
    },
    align: {
      options: align,
      control: { type: 'select' },
    },
    side: {
      options: side,
      control: { type: 'select' },
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
    delayDuration: {
      control: { type: 'number' },
    },
    disableHoverableContent: {
      control: { type: 'boolean' },
    },
  },
  args: {
    title: 'This is a tooltip',
    content:
      'Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text.',
    delayDuration: 300,
    theme: 'light',
    arrow: true,
    align: 'center',
    side: 'top',
  },
  parameters: {
    docs: {
      page: null,
    },
    controls: { expanded: true },
  },
};

export default meta;

const DefaultTemplate: StoryFn<TooltipProps> = (args) => {
  return (
    <TooltipProvider>
      <EnhancedView prop="Default">
        <Tooltip side="bottom" align="start" {...args}>
          <Button iconOnly variant="tertiary-gray">
            <HelpCircleIcon />
          </Button>
        </Tooltip>
      </EnhancedView>
    </TooltipProvider>
  );
};

export const Default: StoryFn<typeof Tooltip> = DefaultTemplate.bind({});
