import React, { useState, type CSSProperties, type PropsWithChildren } from 'react';
import { useControllableState } from '@radix-ui/react-use-controllable-state';

import { useMediaQuery } from '../../hooks';
import { type VisibleState } from '../../types';
import { SidebarProvider as BaseSidebarProvider } from './sidebar.context';

export interface LayoutProps extends VisibleState {
  expandOnHover?: boolean;
  sidebarWidth?: number;
  active?: string;
  defaultActive?: string;
  onActiveChange?: (active: string) => void;

  /** Hide the sidebar when hit this breakpoint
   * @default '48rem'
   */
  breakpoint?: string;
}

const Layout = (props: PropsWithChildren<LayoutProps>) => {
  const {
    open: openProps,
    defaultOpen = false,
    onOpenChange,
    children,
    active: activeProp,
    defaultActive: defaultActiveProp,
    onActiveChange,
    expandOnHover,
    sidebarWidth = 272,
    breakpoint = '48rem',
  } = props;
  const isMobile = useMediaQuery(`(max-width: ${breakpoint})`);

  const [isHover, setIsHover] = useState(false);

  const [open, setOpen] = useControllableState<boolean>({
    prop: openProps,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });

  const [active, setActive] = useControllableState<string>({
    prop: activeProp,
    defaultProp: defaultActiveProp,
    onChange: onActiveChange,
  });

  const toggleOpen = () => {
    setOpen(!open);
  };

  const isExpanded = Boolean(open || isHover);

  return (
    <BaseSidebarProvider
      value={{
        open,
        // * On mobile - default is expanded
        isExpanded: isMobile ? true : isExpanded,
        active,
        setActive,
        toggleOpen,
        sidebarWidth,
        setIsHover,
        expandOnHover,
        isHover,
        setOpen,
        isMobile,
      }}
    >
      <div
        style={
          {
            '--sidebar-width': `${sidebarWidth}px`,
          } as CSSProperties
        }
      >
        {children}
      </div>
    </BaseSidebarProvider>
  );
};

export default Layout;
