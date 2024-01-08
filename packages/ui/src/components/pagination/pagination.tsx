import { cva, type VariantProps } from 'class-variance-authority';
import React, { type ElementRef, type ReactNode, useMemo } from 'react';

import { cn } from '../../utils/cn';
import { HStack } from '../utility';
import { PaginationFirst, PaginationLast, PaginationNext, PaginationPrevious } from './pagination-edge';
import { PaginationItems } from './pagination-item';
import { PaginationRoot, type PaginationRootProps } from './pagination-root';

const minimalPaginationVariants = cva('gap-3 flex w-full items-center', {
  variants: {
    shape: {
      square: '',
      circle: '',
      button: '',
    },
    justify: {
      start: 'justify-between',
      center: 'justify-center',
      end: 'justify-between',
      between: 'justify-between',
    },
  },
  defaultVariants: {
    justify: 'center',
  },
});

export interface PaginationProps extends PaginationRootProps, VariantProps<typeof minimalPaginationVariants> {
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

  /** items style component */
  itemStyle?: 'default' | 'minimal';
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
    justify = 'between',
    itemStyle = 'default',
    ...etc
  } = props;

  const renderControlLeft = useMemo(() => {
    return (
      <HStack>
        {withEdges && (
          <PaginationFirst withBorder rounded="sm" variant="button" icon={firstIcon} {...getControlProps?.('first')} />
        )}
        {withControls && (
          <PaginationPrevious
            withBorder
            rounded="sm"
            variant="button"
            icon={previousIcon}
            {...getControlProps?.('previous')}
          />
        )}
      </HStack>
    );
  }, [getControlProps, firstIcon, previousIcon, withControls, withEdges]);

  const renderControlRight = useMemo(() => {
    return (
      <HStack>
        {withControls && (
          <PaginationNext withBorder rounded="sm" variant="button" icon={nextIcon} {...getControlProps?.('next')} />
        )}
        {withEdges && (
          <PaginationLast withBorder rounded="sm" variant="button" icon={lastIcon} {...getControlProps?.('last')} />
        )}
      </HStack>
    );
  }, [getControlProps, lastIcon, nextIcon, withControls, withEdges]);

  return (
    <PaginationRoot
      className={cn(minimalPaginationVariants({ shape, justify, className }))}
      ref={ref}
      total={total}
      {...etc}
    >
      {justify === 'start' ? (
        <HStack>
          {renderControlLeft}
          {renderControlRight}
        </HStack>
      ) : null}

      {['center', 'between'].includes(String(justify)) ? renderControlLeft : null}

      <HStack spacing={shape === 'button' ? 0 : 2}>
        <PaginationItems itemStyle={itemStyle} variant={shape} dotsIcon={dotsIcon} />
      </HStack>

      {['center', 'between'].includes(String(justify)) ? renderControlRight : null}

      {justify === 'end' ? (
        <HStack>
          {renderControlLeft}
          {renderControlRight}
        </HStack>
      ) : null}
    </PaginationRoot>
  );
});
Pagination.displayName = 'Pagination';

export { Pagination };
