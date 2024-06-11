import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '../../utils/cn';
import { CheckboxIcon } from './checkbox-icon';

const checkboxVariant = tv({
  base: [
    'border-disabled focus-visible:shadow-brand-base focus-visible:outline-none',
    'data-[state=indeterminate]:bg-button data-[state=indeterminate]:border-button data-[state=indeterminate]:text-white',
    'data-[state=checked]:bg-button data-[state=checked]:border-button data-[state=checked]:text-white',
    'disabled:bg-background-disabled disabled:border-disabled disabled:!text-disabled disabled:focus-visible:shadow-gray-base shrink-0 border disabled:cursor-not-allowed',
    'disabled:data-[state=checked]:border-disabled disabled:data-[state=checked]:bg-background-light',
    'disabled:data-[state=indeterminate]:border-disabled disabled:data-[state=indeterminate]:bg-background-light ',
  ],
  variants: {
    size: {
      sm: 'rounded-xs h-4 w-4',
      md: 'h-5 w-5 rounded-sm',
      'tag-sm': 'rounded-xs h-3.5 w-3.5',
      'tag-md': 'rounded-xs h-4 w-4',
      'tag-lg': 'w-4.5 h-4.5 rounded-xs',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

type Child = React.ReactElement<any, string | React.JSXElementConstructor<any>>;

/**
 * Props for the Checkbox component.
 */
export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariant> {
  /**
   * The icon to be displayed when the checkbox is checked.
   */
  icon?: React.ReactNode;
}

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>((props, ref) => {
  const { className, checked, icon = <CheckboxIcon checked={checked} className="h-3 w-3" />, size, ...etc } = props;

  const iconProp = icon as Child;

  const iconRender = React.cloneElement(iconProp, {
    ...iconProp.props,
    className: cn(
      'w-3 h-3 group-data-[state=checked]:visible group-data-[state=unchecked]:invisible',
      iconProp?.props?.className
    ),
    checked,
  });

  return (
    <CheckboxPrimitive.Root checked={checked} ref={ref} className={cn(checkboxVariant({ size, className }))} {...etc}>
      <CheckboxPrimitive.Indicator
        forceMount
        className={cn('group -mt-px flex items-center justify-center text-current')}
      >
        {iconRender}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
