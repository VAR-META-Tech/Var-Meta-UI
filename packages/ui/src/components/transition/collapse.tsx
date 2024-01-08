import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { type ElementRef, forwardRef } from 'react';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';

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
