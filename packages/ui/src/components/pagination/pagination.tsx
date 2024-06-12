import React, { forwardRef, type ElementRef } from 'react';

import { PaginationMain, type PaginationButtonProps, type PaginationMainProps } from './pagination-main';
import { PaginationProvider, type PaginationProviderProps } from './pagination-provider';

export interface PaginationProps extends PaginationProviderProps, PaginationButtonProps {}

export const Pagination = forwardRef<ElementRef<typeof PaginationProvider>, PaginationProps>((props, ref) => {
  const {
    withEdges,
    withControls = true,
    getControlProps,
    nextIcon,
    previousIcon,
    lastIcon,
    firstIcon,
    dotsIcon,
    ...etc
  } = props;
  return (
    <PaginationProvider ref={ref} {...etc}>
      <PaginationMain
        withEdges={withEdges}
        withControls={withControls}
        getControlProps={getControlProps}
        nextIcon={nextIcon}
        previousIcon={previousIcon}
        lastIcon={lastIcon}
        firstIcon={firstIcon}
        dotsIcon={dotsIcon}
      />
    </PaginationProvider>
  );
});
