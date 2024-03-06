import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { type AccordionContext, AccordionProvider, useAccordionContext } from './accordion-context';
export interface AccordionSingleProps extends AccordionContext, AccordionPrimitive.AccordionSingleProps {}
export interface AccordionMultipleProps extends AccordionContext, AccordionPrimitive.AccordionMultipleProps {}

const iconSize: Record<string, string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

const accordionVariant = cva('flex flex-col [&>div:first-of-type]:border-none', {
  variants: {
    variant: {
      default: '',
      outline: 'border border-divider',
      solid: 'bg-background shadow-sm',
    },
    rounded: {
      default: '',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface AccordionProps
  extends AccordionContext,
    ElementProps<typeof AccordionPrimitive.Root>,
    Pick<VariantProps<typeof accordionVariant>, 'rounded'> {
  className?: string;
}

const Accordion = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Root>, AccordionProps>(
  (props: any, ref) => {
    const {
      children,
      divider = false,
      activeIcon = <ChevronDownIcon className={iconSize[props.size ?? 'md']} />,
      inactiveIcon = <ChevronUpIcon className={iconSize[props.size ?? 'md']} />,
      iconPosition = 'right',
      hideIcon,
      size,
      variant,
      rounded,
      singleIndicator,
      className,
      type = 'single',
      ...etc
    } = props;

    return (
      <AccordionProvider
        value={{
          size,
          divider,
          variant,
          activeIcon,
          inactiveIcon,
          iconPosition,
          hideIcon,
          singleIndicator,
        }}
      >
        <AccordionPrimitive.Root {...etc} type={type} ref={ref}>
          <div className={cn(accordionVariant({ variant, rounded, className }))}>{children}</div>
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
      <AccordionPrimitive.Item ref={ref} className={cn({ 'border-t border-divider': divider }, className)} {...props} />
    );
  }
);

AccordionItem.displayName = 'AccordionItem';

const accordionTriggerVariant = cva('flex flex-1 items-center text-foreground group gap-6 font-medium transition-all', {
  variants: {
    variant: {
      default: '',
      outline: '',
      solid: '',
    },
    size: {
      sm: 'text-sm py-2 px-4',
      md: 'text-md py-3 px-4',
      lg: 'text-lg py-4 px-4',
    },
    singleIndicator: {
      true: '[&_svg]:transition-all [&[data-state=open]_svg]:rotate-180',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface AccordionTriggerProps
  extends ElementProps<typeof AccordionPrimitive.Trigger>,
    VariantProps<typeof accordionTriggerVariant> {}

const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, AccordionTriggerProps>(
  ({ className, children, size: sizeProp, variant: variantProp, ...props }, ref) => {
    const { iconPosition, size, hideIcon, singleIndicator, activeIcon, variant, inactiveIcon } = useAccordionContext();

    return (
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          ref={ref}
          className={cn(
            accordionTriggerVariant({ variant: variantProp ?? variant, singleIndicator, size: sizeProp ?? size }),
            iconPosition === 'left' ? 'flex-row-reverse justify-end' : 'flex-row justify-between',
            className
          )}
          {...props}
        >
          {children}

          {hideIcon ? null : (
            <>
              {singleIndicator ? (
                <div className="block w-6">{inactiveIcon}</div>
              ) : (
                <>
                  <div className="group-aria-expanded:hidden block w-6">{inactiveIcon}</div>
                  <div className="group-aria-expanded:block hidden w-6">{activeIcon}</div>
                </>
              )}
            </>
          )}
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );
  }
);
AccordionPrimitive.AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const accordionContentVariant = cva('', {
  variants: {
    variant: {
      default: '',
      outline: '',
      solid: '',
    },
    size: {
      sm: 'text-sm pb-4 px-4',
      md: 'text-md pb-4 px-4',
      lg: 'text-lg pb-4 px-4',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface AccordionContentProps
  extends ElementProps<typeof AccordionPrimitive.Content>,
    VariantProps<typeof accordionContentVariant> {}

const AccordionContent = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Content>, AccordionContentProps>(
  ({ className, children, size: sizeProp, variant: variantProp, ...props }, ref) => {
    const { iconPosition, hideIcon, size, variant } = useAccordionContext();

    const shiftClassName = iconPosition === 'left' ? 'pl-12' : 'pr-12';

    return (
      <AccordionPrimitive.Content
        ref={ref}
        className={cn(
          'overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
          { [shiftClassName]: !hideIcon }
        )}
        {...props}
      >
        <div
          className={cn(
            accordionContentVariant({ variant: variantProp ?? variant, size: sizeProp ?? size }),
            className
          )}
        >
          {children}
        </div>
      </AccordionPrimitive.Content>
    );
  }
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
