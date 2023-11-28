import { cn } from '@hashgraph/utils';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { Dot } from '../dot';

export interface RadioGroupProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {}

const RadioGroup = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupProps>(
  ({ className, ...props }, ref) => {
    return <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} ref={ref} />;
  }
);
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const radioGroupVariant = cva(
  [
    'border-gray-300 focus-visible:outline-none focus-visible:shadow-brand rounded-full',
    'data-[state=checked]:bg-brand-600 data-[state=checked]:border-brand-600 data-[state=checked]:text-base-white',
    'shrink-0 border disabled:cursor-not-allowed disabled:bg-gray-50 disabled:border-gray-300 disabled:!text-gray-300',
    'disabled:data-[state=checked]:border-gray-300 disabled:data-[state=checked]:bg-gray-50 disabled:focus-visible:shadow-gray',
  ],
  {
    variants: {
      size: {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
);

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioGroupVariant> {}

const RadioGroupItem = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, RadioGroupItemProps>(
  // eslint-disable-next-line unused-imports/no-unused-vars
  ({ className, size, children, ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Item ref={ref} className={cn(radioGroupVariant({ size }), className)} {...props}>
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <Dot variant="solid" type={props.disabled ? 'disabled' : 'white'} />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    );
  }
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
