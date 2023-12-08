import { cn } from '@hashgraph/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const helperTextVariants = cva(cn('block text-sm font-normal mt-1.5'), {
  variants: {
    variant: {
      default: 'text-gray-600',
      destructive: 'text-error-500',
      disabled: 'text-gray-600',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface HelperTextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof helperTextVariants> {}

const HelperText = React.forwardRef<HTMLParagraphElement, HelperTextProps>(
  ({ children, variant, className, ...props }, ref) => {
    return (
      <p className={cn(helperTextVariants({ className, variant }))} ref={ref} {...props}>
        {children}
      </p>
    );
  }
);

HelperText.displayName = 'HelperText';

export { HelperText, helperTextVariants };
