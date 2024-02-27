import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '../../utils/cn';
import { CheckboxIcon } from './checkbox-icon';

const checkboxVariant = cva(
  [
    'border-gray-300 focus-visible:outline-none focus-visible:shadow-brand-base',
    'data-[state=indeterminate]:bg-brand-600 data-[state=indeterminate]:border-brand-600 data-[state=indeterminate]:text-white',
    'data-[state=checked]:bg-brand-600 data-[state=checked]:border-brand-600 data-[state=checked]:text-white',
    'shrink-0 border disabled:cursor-not-allowed disabled:bg-gray-50 disabled:border-gray-300 disabled:!text-gray-300 disabled:focus-visible:shadow-gray-base',
    'disabled:data-[state=checked]:border-gray-300 disabled:data-[state=checked]:bg-gray-50',
    'disabled:data-[state=indeterminate]:border-gray-300 disabled:data-[state=indeterminate]:bg-gray-50 ',
  ],
  {
    variants: {
      size: {
        sm: 'w-4 h-4 rounded-xs',
        md: 'w-5 h-5 rounded-sm',
        'tag-sm': 'w-3.5 h-3.5 rounded-xs',
        'tag-md': 'w-4 h-4 rounded-xs',
        'tag-lg': 'w-4.5 h-4.5 rounded-xs',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
);

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
  const { className, checked, icon = <CheckboxIcon checked={checked} className="w-4 h-4" />, size, ...etc } = props;

  const iconProp = icon as Child;

  const iconRender = React.cloneElement(iconProp, {
    ...iconProp.props,
    className: cn(
      'w-4 h-4 group-data-[state=checked]:visible group-data-[state=unchecked]:invisible',
      iconProp?.props?.className
    ),
    checked,
  });

  return (
    <CheckboxPrimitive.Root checked={checked} ref={ref} className={cn(checkboxVariant({ size, className }))} {...etc}>
      <CheckboxPrimitive.Indicator forceMount className={cn('flex items-center justify-center text-current group')}>
        {iconRender}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
