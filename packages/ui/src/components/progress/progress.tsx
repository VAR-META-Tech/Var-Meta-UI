import { cn } from '@hashgraph/utils';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import React from 'react';

import { type ElementProps } from '../../types';

export interface ProgressProps extends ElementProps<typeof ProgressPrimitive.Root> {}

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(
  ({ className, value, ...props }, ref) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn('relative h-2 w-full overflow-hidden rounded-full bg-gray-200', className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn('h-full w-full  rounded-full flex-1 bg-brand-600 transition-all')}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
