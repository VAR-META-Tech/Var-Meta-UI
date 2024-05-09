import React, { useMemo } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../utils/cn';
import { VerifiedIcon } from '../icons';

const dotVariants = cva('border-background block aspect-square rounded-full border', {
  variants: {
    variant: {
      offline: 'bg-gray-300',
      online: 'bg-success-500',
    },
    size: {
      xs: 'h-1.5 w-1.5',
      sm: 'h-2 w-2',
      md: 'h-2.5 w-2.5',
      lg: 'h-3 w-3',
      xl: 'h-3.5 w-3.5',
      '2xl': 'h-4 w-4',
      '3xl': 'w-4.5 h-4.5',
      '4xl': 'h-5 w-5',
    },
  },
  defaultVariants: {
    size: 'xs',
    variant: 'online',
  },
});

const verifiedVariants = cva('', {
  variants: {
    size: {
      xs: 'h-2.5 w-2.5',
      sm: 'h-3 w-3',
      md: 'h-3.5 w-3.5',
      lg: 'h-4 w-4',
      xl: 'w-4.5 h-4.5',
      '2xl': 'h-5 w-5',
      '3xl': 'h-6 w-6',
      '4xl': 'h-8 w-8',
    },
  },
  defaultVariants: {
    size: 'xs',
  },
});

const iconVariants = cva(
  'bg-background-quaternary border-background flex aspect-square items-center justify-center rounded-full border [&>*]:scale-90',
  {
    variants: {
      size: {
        xs: 'h-2 w-2',
        sm: 'h-3 w-3',
        md: 'h-3.5 w-3.5',
        lg: 'h-4 w-4',
        xl: 'w-4.5 h-4.5',
        '2xl': 'h-5 w-5',
        '3xl': 'w-5.5 h-5.5',
        '4xl': 'h-6 w-6',
      },
    },
    defaultVariants: {
      size: 'xs',
    },
  }
);

export interface IndicatorProps extends React.ComponentPropsWithoutRef<'div'>, VariantProps<typeof verifiedVariants> {
  type?: 'online' | 'offline' | 'icon' | 'verified';
}

const Indicator = React.forwardRef<React.ElementRef<'div'>, IndicatorProps>(
  ({ className, children, type = 'online', size = 'xs', ...props }, ref) => {
    const renderIndicator = useMemo(() => {
      switch (type) {
        case 'online':
          return <span className={cn(dotVariants({ size, variant: 'online' }))} />;
        case 'offline':
          return <span className={cn(dotVariants({ size, variant: 'offline' }))} />;
        case 'verified':
          return <VerifiedIcon className={cn(verifiedVariants({ size }))} />;

        default:
          return <div className={iconVariants({ size })}>{children}</div>;
      }
    }, [type, size, children]);

    return (
      <div ref={ref} className={cn('w-fit', className)} {...props}>
        {renderIndicator}
      </div>
    );
  }
);

Indicator.displayName = 'Indicator';

export { Indicator };
