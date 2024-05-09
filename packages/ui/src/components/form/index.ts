import { AutocompleteField, type AutoCompleteFieldProps } from '../form/autocomplete-field';
import { CheckboxField, type CheckboxFieldProps } from '../form/checkbox-field';
import { RadioGroupField, type RadioGroupFieldProps } from '../form/radio-group-field';
import { SelectField, type SelectFieldProps } from '../form/select-field';
import { TextField, type TextFieldProps } from '../form/text-field';

export type { AutoCompleteFieldProps, CheckboxFieldProps, RadioGroupFieldProps, SelectFieldProps, TextFieldProps };

export const Form = {
  Autocomplete: AutocompleteField,
  Checkbox: CheckboxField,
  RadioGroup: RadioGroupField,
  Select: SelectField,
  Input: TextField,
};
