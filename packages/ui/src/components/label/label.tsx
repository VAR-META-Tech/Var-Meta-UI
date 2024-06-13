import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { type ElementProps } from '../../types';

const labelVariants = tv({
  base: 'text-foreground-primary block font-medium mb-1',
  variants: {
    size: {
      default: 'text-base',
      sm: 'text-sm',
      xs: 'text-xs',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export interface LabelProps extends ElementProps<'label'>, VariantProps<typeof labelVariants> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ children, size, className, ...props }, ref) => {
  return (
    <label className={labelVariants({ size, className })} ref={ref} {...props}>
      {children}
    </label>
  );
});

Label.displayName = 'Label';

export { Label, labelVariants };
