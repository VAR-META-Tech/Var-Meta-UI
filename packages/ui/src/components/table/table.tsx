import { cn } from '@swiss-digital-assets-institute/utils';
import { cva } from 'class-variance-authority';
import React, { forwardRef, type ReactNode } from 'react';

import { type ElementProps } from '../../types';
import { type TableContext, TableProvider } from './table-context';

const tableVariants = cva('w-full caption-bottom text-sm text-gray-600', {
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
          'relative bg-base-white border shadow-sm border-gray-200 rounded-xl w-full overflow-auto',
          className
        )}
      >
        {header ? (
          <div
            className={cn(
              'min-h-[69px] px-6 py-5 border-b flex items-center justify-between border-gray-200',
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
