import React, { type ElementRef } from 'react';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { useTableContext } from './table-context';

const TableHeader = React.forwardRef<ElementRef<'thead'>, ElementProps<'thead'>>(({ className, ...props }, ref) => {
  const { variant } = useTableContext();

  return (
    <thead
      ref={ref}
      className={cn(
        'border-border-secondary [&_tr]:border-b',
        {
          'bg-background-tertiary': variant === 'default',
        },
        className
      )}
      {...props}
    />
  );
});
TableHeader.displayName = 'TableHeader';

export { TableHeader };
