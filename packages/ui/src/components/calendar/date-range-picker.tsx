import React, { forwardRef, type ElementRef } from 'react';
import { useDateRangePicker, type UseDateRangePickerProps } from 'react-calendar-kit';

import { useMergedRef } from '../../hooks';
import { PopperFreeSolo } from '../popper';
import CalendarButton, { type CalendarButtonProps } from './calendar-button';
import { DateRangeInput, type DateRangeInputProps } from './calendar-input';
import { RangeCalendar } from './calendar-primitives';

export interface DateRangePickerProps extends UseDateRangePickerProps {
  triggerProps?: CalendarButtonProps;
  inputProps?: Partial<DateRangeInputProps>;
}
const DateRangePicker = forwardRef<ElementRef<typeof DateRangeInput>, DateRangePickerProps>(
  ({ triggerProps, inputProps, ...props }, forwardedRef) => {
    const { ref, state, getCalendarProps, getDateRangeProps, getDialogProps, getTriggerProps } =
      useDateRangePicker(props);
    const inputRef = useMergedRef(forwardedRef, ref);

    return (
      <PopperFreeSolo
        unstyled
        onOpenChange={state.setOpen}
        open={state.isOpen}
        align="end"
        fitContent
        trigger={
          <DateRangeInput
            {...getDateRangeProps}
            {...inputProps}
            ref={inputRef}
            endContent={<CalendarButton {...triggerProps} {...getTriggerProps} />}
          />
        }
      >
        <div {...getDialogProps}>
          <RangeCalendar {...getCalendarProps} />
        </div>
      </PopperFreeSolo>
    );
  }
);

export default DateRangePicker;
