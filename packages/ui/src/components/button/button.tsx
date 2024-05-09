import React, { type ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { Spinner } from '../spinner';
import { buttonVariants, type ButtonVariants } from './button.styles';

export interface ButtonProps extends ElementProps<'button', 'color'>, ButtonVariants {
  asChild?: boolean;
  loadingIcon?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loadingPlacement?: 'start' | 'end';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    children,
    disabled,
    variant,
    fullWidth,
    size,
    iconOnly,
    rounded,
    asChild,
    loading,
    color,
    loadingIcon = <Spinner className="h-5 w-5" />,
    loadingPlacement = 'start',
    startIcon,
    endIcon,
    ...etc
  } = props;

  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={cn(buttonVariants({ variant, iconOnly, color, loading, fullWidth, rounded, size }), {}, className)}
      ref={ref}
      disabled={loading || disabled}
      aria-disabled={loading || disabled}
      {...etc}
    >
      {startIcon && !loading && startIcon}
      {loading && loadingPlacement === 'start' && loadingIcon}
      {children}
      {loading && loadingPlacement === 'end' && loadingIcon}
      {endIcon && endIcon}
    </Comp>
  );
});
Button.displayName = 'Button';

export { Button };
