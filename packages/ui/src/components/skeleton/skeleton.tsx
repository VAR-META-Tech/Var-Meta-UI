import { cn } from '@swiss-digital-assets-institute/utils';
import { forwardRef } from 'react';

export interface SkeletonProps extends React.ComponentPropsWithoutRef<'div'> {}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(({ className, ...props }, ref) => {
  return <div className={cn('bg-gray-200 animate-pulse rounded-md', className)} ref={ref} {...props} />;
});

export { Skeleton };
