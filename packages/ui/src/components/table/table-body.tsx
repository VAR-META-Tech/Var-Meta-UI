import { cn } from '@hashgraph/utils';
import React from 'react';

import { useTableContext } from './table-context';

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => {
    const { variant } = useTableContext();

    return (
      <tbody
        ref={ref}
        className={cn(
          '[&_tr:last-child]:border-0',
          {
            '[&_tr:nth-of-type(odd)]:bg-gray-50': variant === 'striped',
          },
          className
        )}
        {...props}
      />
    );
  }
);
TableBody.displayName = 'TableBody';

export { TableBody };
