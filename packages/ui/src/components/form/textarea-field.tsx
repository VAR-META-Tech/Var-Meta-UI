import * as React from 'react';

import { HelperText } from '../helper-text';
import { Label } from '../label';
import { Textarea, type TextareaProps } from '../textarea';

export interface TextareaFieldProps extends TextareaProps {
  label?: string;
  helperText?: string;
}

const TextareaField = React.forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ variant, label, helperText, className, ...props }, ref) => {
    return (
      <div>
        {label && <Label>{label}</Label>}
        <Textarea variant={variant} ref={ref} {...props} />
        {helperText && <HelperText variant={props.disabled ? 'disabled' : variant}>{helperText}</HelperText>}
      </div>
    );
  }
);
TextareaField.displayName = 'TextareaField';

export { TextareaField };
