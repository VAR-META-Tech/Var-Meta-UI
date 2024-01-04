import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { cn } from '@swiss-digital-assets-institute/utils';
import { type ElementRef, forwardRef } from 'react';

import { type ElementProps } from '../../types';

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = forwardRef<
  ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
  ElementProps<typeof CollapsiblePrimitive.CollapsibleContent>
>(({ className, ...props }, ref) => {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      className={cn(
        'overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down',
        className
      )}
      {...props}
      ref={ref}
    />
  );
});

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
