import { cn } from '@swiss-digital-assets-institute/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React, { useMemo } from 'react';

import { VerifiedIcon } from '../icons';

const dotVariants = cva('rounded-full block border-1.5 border-base-white aspect-square', {
  variants: {
    variant: {
      offline: 'bg-gray-300',
      online: 'bg-success-500',
    },
    size: {
      xs: 'w-1.5 h-1.5',
      sm: 'w-2 h-2',
      md: 'w-2.5 h-2.5',
      lg: 'w-3 h-3',
      xl: 'w-3.5 h-3.5',
      '2xl': 'w-4 h-4',
      '3xl': 'w-4.5 h-4.5',
      '4xl': 'w-5 h-5',
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
      xs: 'w-2.5 h-2.5',
      sm: 'w-3 h-3',
      md: 'w-3.5 h-3.5',
      lg: 'w-4 h-4',
      xl: 'w-4.5 h-4.5',
      '2xl': 'w-5 h-5',
      '3xl': 'w-6 h-6',
      '4xl': 'w-8 h-8',
    },
  },
  defaultVariants: {
    size: 'xs',
  },
});

const iconVariants = cva(
  'flex justify-center items-center rounded-full bg-gray-200 border-1.5 border-base-white aspect-square [&>*]:scale-90',
  {
    variants: {
      size: {
        xs: 'w-2 h-2',
        sm: 'w-3 h-3',
        md: 'w-3.5 h-3.5',
        lg: 'w-4 h-4',
        xl: 'w-4.5 h-4.5',
        '2xl': 'w-5 h-5',
        '3xl': 'w-5.5 h-5.5',
        '4xl': 'w-6 h-6',
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
