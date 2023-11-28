import { type SelectProps as RadixSelectProps, type Trigger } from '@radix-ui/react-select';
import { type VariantProps } from 'class-variance-authority';
import React, { forwardRef } from 'react';

import { type Option } from '../../types';
import {
  SelectContent,
  SelectItem,
  SelectProvider,
  SelectTrigger,
  type selectTriggerVariants,
  SelectValue,
} from './core-select';

export interface SelectProps extends RadixSelectProps, VariantProps<typeof selectTriggerVariants> {
  options: Option[];
  placeholder?: string;
  fullWidth?: boolean;
}

const Select = forwardRef<React.ElementRef<typeof Trigger>, SelectProps>(
  ({ options, placeholder, fullWidth, variant, size, ...props }, ref) => {
    return (
      <SelectProvider {...props}>
        <SelectTrigger ref={ref} variant={variant} size={size} fullWidth={fullWidth}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="max-h-[320px] overflow-auto">
          {options.map((x) => (
            <SelectItem key={x.value} value={x.value}>
              {x.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectProvider>
    );
  }
);

Select.displayName = 'Select';
export { Select };
