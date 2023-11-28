import React from 'react';

import { HelperText } from '../helper-text';
import { Input, type InputProps } from '../input';
import { Label } from '../label';

export interface TextFieldProps extends InputProps {
  label?: string;
  helperText?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, helperText, variant = 'default', ...props }, ref) => {
    return (
      <div>
        {label && <Label>{label}</Label>}
        <Input variant={variant} ref={ref} {...props} />
        {helperText && <HelperText variant={variant}>{helperText}</HelperText>}
      </div>
    );
  }
);

TextField.displayName = 'TextField';

export { TextField };
