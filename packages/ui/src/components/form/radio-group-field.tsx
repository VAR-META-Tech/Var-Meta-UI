import React, { forwardRef } from 'react';

import { type Option } from '../../types';
import { HelperText } from '../helper-text';
import { Label } from '../label';
import { RadioGroup, RadioGroupItem, type RadioGroupProps } from '../radio-group';
export interface RadioGroupFieldProps extends RadioGroupProps {
  label?: string;
  helperText?: string;
  variant?: 'default' | 'destructive';
  options?: Option[];
}

const RadioGroupField = forwardRef<React.ElementRef<typeof RadioGroup>, RadioGroupFieldProps>(
  ({ label, helperText, variant = 'default', defaultValue, options = [], ...props }, ref) => {
    return (
      <div>
        {label && <Label>{label}</Label>}
        <RadioGroup ref={ref} defaultValue={defaultValue ?? options?.[0]?.value} {...props}>
          {options.map((item) => (
            <div className="flex items-center" key={item.value}>
              <RadioGroupItem value={item.value} id={item.value} />
              <label className="ml-2" htmlFor={item.value}>
                {item.label}
              </label>
            </div>
          ))}
        </RadioGroup>
        {helperText && <HelperText variant={props.disabled ? 'disabled' : variant}>{helperText}</HelperText>}
      </div>
    );
  }
);

RadioGroupField.displayName = 'RadioGroupField';

export { RadioGroupField };
