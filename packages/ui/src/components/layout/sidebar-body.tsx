import React, { forwardRef, type ElementRef } from 'react';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import {
  Navigation,
  NavigationDropdown,
  NavigationItem,
  type NavigationDropdownProps,
  type NavigationItemProps,
} from '../navigation';
import { useSidebarContext } from './sidebar.context';

const SidebarBodyRoot = forwardRef<ElementRef<'div'>, ElementProps<'div'>>(({ children, className, ...props }, ref) => {
  return (
    <div
      className={cn('mb-2 mt-6 flex flex-col gap-y-4 overflow-y-auto overflow-x-hidden', className)}
      {...props}
      ref={ref}
    >
      {children}
    </div>
  );
});

const SidebarSection = forwardRef<ElementRef<'div'>, ElementProps<'div'>>(({ children, className, ...props }, ref) => {
  return (
    <div className={cn('flex flex-col gap-y-2', className)} {...props} ref={ref}>
      {children}
    </div>
  );
});

const SidebarNavTitle = forwardRef<ElementRef<'div'>, ElementProps<'div'>>(({ children, className, ...props }, ref) => {
  const { isExpanded } = useSidebarContext();

  return (
    <div
      className={cn(
        'text-foreground-quaternary max-w-full whitespace-nowrap py-1 text-xs font-medium uppercase',
        {
          'px-5': isExpanded,
          'truncate px-3 text-center': !isExpanded,
        },
        className
      )}
      {...props}
      ref={ref}
    >
      <>{children}</>
    </div>
  );
});

const SidebarNavList = forwardRef<ElementRef<'ul'>, ElementProps<'ul'>>(({ className, children, ...props }, ref) => {
  const { isExpanded } = useSidebarContext();

  return (
    <Navigation className={cn('px-5', className)} collapsed={!isExpanded} ref={ref} orientation="vertical" {...props}>
      {children}
    </Navigation>
  );
});

export interface SidebarNavListDropdownProps extends NavigationDropdownProps {}

const SidebarNavListDropdown = forwardRef<ElementRef<typeof NavigationDropdown>, SidebarNavListDropdownProps>(
  (props, ref) => {
    const { active } = useSidebarContext();

    return <NavigationDropdown ref={ref} activeValue={active} {...props} />;
  }
);

export interface SidebarNavListItemProps extends NavigationItemProps {
  value: string;
}

const SidebarNavListItem = forwardRef<ElementRef<typeof NavigationItem>, SidebarNavListItemProps>(
  ({ active: activeProp, value, onClick, ...props }, ref) => {
    const { active, setActive } = useSidebarContext();
    return (
      <NavigationItem
        onClick={(e) => {
          onClick?.(e);
          setActive(value);
        }}
        withActiveCursor
        active={activeProp || active === value}
        ref={ref}
        {...props}
      />
    );
  }
);

const List = Object.assign(SidebarNavList, {
  Dropdown: SidebarNavListDropdown,
  Item: SidebarNavListItem,
});

export const SidebarBody = Object.assign(SidebarBodyRoot, {
  Section: SidebarSection,
  Title: SidebarNavTitle,
  List,
});
