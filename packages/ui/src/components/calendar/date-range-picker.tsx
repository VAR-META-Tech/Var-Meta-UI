import React, { forwardRef, type ElementRef } from 'react';
import { useDateRangePicker, type RangeCalendarProps, type UseDateRangePickerProps } from 'react-calendar-kit';

import { useMergedRef } from '../../hooks';
import { cn } from '../../utils/cn';
import { PopperFreeSolo, type PopperProps } from '../popper';
import CalendarButton, { type CalendarButtonProps } from './calendar-button';
import { DateRangeInput, TimeInput, type DateRangeInputProps } from './calendar-input';
import { RangeCalendar } from './calendar-primitives';

export interface DateRangePickerProps
  extends UseDateRangePickerProps,
    Pick<RangeCalendarProps, 'weekdayStyle' | 'visibleMonths'> {
  triggerProps?: CalendarButtonProps;
  inputProps?: Partial<DateRangeInputProps>;
  popperProps?: PopperProps;
  withTimeInput?: boolean;
  /** When this true, visible month will be forced to be 1 */
  withPicker?: boolean;

  /** Styles for time input container*/
  timeInputContainerClassName?: string;

  /** Styles for time input */
  timeInputWrapperClassName?: string;

  /** Styles for label of time input */
  timeInputLabelClassName?: string;

  /** Label for start time input, hidden when visible month = 1 or with Picker true */
  startTimeInputLabel?: string;

  /** Label for end time input, hidden when visible month = 1 or with Picker true */
  endTimeInputLabel?: string;
}
const DateRangePicker = forwardRef<ElementRef<typeof DateRangeInput>, DateRangePickerProps>(
  (
    {
      triggerProps,
      inputProps,
      popperProps,
      timeInputLabelClassName,
      timeInputWrapperClassName,
      timeInputContainerClassName,
      withTimeInput,
      withPicker,
      startTimeInputLabel = 'Start',
      endTimeInputLabel = 'End',
      weekdayStyle = 'short',
      visibleMonths = 1,
      ...props
    },
    forwardedRef
  ) => {
    const { ref, state, getCalendarProps, getDateRangeProps, getDialogProps, getTriggerProps, getTimeInputRangeProps } =
      useDateRangePicker(props);
    const inputRef = useMergedRef(forwardedRef, ref);

    const visibleM = withPicker ? 1 : visibleMonths;

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
        {...popperProps}
      >
        <div {...getDialogProps}>
          <RangeCalendar
            {...getCalendarProps}
            visibleMonths={visibleM}
            weekdayStyle={weekdayStyle}
            withPicker={withPicker}
            footer={
              withTimeInput ? (
                <div
                  className={cn(
                    'flex w-full flex-nowrap px-4 pb-4',
                    visibleM > 1 ? 'gap-6' : 'gap-2',
                    timeInputContainerClassName
                  )}
                >
                  <div
                    className={cn(
                      'flex w-1/2 flex-nowrap items-center justify-between gap-6',
                      timeInputWrapperClassName
                    )}
                  >
                    {visibleM > 1 ? (
                      <div className={cn('text-sm', timeInputLabelClassName)}>{startTimeInputLabel}</div>
                    ) : null}
                    <TimeInput size="xs" fullWidth {...getTimeInputRangeProps.getStartTimeInputProps} />
                  </div>

                  <div
                    className={cn(
                      'flex w-1/2 flex-nowrap items-center justify-between gap-6',
                      timeInputWrapperClassName
                    )}
                  >
                    {visibleM > 1 ? (
                      <div className={cn('text-sm', timeInputLabelClassName)}>{endTimeInputLabel}</div>
                    ) : null}
                    <TimeInput size="xs" fullWidth {...getTimeInputRangeProps.getEndTimeInputProps} />
                  </div>
                </div>
              ) : null
            }
          />
        </div>
      </PopperFreeSolo>
    );
  }
);

export default DateRangePicker;
