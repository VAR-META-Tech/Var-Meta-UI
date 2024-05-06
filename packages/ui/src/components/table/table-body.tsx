import React from 'react';

import { cn } from '../../utils/cn';
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
            '[&_tr:nth-of-type(odd)]:bg-background-secondary': variant === 'striped',
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
