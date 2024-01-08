import { cva, type VariantProps } from 'class-variance-authority';
import { type ElementRef, forwardRef } from 'react';

import { cn } from '../../utils/cn';
import { CloseIcon } from '../icons';

const buttonCloseVariants = cva(
  [
    'rounded-xs text-gray-400 aspect-square bg-transparent outline-none transition-colors',
    'flex items-center justify-center',
    'hover:bg-gray-50 hover:text-gray-900 hover:outline-none',
    'focus:bg-gray-50 focus:text-gray-400 focus:outline-none focus:shadow-gray',
  ],
  {
    variants: {
      size: {
        sm: 'w-9 h-9 ',
        md: 'w-10 h-10',
        lg: 'w-11 h-11',
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
