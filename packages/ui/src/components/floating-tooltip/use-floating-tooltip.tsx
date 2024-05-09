/* eslint-disable no-nested-ternary */
import type React from 'react';
import { useCallback, useEffect, useRef } from 'react';
import { arrow, getOverflowAncestors, shift, useFloating } from '@floating-ui/react';
import { useControllableState } from '@radix-ui/react-use-controllable-state';

import { type VisibleState } from '../../types';

type FloatingPlacement = 'end' | 'start';
type FloatingSide = 'top' | 'right' | 'bottom' | 'left';
export type FloatingPosition = FloatingSide | `${FloatingSide}-${FloatingPlacement}`;
interface UseFloatingTooltip extends VisibleState {
  offset: number;
  position: FloatingPosition;
}

export function useFloatingTooltip<T extends HTMLElement = any>({
  offset,
  position,
  defaultOpen,
  onOpenChange,
  open: openProp,
}: UseFloatingTooltip) {
  const [opened = false, setOpened] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });
  const boundaryRef = useRef<T>();
  const arrowRef = useRef(null);
  const { x, y, elements, context, refs, strategy, update, placement } = useFloating({
    placement: position,
    middleware: [
      shift({
        crossAxis: true,
        padding: 5,
        rootBoundary: 'document',
      }),
      arrow({
        element: arrowRef,
      }),
    ],
  });

  const horizontalOffset = placement.includes('right') ? offset : position.includes('left') ? offset * -1 : 0;

  const verticalOffset = placement.includes('bottom') ? offset : position.includes('top') ? offset * -1 : 0;

  const handleMouseMove = useCallback(
    ({ clientX, clientY }: MouseEvent | React.MouseEvent<T, MouseEvent>) => {
      refs.setPositionReference({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: clientX,
            y: clientY,
            left: clientX + horizontalOffset,
            top: clientY + verticalOffset,
            right: clientX,
            bottom: clientY,
          };
        },
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [elements.reference]
  );

  useEffect(() => {
    if (refs.floating.current) {
      const boundary = boundaryRef.current!;
      boundary.addEventListener('mousemove', handleMouseMove);

      const parents = getOverflowAncestors(refs.floating.current);
      parents.forEach((parent) => {
        parent.addEventListener('scroll', update);
      });

      return () => {
        boundary.removeEventListener('mousemove', handleMouseMove);
        parents.forEach((parent) => {
          parent.removeEventListener('scroll', update);
        });
      };
    }

    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elements.reference, refs.floating.current, update, handleMouseMove, opened]);

  return {
    handleMouseMove,
    x,
    y,
    arrowRef,
    context,
    strategy,
    opened,
    setOpened,
    boundaryRef,
    floating: refs.setFloating,
  };
}
