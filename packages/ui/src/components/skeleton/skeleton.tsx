import { forwardRef } from 'react';

import { cn } from '../../utils/cn';

export interface SkeletonProps extends React.ComponentPropsWithoutRef<'div'> {}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(({ className, ...props }, ref) => {
  return <div className={cn('bg-gray-200 animate-pulse rounded-md', className)} ref={ref} {...props} />;
});

export { Skeleton };
