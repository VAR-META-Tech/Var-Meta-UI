import React from 'react';

import { cn } from '../../utils/cn';

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        'border-b border-border-secondary transition-colors hover:bg-background-secondary data-[state=selected]:bg-background-secondary',
        className
      )}
      {...props}
    />
  )
);
TableRow.displayName = 'TableRow';

export { TableRow };
