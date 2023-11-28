import { cn } from '@hashgraph/utils';
import { forwardRef } from 'react';

export interface SkeletonProps extends React.ComponentPropsWithoutRef<'div'> {}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(({ className, ...props }, ref) => {
  return <div className={cn('bg-neutral-10 animate-pulse rounded-md', className)} ref={ref} {...props} />;
});

export { Skeleton };
