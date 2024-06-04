import React, { useEffect } from 'react';
import { FloatingPortal, useMergeRefs } from '@floating-ui/react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { usePopover } from '../../hooks';
import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { tooltipContentVariants } from '../tooltip/tooltip';

export interface ProgressProps extends ElementProps<typeof ProgressPrimitive.Root> {
  labelType?: 'none' | 'text' | 'floating';
  placement?: 'right' | 'bottom' | 'top';
}

interface ProgressIndicatorProps extends ElementProps<typeof ProgressPrimitive.Indicator> {
  value?: number | null;
}

const ProgressIndicator = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Indicator>,
  ProgressIndicatorProps
>(({ className, value, ...props }, ref) => {
  return (
    <ProgressPrimitive.Indicator
      className={cn('bg-brand-600 relative h-full w-full flex-1 rounded-full transition-all', className)}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      ref={ref}
      {...props}
    />
  );
});

interface FloatingProgressIndicatorProps {
  value?: number | null;
  placement?: 'right' | 'bottom' | 'top';
  className?: string;
}

const FloatingProgressIndicator = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Indicator>,
  FloatingProgressIndicatorProps
>(({ className, value, placement = 'right', ...props }, indicatorRef) => {
  const { update, floatingStyles, refs } = usePopover({
    open: true,
    placement: placement === 'top' ? 'top-end' : 'bottom-end',
  });

  useEffect(() => {
    update();
  }, [value, update]);

  const ref = useMergeRefs([indicatorRef, refs.setReference]);

  return (
    <>
      <ProgressIndicator
        className={cn('bg-brand-600 relative h-full w-full flex-1 rounded-full transition-all', className)}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        ref={ref}
        {...props}
      />

      <FloatingPortal>
        <div
          style={floatingStyles}
          className={cn(tooltipContentVariants({ theme: 'light', border: 'outlined' }))}
          ref={refs.setFloating}
        >
          {value}%
        </div>
      </FloatingPortal>
    </>
  );
});

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(
  ({ className, value, labelType = 'none', placement = 'right', ...props }, ref) => {
    return (
      <div
        className={cn('relative h-auto w-full', {
          'flex flex-row flex-nowrap items-center justify-start gap-3': placement === 'right' && labelType === 'text',
          'flex flex-col gap-2': placement === 'bottom' && labelType === 'text',
          'flex flex-col-reverse gap-2': placement === 'top' && labelType === 'text',
        })}
      >
        <ProgressPrimitive.Root
          ref={ref}
          className={cn('relative h-2 w-full overflow-hidden rounded-full bg-gray-200', className)}
          {...props}
        >
          {labelType === 'floating' ? (
            <FloatingProgressIndicator placement={placement} value={value} />
          ) : (
            <>
              <ProgressIndicator value={value} />
            </>
          )}
        </ProgressPrimitive.Root>
        {labelType === 'text' ? (
          <div className={cn('text-foreground-secondary flex justify-end text-right text-sm font-medium')}>
            {value}%
          </div>
        ) : null}
      </div>
    );
  }
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
