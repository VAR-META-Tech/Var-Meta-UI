import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { assignRef } from '../../hooks/useMergedRef';
import { cn } from '../../utils/cn';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '../icons';

const SelectProvider = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Value>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Value>
>((props, ref) => {
  return (
    <div className="truncate whitespace-nowrap">
      <SelectPrimitive.Value ref={ref} {...props} />
    </div>
  );
});

export const selectTriggerVariants = cva(
  cn([
    'flex items-center justify-between text-foreground data-[placeholder]:text-muted disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
    'border outline-none bg-background rounded-md',
    'focus:outline-none outline-none group',
  ]),
  {
    variants: {
      variant: {
        default: 'border-border data-[state=open]:shadow-brand-xs data-[state=open]:border-brand-300',
        destructive:
          'border-error-300 bg-background data-[state=open]:shadow-error-xs data-[state=open]:border-error-300',
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
        <ChevronDownIcon className="group-data-[state=open]:rotate-180 ml-2 h-5 w-5 text-foreground transition-transform" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronUpIcon className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronDownIcon className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

interface SelectContentProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {
  withScrollAction?: boolean;
}

const SelectContent = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Content>, SelectContentProps>(
  ({ className, withScrollAction = true, children, position = 'popper', ...props }, forwardedRef) => {
    const selectRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        selectRef.current?.removeEventListener('touchend', (e) => e.cancelable && e.preventDefault());
      };
    }, []);

    return (
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          ref={(ref) => {
            if (!ref) return;
            assignRef(forwardedRef, ref);
            assignRef(selectRef, ref);
            selectRef.current?.addEventListener('touchend', (e) => e.cancelable && e.preventDefault());
          }}
          className={cn(
            'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 mt-1 min-w-[8rem] overflow-hidden rounded-md border border-border-secondary text-foreground shadow-lg',
            position === 'popper' &&
              'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
            className
          )}
          position={position}
          {...props}
        >
          {withScrollAction ? <SelectScrollUpButton /> : null}
          <SelectPrimitive.Viewport
            className={cn(
              'p-1',
              position === 'popper' &&
                'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
            )}
          >
            {children}
          </SelectPrimitive.Viewport>
          {withScrollAction ? <SelectScrollDownButton /> : null}
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    );
  }
);
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
      'hover:bg-background-secondary data-[disabled]:pointer-events-none data-[state=checked]:bg-background-secondary data-[disabled]:opacity-50 relative flex w-full cursor-pointer select-none items-center rounded-sm py-2.5 pl-2 pr-9 text-base outline-none focus:bg-background-secondary',
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>

    <span className="absolute right-2.5 flex h-5 w-5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="h-5 w-5 text-brand-600" />
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
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
