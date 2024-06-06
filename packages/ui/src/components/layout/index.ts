import { default as SidebarRoot, type SidebarProps } from './sidebar';
import { SidebarBody, type SidebarNavListDropdownProps, type SidebarNavListItemProps } from './sidebar-body';
import { SidebarFooter, type SidebarFooterProps } from './sidebar-footer';
import { SidebarHead, type SidebarHeaderProps } from './sidebar-head';

export const Sidebar = Object.assign(SidebarRoot, { Body: SidebarBody, Footer: SidebarFooter, Head: SidebarHead });

export type {
  SidebarProps,
  SidebarHeaderProps,
  SidebarFooterProps,
  SidebarNavListItemProps,
  SidebarNavListDropdownProps,
};
