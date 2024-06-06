import React, { useState, type CSSProperties, type PropsWithChildren } from 'react';
import { useControllableState } from '@radix-ui/react-use-controllable-state';

import { type VisibleState } from '../../types';
import { SidebarProvider as BaseSidebarProvider } from './sidebar.context';

export interface SidebarProviderProps extends VisibleState {
  /** Expand sidebar on hover */
  expandOnHover?: boolean;
  /** Sidebar width */
  sidebarWidth?: number;
  /** Controllable Active item */
  active?: string;

  /** Uncontrollable Default active item */
  defaultActive?: string;

  /** Callback when active item changes */
  onActiveChange?: (active: string) => void;
}

const SidebarProvider = (props: PropsWithChildren<SidebarProviderProps>) => {
  const {
    open: openProps,
    defaultOpen,
    onOpenChange,
    children,
    active: activeProp,
    defaultActive: defaultActiveProp,
    onActiveChange,
    expandOnHover,
    sidebarWidth = 272,
  } = props;

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
        isExpanded,
        active,
        setActive,
        toggleOpen,
        sidebarWidth,
        setIsHover,
        expandOnHover,
        isHover,
        setOpen,
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

export default SidebarProvider;
