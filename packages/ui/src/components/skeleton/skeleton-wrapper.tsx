import { forwardRef } from 'react';

import { cn } from '../../utils/cn';

export interface SkeletonWrapperProps extends React.ComponentPropsWithoutRef<'div'> {
  loading?: boolean;
  fullWidth?: boolean;
}

const SkeletonWrapper = forwardRef<HTMLDivElement, SkeletonWrapperProps>(
  ({ className, fullWidth = false, children, loading, ...props }, ref) => {
    if (!loading) return <>{children}</>;
    return (
      <div
        ref={ref}
        className={cn(
          { 'h-fit w-fit animate-pulse rounded-md bg-gray-200 [&>*]:!invisible': loading, 'w-auto': fullWidth },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export { SkeletonWrapper };
