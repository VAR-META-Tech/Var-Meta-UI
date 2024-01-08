import { type ElementRef, forwardRef, type ReactNode } from 'react';

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
        'min-w-[var(--pagination-control-size)] h-[var(--pagination-control-size)]',
        'flex items-center justify-center pointer-events-none',
        {
          'bg-base-white ': variant === 'filled',
          'text-gray-400 opacity-50 cursor-not-allowed': disabled,
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
