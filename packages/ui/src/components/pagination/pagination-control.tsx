import { cn } from '@hashgraph/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { type ElementRef, forwardRef } from 'react';

import { type ElementProps } from '../../types';
import { usePaginationContext } from './pagination-context';

const paginationControlVariants = cva(
  [
    'flex items-center justify-center',
    'min-w-[var(--pagination-control-size)] h-[var(--pagination-control-size)]',
    'outline-none focus:shadow-gray focus:z-[1] hover:bg-gray-50',
    'disabled:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed',
    'text-gray-600 text-center text-sm font-medium gap-1.5',
  ],
  {
    variants: {
      variant: {
        square: 'rounded-md bg-transparent',
        circle: 'rounded-full bg-transparent',
        button: 'bg-base-white',
      },
      state: {
        default: '',
        active: 'bg-gray-50',
      },
      rounded: {
        default: '',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'square',
      state: 'default',
      rounded: 'default',
    },
  }
);

export interface PaginationControlProps extends ElementProps<'button'>, VariantProps<typeof paginationControlVariants> {
  /** Determines whether control should have active styles */
  active?: boolean;

  /** Determines whether control should have padding, false by default */
  withPadding?: boolean;

  /** Determines whether control should have border, false by default */
  withBorder?: boolean;
}

const PaginationControl = forwardRef<ElementRef<'button'>, PaginationControlProps>((props, ref) => {
  const { variant, active, className, withPadding, rounded, withBorder, disabled, ...etc } = props;

  const ctx = usePaginationContext();
  const _disabled = disabled || ctx.disabled;

  return (
    <button
      className={cn(
        { 'px-2.5': withPadding },
        { 'border border-gray-300': withBorder },
        paginationControlVariants({
          variant,
          rounded,
          state: active ? 'active' : 'default',
          className,
        })
      )}
      ref={ref}
      disabled={_disabled}
      {...etc}
    />
  );
});

PaginationControl.displayName = 'PaginationControl';
export { PaginationControl };
