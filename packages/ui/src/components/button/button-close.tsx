import { forwardRef, type ElementRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../utils/cn';
import { CloseIcon } from '../icons';

const buttonCloseVariants = cva(
  [
    'rounded-xs text-foreground aspect-square bg-transparent outline-none transition-colors',
    'flex items-center justify-center',
    'hover:bg-background-secondary hover:text-foreground-secondary hover:outline-none',
    'focus:bg-background-secondary focus:text-foreground focus:shadow-gray-base focus:outline-none',
  ],
  {
    variants: {
      size: {
        sm: 'h-9 w-9 ',
        md: 'h-10 w-10',
        lg: 'h-11 w-11',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface ButtonCloseProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, ''>,
    VariantProps<typeof buttonCloseVariants> {}

export const ButtonClose = forwardRef<ElementRef<'button'>, ButtonCloseProps>((props, ref) => {
  const { className, size, ...etc } = props;

  return (
    <button className={cn(buttonCloseVariants({ size, className }))} {...etc} ref={ref}>
      <CloseIcon
        className={cn('w-5 h-5', {
          'w-6 h-6': size === 'lg',
        })}
      />
      <span className="sr-only">Close</span>
    </button>
  );
});
