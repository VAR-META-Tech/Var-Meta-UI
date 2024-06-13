import React, { forwardRef, type ElementRef } from 'react';
import {
  DateInput as CalendarKitDateInput,
  DateRangeInput as CalendarKitDateRangeInput,
  TimeInput as CalendarKitTimeInput,
  type DateInputProps as CalendarKitDateInputProps,
  type DateRangeInputProps as CalendarKitDateRangeInputProps,
  type TimeInputProps as CalendarKitTimeInputProps,
} from 'react-calendar-kit';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '../../utils/cn';
import { radiusVariant } from '../../utils/variant-common';
import { labelVariants } from '../label';

const dateInputVariants = tv({
  base: 'flex gap-2 items-center justify-between border',
  variants: {
    variant: {
      default: 'bg-input border-input-border focus-within:shadow-brand-xs focus-within:border-brand-300',
      background: 'bg-background border-input-border focus-within:shadow-brand-xs focus-within:border-brand-300',
      destructive: 'bg-input border-error-300 focus-within:shadow-error-xs focus-within:border-error-300',
    },
    size: {
      none: 'min-h-0',
      xs: 'h-8 px-3 py-1',
      sm: 'h-10 px-3 py-2',
      md: 'h-11 px-3.5 py-2.5',
    },
    disabled: {
      true: 'shadow-xs bg-background-disabled text-disabled cursor-not-allowed',
    },
    readOnly: {
      true: 'bg-input border-input-border cursor-default',
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-fit',
    },
    radius: radiusVariant,
  },
  defaultVariants: {
    size: 'md',
    radius: 'xs',
    fullWidth: false,
    variant: 'default',
  },
});

export interface DateRangeInputProps extends CalendarKitDateRangeInputProps, VariantProps<typeof dateInputVariants> {
  labelStyleProps?: VariantProps<typeof labelVariants>;
  segmentClassName?: string;
  segmentWrapperClassName?: string;
}

const DateRangeInput = forwardRef<ElementRef<typeof CalendarKitDateRangeInput>, DateRangeInputProps>((props, ref) => {
  const {
    labelStyleProps = {},
    segmentClassName,
    segmentWrapperClassName,
    disabled = false,
    readOnly = false,
    variant = 'default',
    fullWidth,
    size,
    radius,
    ...etc
  } = props;

  return (
    <CalendarKitDateRangeInput
      ref={ref}
      classNames={{
        root: fullWidth ? 'w-full' : 'w-fit',
        rangeGroup: 'flex items-center',
        group: dateInputVariants({ radius, variant, fullWidth, disabled, readOnly, size }),
        separator: 'mx-1.5',
        label: labelVariants({ ...labelStyleProps }),
        segmentWrapper: cn('flex gap-0.5 items-center w-fit', segmentWrapperClassName),
        segment: cn(
          'data-[placeholder=true]:text-foreground-secondary outline-none px-0.5 rounded-xs focus:bg-background-light focus:text-foreground text-foreground data-[type=literal]:text-foreground-secondary',
          segmentClassName
        ),
      }}
      {...etc}
    />
  );
});

export interface DateInputProps extends CalendarKitDateInputProps, VariantProps<typeof dateInputVariants> {
  labelStyleProps?: VariantProps<typeof labelVariants>;
  segmentClassName?: string;
  segmentWrapperClassName?: string;
}

const DateInput = forwardRef<ElementRef<typeof CalendarKitDateInput>, DateInputProps>((props, ref) => {
  const {
    labelStyleProps = {},
    segmentClassName,
    segmentWrapperClassName,
    disabled = false,
    readOnly = false,
    variant = 'default',
    fullWidth,
    size,
    radius,
    ...etc
  } = props;
  return (
    <CalendarKitDateInput
      ref={ref}
      classNames={{
        root: fullWidth ? 'w-full' : '',
        group: dateInputVariants({ radius, variant, fullWidth, disabled, readOnly, size }),
        label: labelVariants({ ...labelStyleProps }),
        segmentWrapper: cn('flex gap-0.5 items-center w-fit', segmentWrapperClassName),
        segment: cn(
          'data-[placeholder=true]:text-foreground-secondary outline-none px-0.5 rounded-xs focus:bg-background-light focus:text-foreground text-foreground data-[type=literal]:text-foreground-secondary',
          segmentClassName
        ),
      }}
      {...etc}
    />
  );
});

export interface TimeInputProps extends CalendarKitTimeInputProps, VariantProps<typeof dateInputVariants> {
  labelStyleProps?: VariantProps<typeof labelVariants>;
  segmentClassName?: string;
  segmentWrapperClassName?: string;
}

const TimeInput = forwardRef<ElementRef<typeof CalendarKitTimeInput>, TimeInputProps>((props, ref) => {
  const {
    labelStyleProps = {},
    segmentClassName,
    segmentWrapperClassName,
    disabled = false,
    readOnly = false,
    variant = 'default',
    fullWidth,
    size,
    radius,
    ...etc
  } = props;
  return (
    <CalendarKitTimeInput
      ref={ref}
      classNames={{
        root: fullWidth ? 'w-full' : '',
        group: dateInputVariants({ radius, variant, fullWidth, disabled, readOnly, size }),
        label: labelVariants({ ...labelStyleProps }),
        segmentWrapper: 'flex gap-1 items-center w-fit',
        segment: cn(
          'data-[placeholder=true]:text-foreground-secondary outline-none px-0.5 rounded-xs focus:bg-background-light focus:text-foreground text-foreground data-[type=literal]:text-foreground-secondary',
          segmentClassName
        ),
      }}
      {...etc}
    />
  );
});

export { DateInput, DateRangeInput, TimeInput };
