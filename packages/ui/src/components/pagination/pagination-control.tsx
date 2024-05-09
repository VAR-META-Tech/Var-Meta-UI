import { forwardRef, type ElementRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { usePaginationContext } from './pagination-context';

const paginationControlVariants = cva(
  [
    'flex items-center justify-center',
    'h-[var(--pagination-control-size)] min-w-[var(--pagination-control-size)]',
    'focus:shadow-gray hover:bg-background-tertiary outline-none focus:z-[1] ',
    'disabled:text-disabled disabled:cursor-not-allowed disabled:opacity-50',
    'text-foreground gap-1.5 text-center text-sm font-medium',
  ],
  {
    variants: {
      variant: {
        square: 'rounded-md bg-transparent',
        circle: 'rounded-full bg-transparent',
        button: 'bg-background',
      },
      state: {
        default: '',
        active: 'bg-background-tertiary',
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
        { 'border border-border': withBorder },
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
