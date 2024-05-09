import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../utils/cn';

const buttonGroupVariants = cva(
  '[&>button:first-child]:rounded-l-xs [&>button:last-child]:rounded-r-xs inline-flex [&>button]:mx-[-0.5px] [&>button]:rounded-none'
);

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(buttonGroupVariants(), className)} {...props}>
      {children}
    </div>
  );
});
ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup, buttonGroupVariants };
