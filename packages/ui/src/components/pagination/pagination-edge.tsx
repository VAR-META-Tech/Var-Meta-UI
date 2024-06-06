import React, { forwardRef, type ReactNode } from 'react';

import { createPolymorphicComponent } from '../../utils/create-polymorphic-component';
import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from '../icons';
import { usePaginationContext } from './pagination-context';
import { PaginationControl, type PaginationControlProps } from './pagination-control';

export interface CreateEdgeComponent {
  icon: ReactNode;
  name: string;
  action: 'onNext' | 'onPrevious' | 'onFirst' | 'onLast';
  type: 'next' | 'previous';
}

export interface PaginationEdgeProps extends PaginationControlProps {
  icon?: ReactNode;
}

export function createEdgeComponent({ icon: defaultIcon, name, action, type }: CreateEdgeComponent) {
  const Component = forwardRef<HTMLButtonElement, PaginationEdgeProps>((props, ref) => {
    const { icon = defaultIcon, ...others } = props;
    const ctx = usePaginationContext();
    const disabled = type === 'next' ? ctx.active === ctx.total : ctx.active === 1;

    return (
      <PaginationControl
        withBorder={false}
        disabled={ctx.disabled || disabled}
        ref={ref}
        onClick={ctx[action]}
        {...others}
      >
        {icon}
      </PaginationControl>
    );
  });

  Component.displayName = name;
  return createPolymorphicComponent<'button', PaginationEdgeProps>(Component);
}

export const PaginationNext = createEdgeComponent({
  icon: <ChevronRightIcon className="h-5 w-5" />,
  name: 'PaginationNext',
  action: 'onNext',
  type: 'next',
});

export const PaginationPrevious = createEdgeComponent({
  icon: <ChevronLeftIcon className="h-5 w-5" />,
  name: 'PaginationPrevious',
  action: 'onPrevious',
  type: 'previous',
});

export const PaginationFirst = createEdgeComponent({
  icon: <DoubleArrowRightIcon className="h-5 w-5" />,
  name: 'PaginationFirst',
  action: 'onFirst',
  type: 'previous',
});

export const PaginationLast = createEdgeComponent({
  icon: <DoubleArrowLeftIcon className="h-5 w-5" />,
  name: 'PaginationLast',
  action: 'onLast',
  type: 'next',
});
