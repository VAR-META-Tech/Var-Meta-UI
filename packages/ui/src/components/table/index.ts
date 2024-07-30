import { Table as TableRoot, type TableProps } from './table';
import { TableBody } from './table-body';
import { TableCaption } from './table-caption';
import { TableCell } from './table-cell';
import { TableFooter } from './table-footer';
import { TableHead } from './table-head';
import { TableHeader } from './table-header';
import { TableRow } from './table-row';

export const Table = Object.assign(TableRoot, {
  Header: TableHeader,
  Head: TableHead,
  Row: TableRow,
  Cell: TableCell,
  Body: TableBody,
  Caption: TableCaption,
  Footer: TableFooter,
});

export { TableRoot, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow };

export type { TableProps };
