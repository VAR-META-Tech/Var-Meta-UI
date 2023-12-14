import React, { type ElementRef, forwardRef } from 'react';

import { usePagination } from '../../hooks';
import { type ElementProps } from '../../types';
import { createEventHandler } from '../../utils/create-event-handler';
import { PaginationProvider } from './pagination-context';

export interface PaginationRootProps extends ElementProps<'div', 'value' | 'onChange'> {
  /** Total number of pages, must be an integer */
  total: number;

  /** Active page for controlled component, must be an integer in [0, total] interval */
  value?: number;

  /** Active page for uncontrolled component, must be an integer in [0, total] interval */
  defaultValue?: number;

  /** Called when page changes */
  onChange?: (value: number) => void;

  /** Determines whether all controls should be disabled, `false` by default */
  disabled?: boolean;

  /** Number of siblings displayed on the left/right side of the selected page, `1` by default */
  siblings?: number;

  /** Number of elements visible on the left/right edges, `1` by default */
  boundaries?: number;

  /** Called when next page control is clicked */
  onNextPage?: () => void;

  /** Called when previous page control is clicked */
  onPreviousPage?: () => void;

  /** Called when first page control is clicked */
  onFirstPage?: () => void;

  /** Called when last page control is clicked */
  onLastPage?: () => void;

  /** Additional props passed down to controls */
  getItemProps?: (page: number) => Record<string, any>;
}

const PaginationRoot = forwardRef<ElementRef<'div'>, PaginationRootProps>((props, ref) => {
  const {
    total,
    value,
    defaultValue,
    onChange,
    disabled,
    siblings,
    boundaries,
    onNextPage,
    onPreviousPage,
    onFirstPage,
    onLastPage,
    getItemProps,
    style,
    ...etc
  } = props;

  const { range, setPage, next, previous, active, first, last } = usePagination({
    page: value,
    initialPage: defaultValue,
    onChange,
    total,
    siblings,
    boundaries,
  });

  const handleNextPage = createEventHandler(onNextPage, next);
  const handlePreviousPage = createEventHandler(onPreviousPage, previous);
  const handleFirstPage = createEventHandler(onFirstPage, first);
  const handleLastPage = createEventHandler(onLastPage, last);

  return (
    <PaginationProvider
      value={{
        total,
        range,
        active,
        disabled,
        getItemProps,
        onChange: setPage,
        onNext: handleNextPage,
        onPrevious: handlePreviousPage,
        onFirst: handleFirstPage,
        onLast: handleLastPage,
      }}
    >
      <div
        style={
          {
            '--pagination-control-size': '40px',
            ...style,
          } as React.CSSProperties
        }
        ref={ref}
        {...etc}
      />
    </PaginationProvider>
  );
});

PaginationRoot.displayName = 'PaginationRoot';

export { PaginationRoot };
