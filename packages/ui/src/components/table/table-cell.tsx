import React from 'react';
import { tv } from 'tailwind-variants';

import { cn } from '../../utils/cn';
import { useTableContext } from './table-context';

const tdVariant = tv({
  base: 'align-middle font-normal [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
  variants: {
    size: {
      sm: 'p-2 text-sm',
      md: 'p-3 min-h-11 text-sm',
      lg: 'p-3.5 text-sm',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => {
    const { size } = useTableContext();

    return <td ref={ref} className={cn(tdVariant({ size, className }))} {...props} />;
  }
);
TableCell.displayName = 'TableCell';

export { TableCell };
