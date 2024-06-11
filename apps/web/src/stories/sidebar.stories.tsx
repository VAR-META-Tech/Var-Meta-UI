import React from 'react';
import Link from 'next/link';
import type { Meta, StoryFn } from '@storybook/react';
import { CalendarIcon, Sidebar, SidebarProvider, type SidebarProps } from '@var-ui/core';
import {
  Award01Icon,
  CoinsStacked03Icon,
  CurrencyDollarCircleIcon,
  Diamond01Icon,
  GraduationHat01Icon,
  Lightbulb02Icon,
  UserRight01Icon,
  Users01Icon,
  UsersPlusIcon,
  UserUp02Icon,
} from '@var-ui/icons';

const meta: Meta = {
  title: 'Components/Layout/Sidebar',
  component: SidebarProvider,
  tags: ['autodocs'],
  argTypes: {
    expandOnHover: {
      description: ' Expand sidebar on hover',
      control: {
        type: 'boolean',
      },
    },
    sidebarWidth: {
      description: 'Sidebar width',
      control: {
        type: 'number',
      },
    },
    active: {
      description: 'Controllable Active item',
      control: {
        type: 'text',
      },
    },
    defaultActive: {
      description: 'Uncontrollable Default active item',
      control: {
        type: 'text',
      },
    },
    onActiveChange: {
      description: 'Callback when active item changes',
      control: {
        type: 'object',
      },
    },
    open: {
      description: 'Controllable Open sidebar',
      control: {
        type: 'text',
      },
    },
    defaultOpen: {
      description: 'Uncontrollable Default Open sidebar',
      control: {
        type: 'text',
      },
    },
    onOpenChange: {
      description: 'Callback when open sidebar changes',
      control: {
        type: 'object',
      },
    },
  },
  args: {},
};

export default meta;

const Logo = () => (
  <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#a)">
      <rect width={40} height={40} rx={20} fill="#312DCA" />
      <path
        d="m22.139 25.065-2.277-3.956a.31.31 0 0 0-.536 0l-2.284 3.956a.31.31 0 0 0 .268.464h4.564a.31.31 0 0 0 .265-.464"
        fill="#fff"
      />
      <path
        d="m21.89 15.007.004-.007h-.658c-.11 0-.214.06-.268.153l-1.037 1.797a.31.31 0 0 1-.536 0l-1.033-1.796a.3.3 0 0 0-.268-.154l-11.784.007a.31.31 0 0 0-.268.464l5.715 9.915a.3.3 0 0 0 .268.154h3.614c.11 0 .214-.06.268-.154l3.488-6.048a.309.309 0 0 1 .537 0l3.488 6.048a.3.3 0 0 0 .268.154h3.614c.11 0 .214-.06.268-.154l5.722-9.922a.31.31 0 0 0-.268-.464z"
        fill="#fff"
      />
    </g>
    <defs>
      <filter id="a" x={0} y={-4} width={40} height={44} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={-4} />
        <feGaussianBlur stdDeviation={4} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.64 0" />
        <feBlend in2="shape" result="effect1_innerShadow_31_6926" />
      </filter>
    </defs>
  </svg>
);

const links = [
  {
    title: 'GENERAL',
    routes: [
      {
        icon: <Users01Icon className="h-5 w-5" />,
        label: 'Staff List',
        value: 'Staff List',
        href: '/',
      },
      {
        icon: <UserRight01Icon className="h-5 w-5" />,
        label: 'Request',
        value: 'Request',
        dropdowns: [
          {
            label: 'Work from home',
            value: 'Work from home',
            href: '/',
          },
          {
            label: 'Day off',
            value: 'Day off',
            href: '/',
          },
          {
            label: 'CI/CO',
            value: 'CI/CO',
            href: '/',
          },
          {
            label: 'Overtime',
            value: 'Overtime',
            href: '/',
          },
        ],
      },
      {
        icon: <Award01Icon className="h-5 w-5" />,
        label: 'Ranking Chart',
        value: 'Ranking Chart',
        href: '/',
      },
    ],
  },

  {
    title: 'SALARY',
    routes: [
      {
        icon: <CalendarIcon className="h-5 w-5" />,
        label: 'Time Keeping',
        value: 'Time Keeping',
        href: '/',
      },
      {
        icon: <CurrencyDollarCircleIcon className="h-5 w-5" />,
        label: 'Payroll',
        value: 'Payroll',
        href: '/',
      },
      {
        icon: <UserUp02Icon className="h-5 w-5" />,
        label: 'Check Point',
        value: 'Check Point',
        href: '/',
      },
    ],
  },

  {
    title: 'MANAGEMENT',
    routes: [
      {
        icon: <CoinsStacked03Icon className="h-5 w-5" />,
        label: 'Resource Management',
        value: 'Resource Management',
        href: '/',
      },
      {
        icon: <Lightbulb02Icon className="h-5 w-5" />,
        label: 'Initiative Management',
        value: 'Initiative Management',
        href: '/',
      },
      {
        icon: <Diamond01Icon className="h-5 w-5" />,
        label: 'Asset Management',
        value: 'Asset Management',
        href: '/',
      },
      {
        icon: <UsersPlusIcon className="h-5 w-5" />,
        label: 'Recruitment Management',
        value: 'Recruitment Management',
        href: '/',
      },
      {
        icon: <GraduationHat01Icon className="h-5 w-5" />,
        label: 'Skills Management',
        value: 'Skills Management',
        href: '/',
      },
    ],
  },
];

const DefaultTemplate: StoryFn<SidebarProps> = ({ ...args }) => {
  return (
    <div className="bg-background relative min-h-[50vh]">
      <SidebarProvider {...args}>
        <Sidebar>
          <Sidebar.Head>
            <Sidebar.Head.Toggle />

            <Sidebar.Head.Logo>
              <Logo />
            </Sidebar.Head.Logo>
            <Sidebar.Head.Title>Excellent in Every Block</Sidebar.Head.Title>
          </Sidebar.Head>

          <Sidebar.Body>
            {links.map((link) => (
              <Sidebar.Body.Section key={link.title}>
                <Sidebar.Body.Title>{link.title}</Sidebar.Body.Title>
                <Sidebar.Body.List>
                  {link.routes.map((item) => {
                    if (item?.dropdowns) {
                      return (
                        <Sidebar.Body.List.Dropdown key={item.label} icon={item.icon} label={item.label}>
                          {item.dropdowns.map((child) => (
                            <Link passHref legacyBehavior href={child.href} key={child.value}>
                              <Sidebar.Body.List.Item value={child.value} key={child.value} label={child.label} />
                            </Link>
                          ))}
                        </Sidebar.Body.List.Dropdown>
                      );
                    }

                    return (
                      <Link passHref legacyBehavior href={item.href} key={item.value}>
                        <Sidebar.Body.List.Item
                          value={item.value}
                          key={item.value}
                          icon={item.icon}
                          label={item.label}
                        />
                      </Link>
                    );
                  })}
                </Sidebar.Body.List>
              </Sidebar.Body.Section>
            ))}
          </Sidebar.Body>

          <Sidebar.Footer>Footer</Sidebar.Footer>
        </Sidebar>
      </SidebarProvider>
    </div>
  );
};

export const Default: StoryFn<typeof Sidebar> = DefaultTemplate.bind({});
