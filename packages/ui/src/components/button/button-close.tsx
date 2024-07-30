import { forwardRef, type ElementRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '../../utils/cn';
import { CloseIcon } from '../icons';

const buttonCloseVariants = tv({
  base: [
    'rounded-xl text-foreground aspect-square bg-transparent outline-none transition-colors',
    'flex items-center justify-center',
    'hover:bg-background-light hover:text-foreground-secondary hover:outline-none',
    'focus:bg-background-light focus:text-foreground focus:shadow-gray-base focus:outline-none',
  ],
  variants: {
    size: {
      sm: 'h-8 w-8 ',
      md: 'h-9 w-9',
      lg: 'h-10 w-10',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface ButtonCloseProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, ''>,
    VariantProps<typeof buttonCloseVariants> {}

export const ButtonClose = forwardRef<ElementRef<'button'>, ButtonCloseProps>((props, ref) => {
  const { className, size, ...etc } = props;

  return (
    <button type="button" className={cn(buttonCloseVariants({ size, className }))} {...etc} ref={ref}>
      <CloseIcon
        className={cn('h-5 w-5', {
          'h-6 w-6': size === 'lg',
        })}
      />
      <span className="sr-only">Close</span>
    </button>
  );
});
