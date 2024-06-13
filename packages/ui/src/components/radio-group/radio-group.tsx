import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '../../utils/cn';

export interface RadioGroupProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {}

const RadioGroup = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupProps>(
  ({ className, ...props }, ref) => {
    return <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} ref={ref} />;
  }
);
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const radioVariant = tv({
  base: [
    'border-border focus-visible:shadow-brand-base rounded-full focus-visible:outline-none',
    'data-[state=checked]:bg-button data-[state=checked]:border-button data-[state=checked]:text-foreground-button',
    'disabled:border-border disabled:!text-foreground-disabled shrink-0 border disabled:cursor-not-allowed disabled:bg-disabled',
    'disabled:data-[state=checked]:border-border disabled:focus-visible:shadow-gray-base disabled:data-[state=checked]:bg-disabled hover:bg-background-light transition-colors duration-300',
  ],
  variants: {
    size: {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioVariant> {}

const RadioGroupItem = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, RadioGroupItemProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Item ref={ref} className={cn(radioVariant({ size }), className)} {...props}>
        <RadioGroupPrimitive.Indicator asChild>
          <span
            className={cn('mx-auto block h-2 w-2 min-w-2 rounded-full bg-current', {
              'h-1.5 w-1.5 min-w-1.5': size === 'sm',
            })}
          />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    );
  }
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
