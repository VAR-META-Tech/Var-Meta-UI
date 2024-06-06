import React, { type ReactNode } from 'react';

import { usePaginationContext } from './pagination-context';
import { PaginationControl, type PaginationControlProps } from './pagination-control';
import { PaginationDot } from './pagination-dot';

export interface PaginationItemsProps {
  /** Dots icon component */
  dotsIcon?: ReactNode;
  variant?: PaginationControlProps['variant'];
}

export function PaginationItems({ dotsIcon, variant }: PaginationItemsProps) {
  const ctx = usePaginationContext();

  const items = ctx.range.map((page, index) => {
    if (page === 'dots') {
      return (
        <PaginationDot
          disabled={ctx.disabled}
          variant={variant === 'button' ? 'filled' : 'default'}
          dotIcon={dotsIcon}
          key={index}
        />
      );
    }

    return (
      <PaginationControl
        key={index}
        active={page === ctx.active}
        aria-current={page === ctx.active ? 'page' : undefined}
        onClick={() => ctx.onChange(page)}
        disabled={ctx.disabled}
        variant={variant}
        {...ctx.getItemProps?.(page)}
      >
        {page}
      </PaginationControl>
    );
  });

  return <>{items}</>;
}

PaginationItems.displayName = 'PaginationItems';
