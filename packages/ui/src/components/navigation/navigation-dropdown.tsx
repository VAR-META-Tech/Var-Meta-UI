import { cn } from '@swiss-digital-assets-institute/utils';
import { type VariantProps } from 'class-variance-authority';
import { type ElementRef, forwardRef, type ReactNode } from 'react';

import { type ElementProps, type VisibleState } from '../../types';
import { ChevronDownIcon } from '../icons';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../transition';
import { NavigationItem, type navigationItemVariants } from './navigation-item';

export interface NavigationDropdownProps
  extends ElementProps<'li'>,
    VariantProps<typeof navigationItemVariants>,
    VisibleState {
  asChild?: boolean;
  label?: ReactNode;
  icon?: ReactNode;
}

const NavigationDropdown = forwardRef<ElementRef<'li'>, NavigationDropdownProps>(
  ({ children, className, open, defaultOpen, onOpenChange, ...props }, ref) => {
    return (
      <Collapsible open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
        <CollapsibleTrigger asChild>
          <NavigationItem className={cn('group', className)} ref={ref} {...props}>
            <ChevronDownIcon className="transition-all group-aria-expanded:rotate-180" />
          </NavigationItem>
        </CollapsibleTrigger>
        <CollapsibleContent className="[&>*]:pl-12 mt-2">{children}</CollapsibleContent>
      </Collapsible>
    );
  }
);

NavigationDropdown.displayName = 'NavigationDropdown';

export { NavigationDropdown };
