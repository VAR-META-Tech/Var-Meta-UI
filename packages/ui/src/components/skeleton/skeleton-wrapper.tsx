import { cn } from '@swiss-digital-assets-institute/utils';
import { forwardRef } from 'react';

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
          { 'bg-gray-200 h-fit w-fit animate-pulse rounded-md [&>*]:!invisible': loading, 'w-auto': fullWidth },
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
