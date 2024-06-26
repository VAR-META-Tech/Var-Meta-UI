import React, {
  Children,
  cloneElement,
  isValidElement,
  useMemo,
  type ElementRef,
  type ReactElement,
  type ReactNode,
} from 'react';
import { Primitive } from '@radix-ui/react-primitive';
import { tv, type VariantProps } from 'tailwind-variants';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { SlashIcon } from '../icons';

const breadcrumbActiveItemVariant = tv({
  base: 'flex h-full items-center rounded-sm px-2 py-1 text-sm font-medium transition-colors',
  variants: {
    variant: {
      text: 'text-button p-0',
      'btn-gray': 'text-foreground-secondary bg-gray-50',
      'btn-brand': 'bg-brand-50 text-button',
    },
    disabled: {
      true: 'pointer-events-none',
      false: '',
    },
    iconOnly: {
      true: 'aspect-square p-1',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'text',
    disabled: false,
  },
});

const breadcrumbItemVariant = tv({
  base: 'flex h-full items-center rounded-sm px-2 py-1 text-sm font-medium transition-colors',
  variants: {
    variant: {
      text: 'hover:text-button focus:text-button p-0 text-gray-500',
      'btn-gray':
        'hover:text-foreground-secondary focus:text-foreground-secondary text-gray-500 hover:bg-gray-50 focus:bg-gray-50',
      'btn-brand': 'text-foreground-secondary hover:bg-brand-50 hover:text-button focus:bg-brand-50 focus:text-button',
    },
    disabled: {
      true: 'pointer-events-none',
      false: '',
    },
    iconOnly: {
      true: 'aspect-square p-1',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'text',
    disabled: false,
    iconOnly: false,
  },
});

export interface BreadcrumbItemProps extends ElementProps<'li'>, VariantProps<typeof breadcrumbItemVariant> {
  separator?: ReactNode;
  active?: boolean;
  isLast?: boolean;
  hideSeparator?: boolean;
  asChild?: boolean;
}

const BreadcrumbItem = React.forwardRef<ElementRef<'li'>, BreadcrumbItemProps>(
  (
    {
      active,
      isLast,
      asChild,
      hideSeparator,
      className,
      separator = <SlashIcon />,
      iconOnly,
      variant,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <>
        <Primitive.li
          asChild={asChild}
          ref={ref}
          className={
            active
              ? breadcrumbActiveItemVariant({ variant, iconOnly, disabled, className })
              : breadcrumbItemVariant({ variant, disabled, iconOnly, className })
          }
          {...props}
        />
        {!isLast && !hideSeparator ? <li className="text-gray-300">{separator}</li> : null}
      </>
    );
  }
);
BreadcrumbItem.displayName = 'BreadcrumbItem';

export interface BreadcrumbsProps extends ElementProps<'ol'> {
  separator?: ReactNode;
  withLine?: boolean;
}

const Breadcrumbs = React.forwardRef<ElementRef<'ol'>, BreadcrumbsProps>(
  ({ className, children: childrenProp, withLine, separator, ...props }, ref) => {
    const content = useMemo(() => {
      const children = Children.map(childrenProp, (item) => {
        if (!isValidElement(item)) return null;
        return item;
      }) as unknown as ReactElement[];

      const childCount = Children.count(childrenProp);

      let items = children?.map((child, i) => {
        const isLast = i === childCount - 1;
        const itemKey = child?.key || i;

        return cloneElement(child, {
          ...child.props,
          isLast,
          separator,
          active: isLast || child?.props?.active,
          key: itemKey,
        });
      });

      if (!items) return null;

      return items;
    }, [childrenProp, separator]);

    return (
      <ol
        ref={ref}
        className={cn(
          'flex list-none flex-wrap items-center gap-1.5 md:gap-2',
          { 'border-border-secondary border-y py-2': withLine },
          className
        )}
        {...props}
      >
        {content}
      </ol>
    );
  }
);
Breadcrumbs.displayName = 'Breadcrumbs';

export { BreadcrumbItem, Breadcrumbs };
