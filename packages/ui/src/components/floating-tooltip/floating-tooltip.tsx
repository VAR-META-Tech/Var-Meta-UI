import { FloatingArrow, FloatingPortal } from '@floating-ui/react';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ElementRef } from 'react';
import React, { cloneElement, forwardRef } from 'react';

import { useMergedRef } from '../../hooks';
import { type ElementProps, type VisibleState } from '../../types';
import { cn } from '../../utils/cn';
import { isElement } from '../../utils/is-element';
import { type FloatingPosition, useFloatingTooltip } from './use-floating-tooltip';

export const floatingTooltipContentVariants = cva(
  [
    'px-3 py-2 rounded-md flex flex-col items-start self-stretch max-w-xxs',
    'z-50 overflow-hidden text-xs font-semibold shadow-lg',
    'animate-in fade-in-0 zoom-in-95',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  ],
  {
    variants: {
      theme: {
        light: 'bg-white text-foreground-secondary',
        dark: 'bg-gray-900 text-white',
      },
    },
    defaultVariants: {
      theme: 'light',
    },
  }
);

export interface FloatingTooltipProps
  extends ElementProps<'div', 'content' | 'title'>,
    VariantProps<typeof floatingTooltipContentVariants>,
    VisibleState {
  offset?: number;
  position?: FloatingPosition;
  title?: React.ReactNode;
  content?: React.ReactNode;
  contentClassName?: string;
  outlined?: boolean;
  arrow?: boolean;
}

const FloatingTooltip = forwardRef<ElementRef<'div'>, FloatingTooltipProps>(
  (
    {
      children,
      content,
      title,
      outlined = true,
      arrow,
      contentClassName,
      offset = 8,
      position = 'top',
      theme = 'light',
      className,
      open,
      defaultOpen,
      onOpenChange,
    },
    ref
  ) => {
    if (!isElement(children)) {
      throw new Error(
        'FloatingTooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported'
      );
    }

    const { handleMouseMove, x, y, arrowRef, context, opened, boundaryRef, strategy, floating, setOpened } =
      useFloatingTooltip({
        offset,
        position,
        open,
        defaultOpen,
        onOpenChange,
      });

    const targetRef = useMergedRef(boundaryRef, (children as any).ref, ref);

    const onMouseEnter = (event: React.MouseEvent<unknown, MouseEvent>) => {
      children.props.onMouseEnter?.(event);
      handleMouseMove(event);
      setOpened(true);
    };

    const onMouseLeave = (event: React.MouseEvent<unknown, MouseEvent>) => {
      children.props.onMouseLeave?.(event);
      setOpened(false);
    };

    return (
      <>
        {cloneElement(children, {
          ...children.props,
          ref: targetRef,
          onMouseEnter,
          onMouseLeave,
        })}

        <FloatingPortal>
          <div
            ref={floating}
            style={{
              position: strategy,
              display: opened ? 'block' : 'none',
              top: (y && Math.round(y)) ?? '',
              left: (x && Math.round(x)) ?? '',
              zIndex: 10,
            }}
          >
            {arrow && (
              <FloatingArrow
                ref={arrowRef}
                context={context}
                className={cn('drop-shadow-lg -mt-px w-3', {
                  'fill-white': theme === 'light',
                  'fill-gray-900': theme === 'dark',
                })}
              />
            )}
            <div
              className={cn(
                { 'border border-gray-200': outlined },
                floatingTooltipContentVariants({ theme, className })
              )}
            >
              {title}
              {content && (
                <div
                  className={cn(
                    'mt-1 text-xs font-medium',
                    { 'text-gray-600': theme === 'light', 'text-gray-300': theme === 'dark' },
                    contentClassName
                  )}
                >
                  {content}
                </div>
              )}
            </div>
          </div>
        </FloatingPortal>
      </>
    );
  }
);

export default FloatingTooltip;
