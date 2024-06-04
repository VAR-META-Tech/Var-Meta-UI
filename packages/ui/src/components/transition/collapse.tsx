import { forwardRef, type ElementRef } from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

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
        'data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden transition-all',
        className
      )}
      {...props}
      ref={ref}
    />
  );
});

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
