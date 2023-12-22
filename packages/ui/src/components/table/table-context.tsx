import { createSafeContext } from '../../utils/create-safe-context';

export interface TableContext {
  variant?: 'default' | 'striped';
  size?: 'sm' | 'md' | 'lg';
  withHeader?: boolean;
}

export const [TableProvider, useTableContext] = createSafeContext<TableContext>(
  'TableRoot component was not found in tree'
);
