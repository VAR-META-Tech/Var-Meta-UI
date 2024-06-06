import { forwardRef, type ElementRef } from 'react';

import { type ElementProps } from '../../types';
import { useSidebarContext } from './sidebar.context';

const MainContent = forwardRef<ElementRef<'main'>, ElementProps<'main'>>(({ children, className, ...props }, ref) => {
  const { isExpanded, sidebarWidth } = useSidebarContext();
  return (
    <main style={{ marginLeft: isExpanded ? sidebarWidth : 80 }} className={className} {...props} ref={ref}>
      {children}
    </main>
  );
});

export { MainContent };
