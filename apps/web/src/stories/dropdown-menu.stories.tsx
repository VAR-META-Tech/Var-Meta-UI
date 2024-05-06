import type { Meta, StoryFn } from '@storybook/react';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuHeader,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  type SelectField,
  type SelectFieldProps,
} from '@var-ui/core';
import { ChevronDownIcon, CreditCard01Icon, Keyboard01Icon, Settings01Icon, User01Icon } from '@var-ui/icons';
import React from 'react';

import { EnhancedView } from '@/components/View';

const meta: Meta = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  argTypes: {
    align: {
      defaultValue: 'center',
      options: ['start', 'center', 'end'],
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

const DefaultTemplate: StoryFn<SelectFieldProps> = ({ align, ...args }) => {
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

  return (
    <EnhancedView direction="row" prop="Default" value={''}>
      <>
        <DropdownMenu {...args}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" color="gray">
              Account
              <ChevronDownIcon />
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
              <ChevronDownIcon />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align={align} className="w-56">
            <DropdownMenuHeader>
              <div className="flex items-center gap-3">
                <img
                  className="border-black aspect-square h-10 w-10 rounded-full border"
                  src="https://i.pravatar.cc/400?img=2"
                />
                <div>
                  <div className="text-md font-medium text-foreground">Henry Krel</div>
                  <div className="text-sm text-foreground-secondary">jerome@AxLabs.com</div>
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

export const Default: StoryFn<typeof SelectField> = DefaultTemplate.bind({});
