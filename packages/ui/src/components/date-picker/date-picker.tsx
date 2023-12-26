import { cn } from '@hashgraph/utils';
import { type ElementRef, forwardRef, useState } from 'react';
import { Caption } from 'react-day-picker';

import { Button } from '../button';
import { Calendar, type CalendarProps } from './calendar';
import { DateInput } from './date-input';

type DateValue = Date | undefined;

export interface DatePickerProps {
  calendarProps?: CalendarProps;
  className?: string;
  onChange?: (value: DateValue) => void;
  value?: DateValue;
  onCancel?: () => void;
}

const DatePicker = forwardRef<ElementRef<'div'>, DatePickerProps>((props, ref) => {
  const { value, onChange, calendarProps, className, onCancel, ...etc } = props;
  const [date, setDate] = useState<DateValue>(value ? new Date(new Date(value).setHours(0, 0, 0, 0)) : undefined);

  const handleApply = () => {
    onChange?.(date);
  };

  const resetValue = () => {
    setDate(typeof value === 'string' ? new Date(value) : value);
  };

  const handleCancel = () => {
    onCancel?.();
    resetValue();
  };

  const handleSetToday = () => {
    const preset = new Date();
    preset.setHours(0, 0, 0, 0);
    setDate(preset);
  };

  return (
    <div
      className={cn('w-fit relative flex flex-col text-gray-700 rounded-xl bg-base-white shadow-xl', className)}
      ref={ref}
      {...etc}
    >
      <div className="w-full px-6 absolute top-16 left-0">
        <div className="flex w-full gap-3">
          <DateInput single value={date} onChange={setDate} />
          <Button onClick={handleSetToday} className="min-w-[70px]" size="md" variant="secondary-gray">
            Today
          </Button>
        </div>
      </div>

      <Calendar
        mode="single"
        selected={date as any}
        onSelect={((d: DateValue) => setDate(d)) as any}
        unstyled
        components={{
          Caption: (props) => (
            <div className="mb-16">
              <Caption {...props} />
            </div>
          ),
        }}
        {...calendarProps}
        className={cn('px-6 py-5', calendarProps?.className)}
      />
      <div className="flex w-full gap-3 p-4 border-t border-gray-200">
        <Button fullWidth variant="secondary-gray" onClick={handleCancel}>
          Cancel
        </Button>
        <Button fullWidth onClick={handleApply}>
          Apply
        </Button>
      </div>
    </div>
  );
});

DatePicker.displayName = 'DatePicker';

export { DatePicker };
