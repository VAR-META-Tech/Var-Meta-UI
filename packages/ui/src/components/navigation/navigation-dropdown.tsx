import { forwardRef, type ElementRef, type ReactNode } from 'react';
import { type VariantProps } from 'class-variance-authority';

import { type ElementProps, type VisibleState } from '../../types';
import { cn } from '../../utils/cn';
import { ChevronDownIcon } from '../icons';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../transition';
import { useNavigationContext } from './navigation-context';
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
  ({ children, className, open, defaultOpen, onOpenChange, variant: variantProp, ...props }, ref) => {
    const { variant } = useNavigationContext();

    return (
      <Collapsible open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
        <CollapsibleTrigger asChild>
          <NavigationItem className={cn('group', className)} ref={ref} variant={variantProp || variant} {...props}>
            <ChevronDownIcon className="transition-all group-aria-expanded:rotate-180" />
          </NavigationItem>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 [&>*]:pl-12">{children}</CollapsibleContent>
      </Collapsible>
    );
  }
);

NavigationDropdown.displayName = 'NavigationDropdown';

export { NavigationDropdown };
