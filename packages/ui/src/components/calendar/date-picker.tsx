import React, { forwardRef, type ElementRef, type ReactNode } from 'react';
import { useDatePicker, type UseDatePickerProps } from 'react-calendar-kit';

import { useMergedRef } from '../../hooks';
import { cn } from '../../utils/cn';
import { PopperFreeSolo, type PopperProps } from '../popper';
import CalendarButton, { type CalendarButtonProps } from './calendar-button';
import { DateInput, TimeInput, type DateInputProps } from './calendar-input';
import { Calendar } from './calendar-primitives';

export interface DatePickerProps extends UseDatePickerProps {
  triggerProps?: CalendarButtonProps;
  inputProps?: DateInputProps;
  popperProps?: PopperProps;
  withTimeInput?: boolean;
  withPicker?: boolean;
  timeInputWrapperClassName?: string;
  timeInputLabel?: string;
  timeInputLabelClassName?: string;
}

const DatePicker = forwardRef<ElementRef<typeof DateInput>, DatePickerProps>(
  (
    {
      triggerProps,
      inputProps,
      timeInputLabel = 'Time',
      timeInputLabelClassName,
      timeInputWrapperClassName,
      popperProps,
      withTimeInput,
      withPicker = true,
      ...props
    },
    forwardedRef
  ) => {
    const { ref, state, getCalendarProps, getTimeInputProps, getDateInputProps, getDialogProps, getTriggerProps } =
      useDatePicker(props);
    const inputRev = useMergedRef(forwardedRef, ref);

    return (
      <PopperFreeSolo
        unstyled
        onOpenChange={state.setOpen}
        open={state.isOpen}
        align="start"
        fitContent
        trigger={
          <DateInput
            {...getDateInputProps}
            {...inputProps}
            ref={inputRev}
            endContent={<CalendarButton {...triggerProps} {...getTriggerProps} />}
          />
        }
        {...popperProps}
      >
        <div {...getDialogProps}>
          <Calendar
            {...getCalendarProps}
            visibleMonths={1}
            weekdayStyle="short"
            withPicker={withPicker}
            footer={
              withTimeInput ? (
                <div
                  className={cn(
                    'flex w-full flex-nowrap items-center justify-between gap-6 px-4 pb-4',
                    timeInputWrapperClassName
                  )}
                >
                  <div className={cn('text-sm', timeInputLabelClassName)}>{timeInputLabel}</div>
                  <TimeInput size="xs" fullWidth {...getTimeInputProps} />
                </div>
              ) : null
            }
          />
        </div>
      </PopperFreeSolo>
    );
  }
);

export default DatePicker;
