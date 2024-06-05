import React, { forwardRef, type ElementRef } from 'react';
import { composeEventHandlers } from '@radix-ui/primitive';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { withAttr } from '../../utils/withAttr';
import { Button, type ButtonProps } from '../button';
import { ChevronLeftIcon } from '../icons';
import { useSidebarContext } from './sidebar.context';

export interface SidebarHeaderProps extends ElementProps<'div'> {
  withDivider?: boolean;
}

const SidebarHeader = forwardRef<ElementRef<'div'>, SidebarHeaderProps>(
  ({ children, withDivider = true, className, ...props }, ref) => {
    const { open, isExpanded } = useSidebarContext();

    return (
      <div
        data-expanded={withAttr(isExpanded)}
        data-opened={withAttr(open)}
        aria-expanded={withAttr(isExpanded)}
        className={cn(
          'min-h-18 relative flex w-full flex-col items-center justify-between px-3 transition-all duration-300',
          className
        )}
        {...props}
        ref={ref}
      >
        <div
          className={cn('flex h-full w-full flex-1 flex-nowrap items-center justify-center gap-3 py-4', {
            'border-border-secondary border-b': withDivider,
          })}
        >
          {children}
        </div>
      </div>
    );
  }
);

const SidebarToggle = forwardRef<ElementRef<typeof Button>, ButtonProps>(({ children, onClick, ...props }, ref) => {
  const { open, toggleOpen } = useSidebarContext();

  return (
    <Button
      onClick={composeEventHandlers(onClick, toggleOpen)}
      className="inset-y-center -right-4"
      radius="full"
      variant="outline"
      color="gray"
      size="xs"
      iconOnly
      type="button"
      role="button"
      aria-label="Toggle Sidebar"
      aria-expanded={withAttr(open)}
      {...props}
      ref={ref}
    >
      {children ? (
        children
      ) : (
        <ChevronLeftIcon
          aria-expanded={withAttr(open)}
          className="h-4 w-4 transition-transform duration-300 aria-expanded:rotate-180"
        />
      )}
    </Button>
  );
});

const SidebarLogo = forwardRef<ElementRef<'div'>, ElementProps<'div'>>(({ children, className, ...props }, ref) => {
  return (
    <div className={className} {...props} ref={ref}>
      {children}
    </div>
  );
});

const SidebarHeadTitle = forwardRef<ElementRef<'div'>, ElementProps<'div'>>(
  ({ children, className, ...props }, ref) => {
    const { isExpanded } = useSidebarContext();

    if (!isExpanded) return null;
    return (
      <div
        className={cn(
          'w-0 overflow-hidden whitespace-nowrap opacity-0 duration-700 group-aria-expanded:w-full group-aria-expanded:opacity-100',
          className
        )}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

export const SidebarHead = Object.assign(SidebarHeader, {
  Toggle: SidebarToggle,
  Title: SidebarHeadTitle,
  Logo: SidebarLogo,
});
