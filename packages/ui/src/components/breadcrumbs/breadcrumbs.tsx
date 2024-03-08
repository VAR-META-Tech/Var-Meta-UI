import { Primitive } from '@radix-ui/react-primitive';
import { cva, type VariantProps } from 'class-variance-authority';
import React, {
  Children,
  cloneElement,
  type ElementRef,
  isValidElement,
  type ReactElement,
  type ReactNode,
  useMemo,
} from 'react';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { SlashIcon } from '../icons';

const breadcrumbActiveItemVariant = cva(
  'px-2 py-1 rounded-sm h-full flex items-center text-sm font-semibold transition-colors',
  {
    variants: {
      variant: {
        text: 'px-0 py-0 text-brand-700 ',
        'btn-gray': 'bg-gray-50 text-foreground-secondary',
        'btn-brand': 'bg-brand-50 text-brand-700',
      },
      disabled: {
        true: 'pointer-events-none',
        false: '',
      },
      iconOnly: {
        true: 'aspect-square px-1 py-1',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'text',
      disabled: false,
    },
  }
);

const breadcrumbItemVariant = cva(
  'px-2 py-1 rounded-sm h-full flex items-center text-sm font-medium transition-colors',
  {
    variants: {
      variant: {
        text: 'px-0 py-0 hover:text-brand-700 focus:text-brand-700 text-gray-500',
        'btn-gray':
          'text-gray-500 hover:bg-gray-50 hover:text-foreground-secondary focus:bg-gray-50 focus:text-foreground-secondary',
        'btn-brand':
          'text-foreground-secondary hover:bg-brand-50 hover:text-brand-700 focus:bg-brand-50 focus:text-brand-700',
      },
      disabled: {
        true: 'pointer-events-none',
        false: '',
      },
      iconOnly: {
        true: 'aspect-square px-1 py-1',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'text',
      disabled: false,
      iconOnly: false,
    },
  }
);

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
          className={cn(
            active
              ? breadcrumbActiveItemVariant({ variant, iconOnly, disabled, className })
              : breadcrumbItemVariant({ variant, disabled, iconOnly, className })
          )}
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
          'flex items-center gap-1.5 md:gap-2 flex-wrap list-none',
          { 'border-y border-gray-200 py-2': withLine },
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
