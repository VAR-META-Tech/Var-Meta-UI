import React, { forwardRef, type ReactNode } from 'react';
import { tv } from 'tailwind-variants';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { TableProvider, type TableContext } from './table-context';

const tableVariants = tv({
  base: 'w-full caption-bottom text-sm',
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
  wrapperClassName?: string;
  footerClassName?: string;
  headerClassName?: string;
  layout?: 'auto' | 'fixed';
  header?: ReactNode;
  footer?: ReactNode;
}

const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      variant = 'default',
      header,
      footer,
      layout = 'auto',
      size = 'md',
      className,
      headerClassName,
      wrapperClassName,
      tableClassName,
      footerClassName,
      ...props
    },
    ref
  ) => (
    <TableProvider value={{ variant, size, withHeader: !!header }}>
      <div
        className={cn('bg-background border-border-secondary relative w-full rounded-sm border shadow-sm', className)}
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

        <div className={cn('w-full overflow-auto', wrapperClassName)}>
          <table
            ref={ref}
            className={cn(tableVariants({ variant, size, layout, className: tableClassName }))}
            {...props}
          />
        </div>

        {footer ? (
          <div className={cn('border-t border-gray-200 px-6 pb-4 pt-3 text-sm', footerClassName)}>{footer}</div>
        ) : null}
      </div>
    </TableProvider>
  )
);
Table.displayName = 'Table';

export { Table };
