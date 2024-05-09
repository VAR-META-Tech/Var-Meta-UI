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
          'relative bg-background border shadow-sm border-border-secondary rounded-xl w-full overflow-auto',
          className
        )}
      >
        {header ? (
          <div
            className={cn(
              'min-h-[69px] px-6 py-5 border-b flex items-center justify-between border-border-secondary',
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
