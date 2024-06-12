import { Overlay } from '../dialog';
import { BurgerMenu } from './burger-menu';
import { default as BaseLayout, type LayoutProps } from './layout';
import { MainContent } from './main-content';
import { default as SidebarRoot, type SidebarProps } from './sidebar';
import { SidebarBody, type SidebarNavListDropdownProps, type SidebarNavListItemProps } from './sidebar-body';
import { SidebarFooter, type SidebarFooterProps } from './sidebar-footer';
import { SidebarHead, type SidebarHeaderProps } from './sidebar-head';
import { SidebarOverlay, type SidebarOverlayProps } from './sidebar-overlay';

export { default as SidebarProvider, type SidebarProviderProps } from './sidebar-provider';

export const Sidebar = Object.assign(SidebarRoot, {
  Overlay: SidebarOverlay,
  Body: SidebarBody,
  Footer: SidebarFooter,
  Head: SidebarHead,
});
export const Layout = Object.assign(BaseLayout, { Content: MainContent, BurgerMenu });

export type {
  SidebarProps,
  SidebarHeaderProps,
  SidebarFooterProps,
  SidebarNavListItemProps,
  SidebarNavListDropdownProps,
  LayoutProps,
  SidebarOverlayProps,
};
