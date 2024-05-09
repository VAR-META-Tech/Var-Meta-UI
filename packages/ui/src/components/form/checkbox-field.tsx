import React, { forwardRef } from 'react';

import { Checkbox, type CheckboxProps } from '../checkbox';
import { HelperText } from '../helper-text';
import { Label } from '../label';
export interface CheckboxFieldProps extends CheckboxProps {
  label?: string;
  helperText?: string;
  variant?: 'default' | 'destructive';
}

const CheckboxField = forwardRef<React.ElementRef<typeof Checkbox>, CheckboxFieldProps>(
  ({ label, helperText, variant = 'default', ...props }, ref) => {
    return (
      <div>
        {label && <Label>{label}</Label>}
        <Checkbox ref={ref} {...props} />
        {helperText && <HelperText variant={props.disabled ? 'disabled' : variant}>{helperText}</HelperText>}
      </div>
    );
  }
);

CheckboxField.displayName = 'CheckboxField';

export { CheckboxField };
