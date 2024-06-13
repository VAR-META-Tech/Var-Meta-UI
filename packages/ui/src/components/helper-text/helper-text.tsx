import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '../../utils/cn';

const helperTextVariants = tv({
  base: 'block text-sm font-normal mt-1.5',
  variants: {
    variant: {
      default: 'text-foreground-secondary',
      background: 'text-foreground-secondary',
      destructive: 'text-foreground-error',
      disabled: 'text-foreground-secondary',
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
