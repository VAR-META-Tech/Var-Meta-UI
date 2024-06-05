import { default as SidebarRoot, type SidebarProps } from './sidebar';
import { SidebarBody, type SidebarNavListDropdownProps, type SidebarNavListItemProps } from './sidebar-body';
import { SidebarHead, type SidebarHeaderProps } from './sidebar-head';

export const Sidebar = Object.assign(SidebarRoot, { Body: SidebarBody, Head: SidebarHead });

export type { SidebarProps, SidebarHeaderProps, SidebarNavListItemProps, SidebarNavListDropdownProps };
