import React, { forwardRef } from 'react';
import { type Trigger } from '@radix-ui/react-select';

import { HelperText } from '../helper-text';
import { Label } from '../label';
import { Select, type SelectProps } from '../select';

export interface SelectFieldProps extends SelectProps {
  label?: string;
  helperText?: string;
}

const SelectField = forwardRef<React.ElementRef<typeof Trigger>, SelectFieldProps>(
  ({ label, helperText, variant, ...props }, ref) => {
    return (
      <div>
        {label && <Label>{label}</Label>}
        <Select ref={ref} variant={variant} {...props} />
        {helperText && <HelperText variant={props.disabled ? 'disabled' : variant}>{helperText}</HelperText>}
      </div>
    );
  }
);

SelectField.displayName = 'SelectField';

export { SelectField };
