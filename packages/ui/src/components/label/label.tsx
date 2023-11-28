import { cn } from '@hashgraph/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const labelVariants = cva(cn('text-gray-700 block text-sm min-h-[20px] font-medium mb-1.5'));

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement>, VariantProps<typeof labelVariants> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ children, className, ...props }, ref) => {
  return (
    <label className={cn(labelVariants({ className }))} ref={ref} {...props}>
      {children}
    </label>
  );
});

Label.displayName = 'Label';

export { Label, labelVariants };
