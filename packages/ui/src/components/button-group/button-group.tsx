import { cn } from '@hashgraph/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import { type ButtonProps } from '../button/button';

const buttonGroupVariants = cva(
  'inline-flex [&>button]:rounded-none [&>button]:mx-[-0.5px] [&>button:first-child]:rounded-l-xs [&>button:last-child]:rounded-r-xs'
);

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Pick<ButtonProps, 'dotLeading' | 'iconOnly'>,
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
