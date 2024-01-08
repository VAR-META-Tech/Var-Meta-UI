import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '../../utils/cn';

const dividerVariants = cva(
  [
    'flex whitespace-nowrap shrink-0 justify-center text-center',
    'before:border-gray-200 after:border-gray-200',
    'after:content-[""] before:content-[""] before:self-center after:self-center',
  ],
  {
    variants: {
      orientation: {
        horizontal: 'before:border-t after:border-t w-full',
        vertical: 'before:border-l after:border-l before:h-full after:h-full self-stretch flex-col h-full',
      },
      align: {
        left: '',
        right: '',
        center: 'justify-center text-center',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
      align: 'center',
    },
    compoundVariants: [
      {
        orientation: 'horizontal',
        align: 'left',
        className: 'before:w-[10%] after:w-[90%]',
      },
      {
        orientation: 'horizontal',
        align: 'right',
        className: 'after:w-[10%] before:w-[90%]',
      },
      {
        orientation: 'horizontal',
        align: 'center',
        className: 'before:w-full after:w-full',
      },
    ],
  }
);

const dividerWithoutChildVariants = cva('border-gray-200', {
  variants: {
    orientation: {
      horizontal: 'border-t w-full',
      vertical: 'border-l h-full',
    },
  },
});

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof dividerVariants> {}

const Divider = React.forwardRef<React.ElementRef<'div'>, DividerProps>(
  ({ className, align = 'center', orientation = 'horizontal', children, ...props }, ref) => {
    if (!children)
      return <hr className={cn(dividerWithoutChildVariants({ orientation }), className)} ref={ref as any} {...props} />;
    return (
      <div className={dividerVariants({ align, orientation, className })} ref={ref} {...props}>
        <span className={cn('inline-block', orientation === 'horizontal' ? 'px-2' : 'py-2')}>{children}</span>
      </div>
    );
  }
);
Divider.displayName = 'Divider';

export { Divider };
