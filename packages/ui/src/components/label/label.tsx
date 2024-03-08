import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';

const labelVariants = cva(cn('text-foreground-secondary block text-sm min-h-[20px] font-medium mb-1.5'));

export interface LabelProps extends ElementProps<'label'>, VariantProps<typeof labelVariants> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ children, className, ...props }, ref) => {
  return (
    <label className={cn(labelVariants({ className }))} ref={ref} {...props}>
      {children}
    </label>
  );
});

Label.displayName = 'Label';

export { Label, labelVariants };
