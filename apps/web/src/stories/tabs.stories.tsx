import type { Meta, StoryFn } from '@storybook/react';
import { Tabs, TabsContent, TabsList, type TabsProps, TabsRoot, TabsTrigger } from '@var-ui/core';
import React from 'react';

import { EnhancedView } from '@/components/View';

const variants: TabsProps['variant'][] = ['primary', 'gray', 'white', 'underline', 'underline-filled', 'vertical-line'];
const sizes: TabsProps['size'][] = ['sm', 'md'];
const orientations: TabsProps['orientation'][] = ['horizontal', 'vertical'];

const meta: Meta = {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    orientation: {
      options: orientations,
      control: { type: 'select' },
    },
    variant: {
      options: variants,
      control: { type: 'select' },
    },
    size: {
      options: sizes,
      control: { type: 'select' },
    },
  },
  args: {
    size: 'sm',
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
      <TabsRoot defaultValue="My details" {...args}>
        <TabsList>
          <TabsTrigger badge={1} value="My details">
            My details
          </TabsTrigger>
          <TabsTrigger value="Profile">Profile</TabsTrigger>
          <TabsTrigger value="Password">Password</TabsTrigger>
          <TabsTrigger value="Team">Team</TabsTrigger>
          <TabsTrigger value="Plan">Plan</TabsTrigger>
          <TabsTrigger value="Billing">Billing</TabsTrigger>
        </TabsList>
        <TabsContent value="My details"></TabsContent>
      </TabsRoot>
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Tabs> = DefaultTemplate.bind({});

const options = [
  {
    label: 'Profile',
    value: 'Profile',
    badge: '7',
  },
  {
    label: 'Password',
    value: 'Password',
    badge: '7',
  },
  {
    label: 'Team',
    value: 'Team',
    badge: '7',
  },
  {
    label: 'Plan',
    value: 'Plan',
  },
];
const TabsStandaloneTemplate: StoryFn<TabsProps> = ({ ...args }) => {
  return (
    <EnhancedView prop="Standalone">
      <Tabs defaultValue="My details" options={options} {...args}>
        <TabsContent value="My details"></TabsContent>
      </Tabs>
    </EnhancedView>
  );
};

export const TabsStandalone: StoryFn<typeof Tabs> = TabsStandaloneTemplate.bind({});
