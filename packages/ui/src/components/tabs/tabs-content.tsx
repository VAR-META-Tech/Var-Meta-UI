import { forwardRef, type ElementRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';

export interface TabsContentProps extends ElementProps<typeof TabsPrimitive.Content> {}

export const TabsContent = forwardRef<ElementRef<typeof TabsPrimitive.Content>, TabsContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <TabsPrimitive.Content
        ref={ref}
        className={cn(
          'ring-offset-background focus-visible:ring-ring mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          className
        )}
        {...props}
      />
    );
  }
);
