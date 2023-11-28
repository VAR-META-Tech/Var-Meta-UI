import { cn } from '@hashgraph/utils';
import * as SelectPrimitive from '@radix-ui/react-select';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import * as React from 'react';

import { CheckIcon, ChevronDownIcon } from '../icons';

const SelectProvider = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Value>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Value>
>((props, ref) => {
  return (
    <div className="truncate whitespace-nowrap placeholder:text-gray-500">
      <SelectPrimitive.Value ref={ref} {...props} />
    </div>
  );
});

export const selectTriggerVariants = cva(
  cn([
    'flex items-center justify-between text-gray-900 placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
    'border outline-none bg-base-white rounded-md',
    'focus:outline-none outline-none group',
  ]),
  {
    variants: {
      variant: {
        default: 'border-gray-300 data-[state=open]:shadow-brand-xs data-[state=open]:border-brand-300',
        destructive:
          'border-error-300 bg-base-white data-[state=open]:shadow-error-xs data-[state=open]:border-error-300',
      },
      size: {
        none: '',
        sm: 'h-10 px-3 py-2',
        md: 'h-11 px-3.5 py-2.5',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);
export interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
    VariantProps<typeof selectTriggerVariants> {
  fullWidth?: boolean;
}

const SelectTrigger = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Trigger>, SelectTriggerProps>(
  ({ className, variant, size, fullWidth, children, ...props }, ref) => (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(fullWidth && 'w-full', selectTriggerVariants({ variant, size, className }))}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="ml-2 h-5 w-5 transition-transform group-data-[state=open]:rotate-180" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'bg-base-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 mt-1 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 text-gray-500 shadow-lg',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label ref={ref} className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)} {...props} />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'hover:bg-gra-50 relative flex w-full cursor-pointer select-none items-center rounded-sm py-2.5 pl-2 pr-9 text-base outline-none focus:bg-gray-50 data-[disabled]:pointer-events-none data-[state=checked]:bg-gray-50 data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>

    <span className="absolute right-2.5 flex h-5 w-5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="h-5 w-5" />
      </SelectPrimitive.ItemIndicator>
    </span>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator ref={ref} className={cn('bg-muted -mx-1 my-1 h-px', className)} {...props} />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectProvider,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
