import React, { type ElementRef, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../utils/cn';
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

export interface CardPaginationProps extends PaginationRootProps, VariantProps<typeof paginationVariants> {
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

const CardPagination = React.forwardRef<ElementRef<'div'>, CardPaginationProps>((props, ref) => {
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
    shape = 'button',
    justify = 'center',
    itemStyle = 'default',
    ...etc
  } = props;

  return (
    <PaginationRoot className={cn(paginationVariants({ shape, justify, className }))} ref={ref} total={total} {...etc}>
      <HStack
        className={cn({
          'divide-border border-border divide-x rounded-md border [&>button:first-child]:rounded-l-md [&>button:last-child]:rounded-r-md':
            shape === 'button',
        })}
        spacing={shape === 'button' ? 0 : 2}
      >
        {withEdges && <PaginationFirst variant={shape} icon={firstIcon} {...getControlProps?.('first')} />}
        {withControls && <PaginationPrevious variant={shape} icon={previousIcon} {...getControlProps?.('previous')} />}
        <PaginationItems itemStyle={itemStyle} variant={shape} dotsIcon={dotsIcon} />
        {withControls && <PaginationNext variant={shape} icon={nextIcon} {...getControlProps?.('next')} />}
        {withEdges && <PaginationLast variant={shape} icon={lastIcon} {...getControlProps?.('last')} />}
      </HStack>
    </PaginationRoot>
  );
});
CardPagination.displayName = 'CardPagination';

export { CardPagination };
