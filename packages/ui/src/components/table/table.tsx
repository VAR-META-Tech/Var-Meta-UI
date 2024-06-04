import React, { forwardRef, type ReactNode } from 'react';
import { cva } from 'class-variance-authority';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { TableProvider, type TableContext } from './table-context';

const tableVariants = cva('w-full caption-bottom text-sm', {
  variants: {
    variant: {
      default: '',
      striped: '',
    },
    layout: {
      auto: 'table-auto',
      fixed: 'table-fixed',
    },
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  },
});

export interface TableProps extends ElementProps<'table'>, TableContext {
  tableClassName?: string;
  headerClassName?: string;
  layout?: 'auto' | 'fixed';
  header?: ReactNode;
}

const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    { variant = 'default', header, layout = 'auto', size = 'md', className, headerClassName, tableClassName, ...props },
    ref
  ) => (
    <TableProvider value={{ variant, size, withHeader: !!header }}>
      <div
        className={cn(
          'bg-background border-border-secondary relative w-full overflow-auto rounded-xl border shadow-sm',
          className
        )}
      >
        {header ? (
          <div
            className={cn(
              'border-border-secondary flex min-h-[69px] items-center justify-between border-b px-6 py-5',
              headerClassName
            )}
          >
            {header}
          </div>
        ) : null}
        <table
          ref={ref}
          className={cn(tableVariants({ variant, size, layout, className: tableClassName }))}
          {...props}
        />
      </div>
    </TableProvider>
  )
);
Table.displayName = 'Table';

export { Table };
