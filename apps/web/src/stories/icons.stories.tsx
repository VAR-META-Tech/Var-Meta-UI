import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Tooltip, TooltipProvider } from '@var-ui/core';
import { icons } from '@var-ui/icons';

import { View } from '@/components/View';

const meta: Meta = {
  title: 'Components/Icons',
  argTypes: {},
  args: {
    helperText: 'This is a hint text to help user.',
    label: 'Label',
  },
  parameters: {
    docs: {
      page: null,
    },
    controls: { expanded: true },
  },
};

export default meta;

const DefaultTemplate: StoryFn<any> = () => {
  const renderIcons = () => {
    return (
      <TooltipProvider>
        <div className="flex flex-wrap gap-6">
          {Object.keys(icons).map((iconName) => (
            <div className="w-fit" key={iconName}>
              <Tooltip title={iconName}>
                <button>{React.createElement(icons[iconName])}</button>
              </Tooltip>
            </div>
          ))}
        </div>
      </TooltipProvider>
    );
  };
  return <View prop="Default">{renderIcons()}</View>;
};

export const Default: StoryFn<any> = DefaultTemplate.bind({});
