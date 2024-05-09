import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { cn, Navigation, NavigationDropdown, NavigationItem, type NavigationItemProps } from '@var-ui/core';
import {
  BarChart01Icon,
  CheckDone01Icon,
  HomeLineIcon,
  LayersThree01Icon,
  PieChart01Icon,
  Users01Icon,
} from '@var-ui/icons';

import { EnhancedView } from '@/components/View';

const meta: Meta = {
  title: 'Components/Navigation/NavigationItem',
  component: NavigationDropdown,
  parameters: {
    docs: {
      page: null,
    },
    controls: { expanded: true },
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

const DefaultTemplate: StoryFn<NavigationItemProps> = ({ variant, ...args }) => {
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
          'bg-white': variant === 'default' || !variant,
        })}
      >
        <Navigation orientation="vertical">
          {links.map((x) => (
            <NavigationItem {...args} key={x.label} variant={variant} active={x.active} icon={x.icon} label={x.label} />
          ))}
        </Navigation>
      </nav>
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Navigation> = DefaultTemplate.bind({});
