import { cn } from '@swiss-digital-assets-institute/utils';
import React from 'react';

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        'border-b border-gray-200 transition-colors hover:bg-gray-50 data-[state=selected]:bg-gray-50',
        className
      )}
      {...props}
    />
  )
);
TableRow.displayName = 'TableRow';

export { TableRow };
