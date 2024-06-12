import { forwardRef, useMemo, type ElementRef } from 'react';

import { type ElementProps } from '../../types';
import { useSidebarContext } from './sidebar.context';

const MainContent = forwardRef<ElementRef<'main'>, ElementProps<'main'>>(({ children, className, ...props }, ref) => {
  const { isExpanded, sidebarWidth, isMobile } = useSidebarContext();

  const marginLeft = useMemo(() => {
    if (isMobile) return undefined;
    return isExpanded ? sidebarWidth : 80;
  }, [isExpanded, isMobile, sidebarWidth]);

  return (
    <main style={{ marginLeft }} className={className} {...props} ref={ref}>
      {children}
    </main>
  );
});

export { MainContent };
