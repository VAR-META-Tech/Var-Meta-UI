import { createSafeContext } from '../../utils/create-safe-context';

interface PaginationContext {
  total: number;
  range: (number | 'dots')[];
  active: number;
  disabled: boolean | undefined;
  getItemProps?: (page: number) => Record<string, any>;
  onChange: (page: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  onFirst: () => void;
  onLast: () => void;
}

export const [PaginationProvider, usePaginationContext] = createSafeContext<PaginationContext>(
  'PaginationRoot component was not found in tree'
);
