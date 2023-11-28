import { cn } from '@hashgraph/utils';
import type { SVGProps } from 'react';
import * as React from 'react';

export interface SpinnerProps extends SVGProps<SVGSVGElement> {}

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(({ className, ...props }, ref) => (
  <svg
    className={cn('animate-spin', className)}
    width={24}
    ref={ref}
    height={24}
    viewBox="0 0 25 25"
    fill="none"
    {...props}
  >
    <path d="M4.5 12.5a8 8 0 1 0 8-8" stroke="currentColor" strokeWidth={1.2} />
  </svg>
));
export default Spinner;
