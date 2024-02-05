import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '../../utils/cn';
import { HelperText } from '../helper-text';
import { Label } from '../label';

const textareaVariants = cva(
  cn(
    'flex min-h-[128px] border text-gray-900 placeholder:text-gray-500 bg-white rounded-md',
    'focus-visible:outline-none  outline-none',
    'disabled:cursor-not-allowed disabled:border-gray-300 disabled:shadow-xs disabled:bg-gray-50 disabled:text-gray-500',
    'read-only:bg-readonly read-only:border-readonly-border read-only:cursor-default'
  ),
  {
    variants: {
      variant: {
        default: 'border-gray-300 focus-visible:shadow-brand-xs focus-visible:border-brand-300',
        destructive: 'border-error-300 bg-white focus-visible:shadow-error-xs focus-visible:border-error-300',
      },
      size: {
        none: '',
        sm: 'h-10 px-3 py-2',
        md: 'h-11 px-3.5 py-3',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label?: string;
  helperText?: string;
  fullWidth?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ variant, rows = 6, label, helperText, className, fullWidth, ...props }, ref) => {
    return (
      <div>
        {label && <Label>{label}</Label>}
        <textarea
          className={cn(textareaVariants({ variant, className }), {
            'w-full': fullWidth,
          })}
          rows={rows}
          ref={ref}
          {...props}
        />
        {helperText && <HelperText variant={props.disabled ? 'disabled' : variant}>{helperText}</HelperText>}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
