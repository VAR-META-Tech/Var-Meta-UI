import { cn } from '@swiss-digital-assets-institute/utils';
import React, { type ElementRef } from 'react';

import { type ElementProps } from '../../types';
import { useTableContext } from './table-context';

interface Props extends ElementProps<'thead'> {}

const TableHeader = React.forwardRef<ElementRef<'thead'>, Props>(({ className, ...props }, ref) => {
  const { variant } = useTableContext();

  return (
    <thead
      ref={ref}
      className={cn(
        '[&_tr]:border-b border-gray-200',
        {
          'bg-gray-50': variant === 'default',
        },
        className
      )}
      {...props}
    />
  );
});
TableHeader.displayName = 'TableHeader';

export { TableHeader };
