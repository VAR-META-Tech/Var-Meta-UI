import { forwardRef, type ElementRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { usePaginationContext } from './pagination-context';

const paginationControlVariants = tv({
  base: [
    'flex items-center justify-center',
    'h-[var(--pagination-control-size)] w-[var(--pagination-control-size)]',
    'focus:shadow-gray transition-colors hover:bg-background-disabled outline-none focus:z-[1] ',
    'disabled:text-disabled disabled:cursor-not-allowed disabled:opacity-50',
    'text-foreground gap-1.5 text-center text-sm',
  ],
  variants: {
    variant: {
      square: 'rounded-sm bg-transparent',
      circle: 'rounded-full bg-transparent',
      button: 'bg-background',
    },
    state: {
      default: '',
      active: 'bg-background-disabled',
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
});

export interface PaginationControlProps extends ElementProps<'button'>, VariantProps<typeof paginationControlVariants> {
  /** Determines whether control should have active styles */
  active?: boolean;

  /** Determines whether control should have border, false by default */
  withBorder?: boolean;
}

const PaginationControl = forwardRef<ElementRef<'button'>, PaginationControlProps>((props, ref) => {
  const { variant, active, className, rounded, withBorder = true, disabled, ...etc } = props;

  const ctx = usePaginationContext();
  const _disabled = disabled || ctx.disabled;

  return (
    <button
      className={cn(
        { 'border-border-secondary border': withBorder },
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
