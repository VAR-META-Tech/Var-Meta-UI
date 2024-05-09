import React, { type ElementRef, forwardRef, type ReactElement, type Ref } from 'react';

import { Autocomplete, type AutocompleteProps } from '../autocomplete';
import { HelperText } from '../helper-text';
import { Label } from '../label';

export interface AutoCompleteFieldProps<T extends boolean = false> extends AutocompleteProps<T> {
  label?: string;
  helperText?: string;
}

const AutocompleteFieldComponent = <T extends boolean = false>(
  { label, helperText, variant = 'default', ...props }: AutoCompleteFieldProps<T>,
  autoCompleteRef: Ref<ElementRef<'input'>>
) => {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <Autocomplete variant={variant} ref={autoCompleteRef} {...props} />
      {helperText && <HelperText variant={props.disabled ? 'disabled' : variant}>{helperText}</HelperText>}
    </div>
  );
};

export const AutocompleteField = forwardRef(AutocompleteFieldComponent) as <T extends boolean = false>(
  p: AutoCompleteFieldProps<T> & { ref?: Ref<ElementRef<'input'>> }
) => ReactElement;
