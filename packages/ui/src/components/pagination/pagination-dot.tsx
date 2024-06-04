import { forwardRef, type ElementRef, type ReactNode } from 'react';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';

export type PaginationDotStylesNames = 'control';

export interface PaginationDotProps extends ElementProps<'div'> {
  dotIcon?: ReactNode;
  variant?: 'filled' | 'default';
  disabled?: boolean;
}

export const PaginationDot = forwardRef<ElementRef<'div'>, PaginationDotProps>((props, ref) => {
  const { className, disabled, dotIcon = '...', variant, ...etc } = props;

  return (
    <div
      className={cn(
        'h-[var(--pagination-control-size)] min-w-[var(--pagination-control-size)]',
        'pointer-events-none flex items-center justify-center',
        {
          'bg-background': variant === 'filled',
          'text-disabled cursor-not-allowed opacity-50': disabled,
        },
        className
      )}
      ref={ref}
      {...etc}
    >
      {dotIcon}
    </div>
  );
});

PaginationDot.displayName = 'PaginationDot';
