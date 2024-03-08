import React, { type ReactNode } from 'react';

import { usePaginationContext } from './pagination-context';
import { PaginationControl, type PaginationControlProps } from './pagination-control';
import { PaginationDot } from './pagination-dot';

export interface PaginationItemsProps {
  /** Dots icon component */
  dotsIcon?: ReactNode;
  variant?: PaginationControlProps['variant'];
  itemStyle?: 'default' | 'minimal';
}

export function PaginationItems({ dotsIcon, itemStyle = 'default', variant }: PaginationItemsProps) {
  const ctx = usePaginationContext();

  if (itemStyle === 'minimal') {
    return (
      <div className="text-foreground-secondary text-sm font-medium">
        Page {ctx.active} of {ctx.total ?? 0}
      </div>
    );
  }

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
