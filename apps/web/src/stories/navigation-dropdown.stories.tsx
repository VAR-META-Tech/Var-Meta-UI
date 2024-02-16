import type { Meta, StoryFn } from '@storybook/react';
import { cn, Navigation, NavigationDropdown, NavigationItem } from '@var-ui/core';
import { type NavigationItemProps } from '@var-ui/core';
import { type NavigationDropdownProps } from '@var-ui/core';
import {
  BarChart01Icon,
  CheckDone01Icon,
  HomeLineIcon,
  LayersThree01Icon,
  PieChart01Icon,
  Users01Icon,
} from '@var-ui/icons';
import React from 'react';

import { EnhancedView } from '@/components/View';

const variant: NavigationItemProps['variant'][] = ['default', 'dark', 'brand'];

const meta: Meta = {
  title: 'Components/Navigation/NavigationDropdown',
  component: NavigationDropdown,
  argTypes: {
    variant: {
      options: variant,
      control: {
        type: 'radio',
      },
    },
  },
  args: {
    variant: 'default',
  },
};

export default meta;

const links = [
  { label: 'Home', icon: <HomeLineIcon className="w-6 h-6" />, active: false },
  { label: 'Dashboard', icon: <BarChart01Icon className="w-6 h-6" />, active: true },
  { label: 'Project', icon: <LayersThree01Icon className="w-6 h-6" />, active: false },
  { label: 'Tasks', icon: <CheckDone01Icon className="w-6 h-6" />, active: false },
  { label: 'Reporting', icon: <PieChart01Icon className="w-6 h-6" />, active: false },
  { label: 'User', icon: <Users01Icon className="w-6 h-6" />, active: false },
];

const DefaultTemplate: StoryFn<NavigationDropdownProps> = ({ variant, ...args }) => {
  return (
    <EnhancedView prop="Default">
      <nav
        style={{
          padding: '32px',
          width: '100%',
        }}
        className={cn(' flex items-center', {
          'bg-gray-950': variant === 'dark',
          'bg-brand-700': variant === 'brand',
          'bg-white': variant === 'default',
        })}
      >
        <Navigation orientation="vertical">
          {links.map((x) => (
            <NavigationDropdown key={x.label} variant={variant} active={x.active} icon={x.icon} label={x.label}>
              <NavigationItem {...args} variant={variant} label="Dropdown item 1" />
              <NavigationItem {...args} variant={variant} label="Dropdown item 2" />
            </NavigationDropdown>
          ))}
        </Navigation>
      </nav>
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Navigation> = DefaultTemplate.bind({});
