import { Children, cloneElement, forwardRef, isValidElement, type ElementRef, type ReactNode } from 'react';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { type VariantProps } from 'class-variance-authority';
import { tv } from 'tailwind-variants';

import { type ElementProps, type VisibleState } from '../../types';
import { cn } from '../../utils/cn';
import { withAttr } from '../../utils/withAttr';
import { ChevronRightIcon } from '../icons';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../transition';
import { useNavigationContext } from './navigation-context';
import { NavigationItem, type navigationItemVariants } from './navigation-item';

const navigationDropdownItemVariants = tv({
  variants: {
    variant: {
      default: 'border-border-secondary ml-6 border-l pl-4',
      brand: 'border-border-secondary ml-6 border-l pl-4',
      dark: 'border-border-secondary ml-6 border-l pl-4',
    },
    active: {
      true: 'border-brand-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface NavigationDropdownProps
  extends ElementProps<'div'>,
    VariantProps<typeof navigationItemVariants>,
    VisibleState {
  asChild?: boolean;
  label?: ReactNode;
  icon?: ReactNode;
  collapsedIcon?: ReactNode;
  collapsed?: boolean;
  activeValue?: string;
}

const NavigationDropdown = forwardRef<ElementRef<'div'>, NavigationDropdownProps>((props, ref) => {
  const {
    children,
    className,
    open: openProp,
    defaultOpen,
    onOpenChange,
    variant: variantProp,
    collapsed: collapsedProp,
    collapsedIcon,
    activeValue,
    ...etc
  } = props;

  const [open, setOpen] = useControllableState<boolean>({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });

  const { variant, collapsed: collapsedContext } = useNavigationContext();

  const collapsed = collapsedProp || collapsedContext;

  const expanded = open && !collapsed;

  return (
    <Collapsible open={expanded} defaultOpen={defaultOpen} onOpenChange={setOpen}>
      <CollapsibleTrigger asChild>
        <NavigationItem
          role="nav-item"
          data-expanded={withAttr(expanded)}
          aria-expanded={withAttr(expanded)}
          className={cn('group/nav-item', className)}
          ref={ref}
          variant={variantProp || variant}
          {...etc}
        >
          {collapsedIcon ?? (
            <ChevronRightIcon className="h-5 w-5 transition-transform duration-300 group-aria-expanded/nav-item:rotate-90" />
          )}
        </NavigationItem>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2">
        {Children.map(children, (item, i) => {
          if (isValidElement(item)) {
            const value = item?.props?.value ?? item?.props?.children?.props?.value;
            return (
              <div
                key={i}
                className={navigationDropdownItemVariants({
                  active: item?.props?.active || activeValue === value,
                  variant: variantProp || variant,
                })}
              >
                {cloneElement(item, {
                  ...item.props,
                  withActiveCursor: false,
                })}
              </div>
            );
          }
          return item;
        })}
      </CollapsibleContent>
    </Collapsible>
  );
});

NavigationDropdown.displayName = 'NavigationDropdown';

export { NavigationDropdown };
