import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Tabs, TabsContent, TabsList, TabsTrigger, type TabsProps } from '@var-meta/ui';

import { EnhancedView } from '@/components/View';

const meta: Meta = {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
    },
  },
  args: {
    size: 'sm',
    orientation: 'horizontal',
  },
  parameters: {
    docs: {
      page: null,
    },
    controls: { expanded: true },
  },
};

export default meta;

const DefaultTemplate: StoryFn<TabsProps> = ({ ...args }) => {
  return (
    <EnhancedView prop="Default">
      <div>
        <Tabs defaultValue="All" {...args}>
          <TabsList className="max-w-sm">
            <TabsTrigger value="All">All</TabsTrigger>
            <TabsTrigger value="Active">Active</TabsTrigger>
            <TabsTrigger value="Offline">Offline</TabsTrigger>
          </TabsList>
          <TabsContent value="All">All</TabsContent>
          <TabsContent value="Active">Active</TabsContent>
          <TabsContent value="Offline">Offline</TabsContent>
        </Tabs>
      </div>
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Tabs> = DefaultTemplate.bind({});

const MultipleTabsTemplate: StoryFn<TabsProps> = ({ ...args }) => {
  return (
    <EnhancedView prop="MultipleTabs">
      <div>
        <Tabs defaultValue="All" {...args} layoutId="a">
          <TabsList className="max-w-sm">
            <TabsTrigger value="All">All</TabsTrigger>
            <TabsTrigger value="Active">Active</TabsTrigger>
            <TabsTrigger value="Offline">Offline</TabsTrigger>
          </TabsList>
          <TabsContent value="All">All</TabsContent>
          <TabsContent value="Active">Active</TabsContent>
          <TabsContent value="Offline">Offline</TabsContent>
        </Tabs>

        <Tabs defaultValue="All" layoutId="b">
          <TabsList className="max-w-sm">
            <TabsTrigger value="All">All</TabsTrigger>
            <TabsTrigger value="Active">Active</TabsTrigger>
            <TabsTrigger value="Offline">Offline</TabsTrigger>
          </TabsList>
          <TabsContent value="All">All</TabsContent>
          <TabsContent value="Active">Active</TabsContent>
          <TabsContent value="Offline">Offline</TabsContent>
        </Tabs>
      </div>
    </EnhancedView>
  );
};

export const MultipleTabs: StoryFn<typeof Tabs> = MultipleTabsTemplate.bind({});
