import React, { forwardRef, useCallback } from 'react';
import { type SelectProps as RadixSelectProps, type Trigger } from '@radix-ui/react-select';
import { type VariantProps } from 'tailwind-variants';

import { type Option } from '../../types';
import { cn } from '../../utils/cn';
import {
  SelectContent,
  SelectItem,
  SelectProvider,
  SelectTrigger,
  SelectValue,
  type selectTriggerVariants,
} from './core-select';

export interface SelectProps extends RadixSelectProps, VariantProps<typeof selectTriggerVariants> {
  options: Option[];
  placeholder?: string;
  fullWidth?: boolean;
  align?: 'center' | 'start' | 'end' | undefined;
  withScrollAction?: boolean;

  /**
   * *Should return empty string when select the same value.
   */
  clearable?: boolean;
  withScrollbar?: boolean;
  contentClassName?: string;
}

const Select = forwardRef<React.ElementRef<typeof Trigger>, SelectProps>(
  (
    {
      options,
      withScrollAction = true,
      withScrollbar = true,
      clearable,
      placeholder,
      align,
      fullWidth,
      variant,
      size,
      contentClassName,
      ...props
    },
    ref
  ) => {
    const handleClearIfNeeded = useCallback(
      (selectedValue: string) => {
        if (clearable && props?.value === selectedValue && props?.onValueChange) {
          props.onValueChange('');
        }
      },
      [clearable, props]
    );

    return (
      <SelectProvider {...props}>
        <SelectTrigger ref={ref} variant={variant} size={size} fullWidth={fullWidth}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent
          withScrollbar={withScrollbar}
          withScrollAction={withScrollAction}
          align={align}
          className={cn('max-h-[320px] overflow-auto', contentClassName)}
        >
          {options.map((x) => (
            <SelectItem onPointerUp={() => handleClearIfNeeded(x.value)} key={x.value} value={x.value}>
              {x.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectProvider>
    );
  }
);

Select.displayName = 'Select';
export { Select, SelectContent, SelectItem, SelectProvider, SelectTrigger, SelectValue };
