import { cva } from 'class-variance-authority';
import React from 'react';

import { cn } from '../../utils/cn';
import { useTableContext } from './table-context';

const thVariant = cva(
  ' px-6 py-3 text-left align-middle font-medium text-gray-600 text-xs [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
  {
    variants: {
      size: {
        sm: 'h-10',
        md: 'h-11',
        lg: 'h-14 text-sm',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => {
    const { size } = useTableContext();

    return <th ref={ref} className={cn(thVariant({ size, className }))} {...props} />;
  }
);
TableHead.displayName = 'TableHead';

export { TableHead };
