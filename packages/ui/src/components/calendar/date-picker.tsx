import React, { forwardRef, type ElementRef, type ReactNode } from 'react';
import { useDatePicker, type UseDatePickerProps } from 'react-calendar-kit';

import { useMergedRef } from '../../hooks';
import { PopperFreeSolo, type PopperProps } from '../popper';
import CalendarButton, { type CalendarButtonProps } from './calendar-button';
import { DateInput, type DateInputProps } from './calendar-input';
import { Calendar } from './calendar-primitives';

export interface DatePickerProps extends UseDatePickerProps {
  triggerProps?: CalendarButtonProps;
  inputProps?: DateInputProps;
  popperProps?: PopperProps;
}

const DatePicker = forwardRef<ElementRef<typeof DateInput>, DatePickerProps>(
  ({ triggerProps, inputProps, popperProps, ...props }, forwardedRef) => {
    const { ref, state, getCalendarProps, getDateInputProps, getDialogProps, getTriggerProps } = useDatePicker(props);
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
          <Calendar {...getCalendarProps} visibleMonths={1} weekdayStyle="short" withPicker />
        </div>
      </PopperFreeSolo>
    );
  }
);

export default DatePicker;
