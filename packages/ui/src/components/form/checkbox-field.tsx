import React, { forwardRef } from 'react';

import { Checkbox, type CheckboxProps } from '../checkbox';
import { HelperText } from '../helper-text';
import { labelVariants } from '../label/label';

export interface CheckboxFieldProps extends CheckboxProps {
  label?: string;
  helperText?: string;
  variant?: 'default' | 'destructive';
}

const CheckboxField = forwardRef<React.ElementRef<typeof Checkbox>, CheckboxFieldProps>(
  ({ label, helperText, variant = 'default', ...props }, ref) => {
    return (
      <div>
        <label htmlFor="checkbox" className="flex items-center">
          <Checkbox ref={ref} {...props} />
          {label ? <span className={labelVariants({ spacer: 'none', className: 'ml-2' })}>{label}</span> : null}
        </label>
        {helperText && <HelperText variant={props.disabled ? 'disabled' : variant}>{helperText}</HelperText>}
      </div>
    );
  }
);

CheckboxField.displayName = 'CheckboxField';

export { CheckboxField };
