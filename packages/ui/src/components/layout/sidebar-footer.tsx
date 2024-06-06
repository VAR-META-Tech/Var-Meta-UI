import { forwardRef, type ElementRef } from 'react';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { withAttr } from '../../utils/withAttr';
import { useSidebarContext } from './sidebar.context';

export interface SidebarFooterProps extends ElementProps<'div'> {
  withDivider?: boolean;
}

const SidebarFooter = forwardRef<ElementRef<'div'>, SidebarFooterProps>(
  ({ withDivider = true, children, className, ...props }, ref) => {
    const { isExpanded } = useSidebarContext();

    return (
      <div
        aria-expanded={withAttr(isExpanded)}
        data-expanded={withAttr(isExpanded)}
        role="sidebar-footer"
        className={cn('sticky bottom-0 mt-auto flex w-full flex-col px-2', className)}
        {...props}
        ref={ref}
      >
        <div
          className={cn('flex h-full w-full flex-1 flex-nowrap py-6', {
            'border-border-secondary border-t': withDivider,
          })}
        >
          {children}
        </div>
      </div>
    );
  }
);

export { SidebarFooter };
