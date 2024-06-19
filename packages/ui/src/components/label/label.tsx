import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { type ElementProps } from '../../types';

const labelVariants = tv({
  base: 'text-foreground-primary block font-medium',
  variants: {
    size: {
      default: 'text-base',
      sm: 'text-sm',
      xs: 'text-xs',
    },
    spacer: {
      default: 'mb-1',
      none: 'mb-0',
    },
  },
  defaultVariants: {
    size: 'default',
    spacer: 'default',
  },
});

export interface LabelProps extends ElementProps<'label'>, VariantProps<typeof labelVariants> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ children, spacer, size, className, ...props }, ref) => {
  return (
    <label className={labelVariants({ spacer, size, className })} ref={ref} {...props}>
      {children}
    </label>
  );
});

Label.displayName = 'Label';

export { Label, labelVariants };
