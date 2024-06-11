import React from 'react';

import { cn } from '../../utils/cn';

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        'border-border-secondary hover:bg-background-light data-[state=selected]:bg-background-light border-b transition-colors',
        className
      )}
      {...props}
    />
  )
);
TableRow.displayName = 'TableRow';

export { TableRow };
