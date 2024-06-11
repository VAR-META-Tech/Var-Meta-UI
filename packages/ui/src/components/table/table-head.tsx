import React from 'react';
import { tv } from 'tailwind-variants';

import { cn } from '../../utils/cn';
import { useTableContext } from './table-context';

const thVariant = tv({
  base: 'text-left align-middle font-medium [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',

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

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => {
    const { size } = useTableContext();

    return <th ref={ref} className={cn(thVariant({ size, className }))} {...props} />;
  }
);
TableHead.displayName = 'TableHead';

export { TableHead };
