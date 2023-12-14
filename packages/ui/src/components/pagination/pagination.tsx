import { cn } from '@hashgraph/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React, { type ElementRef, type ReactNode } from 'react';

import { HStack } from '../utility';
import { PaginationFirst, PaginationLast, PaginationNext, PaginationPrevious } from './pagination-edge';
import { PaginationItems } from './pagination-item';
import { PaginationRoot, type PaginationRootProps } from './pagination-root';

const paginationVariants = cva('flex w-full items-center', {
  variants: {
    shape: {
      square: '',
      circle: '',
      button: '',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
    },
  },
  defaultVariants: {
    justify: 'center',
  },
});

export interface PaginationProps extends PaginationRootProps, VariantProps<typeof paginationVariants> {
  /** Determines whether first/last controls should be rendered, false by default */
  withEdges?: boolean;

  /** Determines whether next/previous controls should be rendered, true by default */
  withControls?: boolean;

  /** Adds props to next/previous/first/last controls */
  getControlProps?: (control: 'first' | 'previous' | 'last' | 'next') => Record<string, any>;

  /** Next control icon component */
  nextIcon?: ReactNode;

  /** Previous control icon component */
  previousIcon?: ReactNode;

  /** Last control icon component */
  lastIcon?: ReactNode;

  /** First control icon component */
  firstIcon?: ReactNode;

  /** Dots icon component */
  dotsIcon?: ReactNode;
}

const Pagination = React.forwardRef<ElementRef<'div'>, PaginationProps>((props, ref) => {
  const {
    withEdges,
    withControls = true,
    getControlProps,
    nextIcon,
    previousIcon,
    lastIcon,
    firstIcon,
    dotsIcon,
    total,
    className,
    shape = 'square',
    justify = 'center',
    ...etc
  } = props;

  return (
    <PaginationRoot className={cn(paginationVariants({ shape, justify, className }))} ref={ref} total={total} {...etc}>
      <HStack
        className={cn({
          'divide-x divide-gray-300 border border-gray-300 rounded-md [&>button:first-child]:rounded-l-md [&>button:last-child]:rounded-r-md':
            shape === 'button',
        })}
        spacing={shape === 'button' ? 0 : 2}
      >
        {withEdges && <PaginationFirst variant={shape} icon={firstIcon} {...getControlProps?.('first')} />}
        {withControls && <PaginationPrevious variant={shape} icon={previousIcon} {...getControlProps?.('previous')} />}
        <PaginationItems variant={shape} dotsIcon={dotsIcon} />
        {withControls && <PaginationNext variant={shape} icon={nextIcon} {...getControlProps?.('next')} />}
        {withEdges && <PaginationLast variant={shape} icon={lastIcon} {...getControlProps?.('last')} />}
      </HStack>
    </PaginationRoot>
  );
});
Pagination.displayName = 'Pagination';

export { Pagination };
