import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import {
  Avatar,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuHeader,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@var-ui/core';
import { ChevronDownIcon, CreditCard01Icon, Keyboard01Icon, Settings01Icon, User01Icon } from '@var-ui/icons';

import { EnhancedView } from '@/components/View';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    align: {
      description: 'The alignment of the menu relative to the trigger.',
      options: ['start', 'center', 'end'],
      control: { type: 'select' },
    },
    alignOffset: {
      description: 'The distance from the edge of the trigger to the edge of the menu',
      defaultValue: 4,
      control: { type: 'number' },
    },
    defaultOpen: {
      description: 'The initial open state of the menu.',
      control: { type: 'boolean' },
    },
    open: {
      description: 'The open state of the menu.',
      control: { type: 'boolean' },
    },
    sideOffset: {
      description: 'The distance from the side of the trigger to the edge of the menu.',
      control: { type: 'number' },
    },
    trigger: {
      description: 'React component to trigger the menu open.',
      control: { type: 'object' },
    },
  },
  args: {},
};

export default meta;

const contentGroup = (
  <DropdownMenuGroup>
    <DropdownMenuItem>
      <User01Icon className="mr-2 h-4 w-4" />
      <span>Profile</span>
      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <CreditCard01Icon className="mr-2 h-4 w-4" />
      <span>Billing</span>
      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Settings01Icon className="mr-2 h-4 w-4" />
      <span>Settings</span>
      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Keyboard01Icon className="mr-2 h-4 w-4" />
      <span>Keyboard shortcuts</span>
      <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
    </DropdownMenuItem>
  </DropdownMenuGroup>
);

const DefaultTemplate: StoryFn<typeof Dropdown> = ({ ...args }) => {
  return (
    <EnhancedView direction="row" prop="Default" value={''}>
      <div className="flex w-full items-center justify-center gap-8">
        <Dropdown
          trigger={
            <Button variant="outline" color="gray">
              9 page
              <ChevronDownIcon className="ml-1 h-5 w-5" />
            </Button>
          }
          {...args}
        >
          <DropdownMenuLabel>Account menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {contentGroup}
          <DropdownMenuSeparator />
          {contentGroup}
        </Dropdown>

        <Dropdown
          trigger={
            <Button className="gap-1 p-2" variant="outline" color="gray">
              <Avatar size="xs" src="https://i.pravatar.cc/1080?img=10" />
              Julian
              <ChevronDownIcon className="ml-1 h-5 w-5" />
            </Button>
          }
          {...args}
        >
          <DropdownMenuHeader>
            <div className="flex items-center gap-3">
              <img
                className="aspect-square h-10 w-10 rounded-full border border-black"
                src="https://i.pravatar.cc/400?img=5"
              />
              <div>
                <div className="text-md text-foreground font-medium">Kevin Pham</div>
                <div className="text-foreground-secondary text-sm">kevin@var-meta.com</div>
              </div>
            </div>
          </DropdownMenuHeader>
          <DropdownMenuSeparator />
          {contentGroup}
          <DropdownMenuSeparator />
          {contentGroup}
        </Dropdown>
      </div>
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Dropdown> = DefaultTemplate.bind({});

const StandaloneTemplate: StoryFn<typeof Dropdown> = ({ align, ...args }) => {
  return (
    <EnhancedView direction="row" prop="Default" value={''}>
      <>
        <DropdownMenu {...args}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" color="gray">
              Account
              <ChevronDownIcon className="ml-1 h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align={align} className="w-56">
            <DropdownMenuLabel>Account menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {contentGroup}
            <DropdownMenuSeparator />
            {contentGroup}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu {...args}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" color="gray">
              Account with avatar
              <ChevronDownIcon className="ml-1 h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align={align} className="w-56">
            <DropdownMenuHeader>
              <div className="flex items-center gap-3">
                <img
                  className="aspect-square h-10 w-10 rounded-full border border-black"
                  src="https://i.pravatar.cc/400?img=5"
                />
                <div>
                  <div className="text-md text-foreground font-medium">Kevin Pham</div>
                  <div className="text-foreground-secondary text-sm">kevin@var-meta.com</div>
                </div>
              </div>
            </DropdownMenuHeader>
            <DropdownMenuSeparator />
            {contentGroup}
            <DropdownMenuSeparator />
            {contentGroup}
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    </EnhancedView>
  );
};

export const Standalone: StoryFn<typeof Dropdown> = StandaloneTemplate.bind({});
