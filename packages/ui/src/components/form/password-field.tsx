import React from 'react';

import { useDisclosure } from '../../hooks';
import { Button } from '../button';
import { HelperText } from '../helper-text';
import EyeOffIcon from '../icons/eye-off-icon';
import EyeOpenIcon from '../icons/eye-open-icon';
import { Input, type InputProps } from '../input';
import { Label } from '../label';

export interface PasswordFieldProps extends InputProps {
  label?: string;
  helperText?: string;
}

const PasswordField = React.forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ label, helperText, variant = 'default', ...props }, ref) => {
    const [show, { toggle }] = useDisclosure(false);

    return (
      <div>
        {label && <Label>{label}</Label>}
        <Input
          variant={variant}
          ref={ref}
          {...props}
          type={show ? 'text' : 'password'}
          suffix={
            <Button onClick={toggle} iconOnly variant="ghost" className="-mr-2" radius="full" color="gray" size="sm">
              {show ? <EyeOffIcon className="h-6 w-6" /> : <EyeOpenIcon className="h-6 w-6" />}
            </Button>
          }
        />
        {helperText && <HelperText variant={props.disabled ? 'disabled' : variant}>{helperText}</HelperText>}
      </div>
    );
  }
);

PasswordField.displayName = 'PasswordField';

export { PasswordField };
