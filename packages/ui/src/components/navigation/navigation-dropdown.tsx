import { Children, cloneElement, forwardRef, isValidElement, useEffect, type ElementRef, type ReactNode } from 'react';
import { DropdownMenuGroup, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { tv, type VariantProps } from 'tailwind-variants';

import { type ElementProps, type VisibleState } from '../../types';
import { cn } from '../../utils/cn';
import { withAttr } from '../../utils/withAttr';
import { Dropdown } from '../dropdown-menu';
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
  type?: 'default' | 'floating';
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
    type,
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

  useEffect(() => {
    setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapsed]);

  if (type === 'floating') {
    return (
      <Dropdown
        side="right"
        align="start"
        sideOffset={24}
        onOpenChange={setOpen}
        open={open}
        trigger={
          <NavigationItem
            role="nav-item"
            data-expanded={withAttr(expanded)}
            aria-expanded={withAttr(expanded)}
            className={cn('group/nav-item', className)}
            ref={ref}
            variant={variantProp || variant}
            {...etc}
          />
        }
      >
        <DropdownMenuGroup>
          {Children.map(children, (item, i) => {
            if (isValidElement(item)) {
              const isItemOnChild = !!item?.props?.children?.props?.value;
              return (
                <DropdownMenuItem
                  onClick={() => setOpen(false)}
                  className="border-none bg-transparent shadow-none outline-none"
                  key={i}
                >
                  {cloneElement(item, {
                    ...item.props,
                    children: isItemOnChild
                      ? cloneElement(item.props.children, {
                          ...item.props.children.props,
                          collapsed: false,
                          withActiveCursor: false,
                          forceCollapse: false,
                        })
                      : item.props.children,
                  })}
                </DropdownMenuItem>
              );
            }
            return item;
          })}
        </DropdownMenuGroup>
      </Dropdown>
    );
  }

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
            <ChevronRightIcon className="h-5 w-5 min-w-5 transition-transform duration-300 group-aria-expanded/nav-item:rotate-90" />
          )}
        </NavigationItem>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2">
        {Children.map(children, (item, i) => {
          if (isValidElement(item)) {
            const isItemOnChild = !!item?.props?.children?.props?.value;
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
                  children: isItemOnChild
                    ? cloneElement(item.props.children, {
                        ...item.props.children.props,
                        withActiveCursor: false,
                      })
                    : item.props.children,
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
