import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '@swiss-digital-assets-institute/utils';
import * as React from 'react';

import { type ElementProps } from '../../types';
import { MinusCircleIcon, PlusCircleIcon } from '../icons';
import { type AccordionContext, AccordionProvider, useAccordionContext } from './accordion-context';

export interface AccordionSingleProps extends AccordionContext, AccordionPrimitive.AccordionSingleProps {}
export interface AccordionMultipleProps extends AccordionContext, AccordionPrimitive.AccordionMultipleProps {}
export interface AccordionProps extends AccordionContext, ElementProps<typeof AccordionPrimitive.Root> {}

const Accordion = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Root>, AccordionProps>(
  (
    {
      children,
      divider = false,
      activeIcon = <MinusCircleIcon />,
      inactiveIcon = <PlusCircleIcon />,
      iconPosition = 'right',
      hideIcon,
      ...props
    }: any,
    ref
  ) => {
    return (
      <AccordionProvider value={{ divider, activeIcon, inactiveIcon, iconPosition, hideIcon }}>
        <AccordionPrimitive.Root {...props} ref={ref}>
          <div className="flex flex-col gap-4">{children}</div>
        </AccordionPrimitive.Root>
      </AccordionProvider>
    );
  }
);

export interface AccordionItemProps extends ElementProps<typeof AccordionPrimitive.Item> {}

const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, AccordionItemProps>(
  ({ className, ...props }, ref) => {
    const { divider = false } = useAccordionContext();
    return (
      <AccordionPrimitive.Item
        ref={ref}
        className={cn({ 'border-t border-gray-200 pt-6': divider }, className)}
        {...props}
      />
    );
  }
);
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  ElementProps<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { iconPosition, hideIcon, activeIcon, inactiveIcon } = useAccordionContext();

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          'flex flex-1 items-center text-lg text-gray-900 group gap-6 font-medium transition-all [&[data-state=open]>svg]:rotate-180',
          iconPosition === 'left' ? 'flex-row-reverse justify-end' : 'flex-row justify-between',
          className
        )}
        {...props}
      >
        {children}
        {hideIcon ? null : (
          <>
            <div className="group-aria-expanded:hidden block w-6">{inactiveIcon}</div>
            <div className="group-aria-expanded:block hidden w-6">{activeIcon}</div>
          </>
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  ElementProps<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const { iconPosition, hideIcon } = useAccordionContext();

  const shiftClassName = iconPosition === 'left' ? 'pl-12' : 'pr-12';

  return (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div
        className={cn(
          'pb-4 pt-2 text-md text-gray-600',
          {
            [shiftClassName]: !hideIcon,
          },
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
});

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
