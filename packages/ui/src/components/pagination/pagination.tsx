import React, { forwardRef, type ElementRef } from 'react';

import { PaginationMain, type PaginationMainProps } from './pagination-main';
import { PaginationProvider, type PaginationProviderProps } from './pagination-provider';

export interface PaginationProps extends PaginationProviderProps {
  mainProps?: PaginationMainProps;
}

export const Pagination = forwardRef<ElementRef<typeof PaginationProvider>, PaginationProps>((props, ref) => {
  const { mainProps, ...etc } = props;
  return (
    <PaginationProvider ref={ref} {...etc}>
      <PaginationMain {...mainProps} />
    </PaginationProvider>
  );
});
