import React, { useMemo, type ElementRef, type ReactNode } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { type ElementProps } from '../../types';
import { HStack } from '../utility';
import { usePaginationContext } from './pagination-context';
import { PaginationFirst, PaginationLast, PaginationNext, PaginationPrevious } from './pagination-edge';
import { PaginationItems } from './pagination-item';

const paginationMainVariants = tv({
  base: 'flex w-full items-center gap-3',
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

export interface PaginationButtonProps {
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

export interface PaginationMainProps
  extends ElementProps<'div'>,
    VariantProps<typeof paginationMainVariants>,
    PaginationButtonProps {}

const PaginationMain = React.forwardRef<ElementRef<'div'>, PaginationMainProps>((props, ref) => {
  const {
    withEdges,
    withControls = true,
    getControlProps,
    nextIcon,
    previousIcon,
    lastIcon,
    firstIcon,
    dotsIcon,
    className,
    justify = 'center',
    shape: shapeProp,
    ...etc
  } = props;

  const { shape: shapeContext } = usePaginationContext();
  const shape = shapeProp || shapeContext;

  const renderControlLeft = useMemo(() => {
    return (
      <HStack spacing={8}>
        {withEdges && <PaginationFirst variant={shape} icon={firstIcon} {...getControlProps?.('first')} />}
        {withControls && <PaginationPrevious variant={shape} icon={previousIcon} {...getControlProps?.('previous')} />}
      </HStack>
    );
  }, [getControlProps, firstIcon, previousIcon, shape, withControls, withEdges]);

  const renderControlRight = useMemo(() => {
    return (
      <HStack spacing={8}>
        {withControls && <PaginationNext variant={shape} icon={nextIcon} {...getControlProps?.('next')} />}
        {withEdges && <PaginationLast variant={shape} icon={lastIcon} {...getControlProps?.('last')} />}
      </HStack>
    );
  }, [getControlProps, lastIcon, nextIcon, shape, withControls, withEdges]);

  return (
    <div className={paginationMainVariants({ shape, justify, className })} ref={ref} {...etc}>
      {justify === 'start' ? (
        <HStack spacing={8}>
          {renderControlLeft}
          {renderControlRight}
        </HStack>
      ) : null}

      {['center', 'between'].includes(String(justify)) ? renderControlLeft : null}

      <HStack spacing={shape === 'button' ? 0 : 8}>
        <PaginationItems variant={shape} dotsIcon={dotsIcon} />
      </HStack>

      {['center', 'between'].includes(String(justify)) ? renderControlRight : null}

      {justify === 'end' ? (
        <HStack spacing={8}>
          {renderControlLeft}
          {renderControlRight}
        </HStack>
      ) : null}
    </div>
  );
});
PaginationMain.displayName = 'PaginationMain';

export { PaginationMain };
