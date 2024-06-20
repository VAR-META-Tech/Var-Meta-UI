import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '../../utils/cn';

const textareaVariants = tv({
  base: [
    'flex min-h-[128px] border text-foreground placeholder:text-gray-500 bg-background rounded-md',
    'focus-visible:outline-none  outline-none',
    'disabled:cursor-not-allowed disabled:border-disabled disabled:shadow-xs disabled:bg-gray-50 disabled:text-gray-500',
    'read-only:bg-readonly read-only:border-readonly-border read-only:cursor-default',
  ],
  variants: {
    variant: {
      default: 'bg-input border-input-border focus-within:shadow-brand-xs focus-within:border-brand-300',
      background: 'bg-background border-input-border focus-within:shadow-brand-xs focus-within:border-brand-300',
      destructive: 'bg-input border-error-300 focus-within:shadow-error-xs focus-within:border-error-300',
    },
    size: {
      none: '',
      sm: 'h-10 px-3 py-2',
      md: 'h-11 px-3.5 py-3',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
    fullWidth: true,
  },
});

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ variant, rows = 6, className, fullWidth, ...props }, ref) => {
    return (
      <textarea className={textareaVariants({ variant, className, fullWidth })} rows={rows} ref={ref} {...props} />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
