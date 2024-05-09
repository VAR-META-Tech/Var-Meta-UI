import React from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '../../utils/cn';
import { useTableContext } from './table-context';

const tdVariant = cva(
  'px-6 py-4 align-middle text-sm font-normal [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
  {
    variants: {
      size: {
        sm: 'h-16',
        md: 'h-18',
        lg: 'h-20 text-md',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => {
    const { size } = useTableContext();

    return <td ref={ref} className={cn(tdVariant({ size, className }))} {...props} />;
  }
);
TableCell.displayName = 'TableCell';

export { TableCell };
