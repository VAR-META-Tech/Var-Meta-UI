import React, { type ElementRef } from 'react';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { useTableContext } from './table-context';

interface Props extends ElementProps<'thead'> {}

const TableHeader = React.forwardRef<ElementRef<'thead'>, Props>(({ className, ...props }, ref) => {
  const { variant } = useTableContext();

  return (
    <thead
      ref={ref}
      className={cn(
        '[&_tr]:border-b border-border-secondary',
        {
          'bg-background-secondary': variant === 'default',
        },
        className
      )}
      {...props}
    />
  );
});
TableHeader.displayName = 'TableHeader';

export { TableHeader };
