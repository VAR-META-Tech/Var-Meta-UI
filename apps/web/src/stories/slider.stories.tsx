import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Slider, type SliderProps } from '@var-meta-tech/ui';

import { EnhancedView } from '@/components/View';

const orientations: SliderProps['orientation'][] = ['horizontal', 'vertical'];
const meta: Meta = {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    orientation: {
      options: orientations,
      control: { type: 'select' },
    },
  },
  parameters: {
    docs: {
      page: null,
    },
    controls: { expanded: true },
  },
};

export default meta;

const DefaultTemplate: StoryFn<SliderProps> = ({ ...args }) => {
  return (
    <EnhancedView prop="Default">
      <Slider defaultValue={[25, 75]} {...args} />
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Slider> = DefaultTemplate.bind({});
