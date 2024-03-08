import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '../../utils/cn';

const helperTextVariants = cva(cn('block text-sm font-normal mt-1.5'), {
  variants: {
    variant: {
      default: 'text-foreground-tertiary',
      destructive: 'text-error-500',
      disabled: 'text-foreground-tertiary',
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
