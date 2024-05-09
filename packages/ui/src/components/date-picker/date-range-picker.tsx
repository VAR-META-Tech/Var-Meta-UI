import React, { forwardRef, useMemo, useState, type ElementRef } from 'react';
import { Caption } from 'react-day-picker';

import { useMediaQuery } from '../../hooks';
import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { Button } from '../button';
import { Calendar } from './calendar';
import { DateInput } from './date-input';
import { PresetButton } from './preset-button';

const getPresetRange = (presetName: string): DateRange => {
  const preset = PRESETS.find(({ name }) => name === presetName);
  if (!preset) throw new Error(`Unknown date range preset: ${presetName}`);
  const from = new Date();
  const to = new Date();
  const first = from.getDate() - from.getDay();

  switch (preset.name) {
    case 'today':
      from.setHours(0, 0, 0, 0);
      to.setHours(23, 59, 59, 999);
      break;
    case 'yesterday':
      from.setDate(from.getDate() - 1);
      from.setHours(0, 0, 0, 0);
      to.setDate(to.getDate() - 1);
      to.setHours(23, 59, 59, 999);
      break;
    case 'thisWeek':
      from.setDate(first);
      from.setHours(0, 0, 0, 0);
      to.setHours(23, 59, 59, 999);
      break;
    case 'lastWeek':
      from.setDate(from.getDate() - 7 - from.getDay());
      to.setDate(to.getDate() - to.getDay() - 1);
      from.setHours(0, 0, 0, 0);
      to.setHours(23, 59, 59, 999);
      break;
    case 'thisMonth':
      from.setDate(1);
      from.setHours(0, 0, 0, 0);
      to.setHours(23, 59, 59, 999);
      break;
    case 'lastMonth':
      from.setMonth(from.getMonth() - 1);
      from.setDate(1);
      from.setHours(0, 0, 0, 0);
      to.setDate(0);
      to.setHours(23, 59, 59, 999);
      break;
    case 'thisYear':
      from.setMonth(0); // Set the month to January
      from.setDate(1); // Set the date to the 1st of the month
      from.setHours(0, 0, 0, 0);
      to.setMonth(11); // Set the month to December
      to.setDate(31); // Set the date to the last day of the month
      to.setHours(23, 59, 59, 999);
      break;
      break;
    case 'lastYear':
      const year = from.getFullYear() - 1; // Get the previous year
      from.setFullYear(year); // Set the year to the previous year
      from.setMonth(0); // Set the month to January
      from.setDate(1); // Set the date to the 1st of the month
      from.setHours(0, 0, 0, 0);
      to.setFullYear(year); // Set the year to the previous year
      to.setMonth(11); // Set the month to December
      to.setDate(31); // Set the date to the last day of the month
      to.setHours(23, 59, 59, 999);
      break;
  }

  return { from, to };
};

export interface DateRange {
  from: Date;
  to: Date | undefined;
}

interface Preset {
  name: string;
  label: string;
}

// Define presets
const PRESETS: Preset[] = [
  { name: 'today', label: 'Today' },
  { name: 'yesterday', label: 'Yesterday' },
  { name: 'thisWeek', label: 'This Week' },
  { name: 'lastWeek', label: 'Last Week' },
  { name: 'thisMonth', label: 'This Month' },
  { name: 'lastMonth', label: 'Last Month' },
  { name: 'thisYear', label: 'This Year' },
  { name: 'lastYear', label: 'Last Year' },
];

const MOBILE_PRESETS: Preset[] = [
  { name: 'lastWeek', label: 'Last Week' },
  { name: 'lastMonth', label: 'Last Month' },
  { name: 'lastYear', label: 'Last Year' },
];

export interface DateRangePickerProps extends ElementProps<'div', 'value' | 'onChange'> {
  /** Click handler for applying the updates from DateRangePicker. */
  onChange?: (range: DateRange) => void;
  /** Click handler for applying the updates from DateRangePicker. */
  onCancel?: () => void;
  /** Initial value for start date */
  from?: Date | string;
  /** Initial value for end date */
  to?: Date | string;

  withPreset?: boolean;
}

export const DateRangePicker = forwardRef<ElementRef<'div'>, DateRangePickerProps>((props, ref) => {
  const {
    from = new Date(new Date().setHours(0, 0, 0, 0)),
    to,
    onChange,
    onCancel,
    withPreset,
    className,
    ...etc
  } = props;

  const [range, setRange] = useState<DateRange>({
    from: new Date(new Date(from).setHours(0, 0, 0, 0)),
    to: to ? new Date(new Date(to).setHours(0, 0, 0, 0)) : new Date(new Date(from).setHours(0, 0, 0, 0)),
  });
  const isSmallScreen = useMediaQuery('(max-width: 48rem)');

  const [selectedPreset, setSelectedPreset] = useState<string | undefined>(undefined);
  // Refs to store the values of range and rangeCompare when the date picker is opened

  const setPreset = (preset: string): void => {
    setRange(getPresetRange(preset));
    setSelectedPreset(preset);
  };

  const resetValues = (): void => {
    setRange({
      from: typeof from === 'string' ? new Date(from) : from,
      to: to ? (typeof to === 'string' ? new Date(to) : to) : typeof from === 'string' ? new Date(from) : from,
    });
  };

  const handleApply = () => {
    onChange?.(range);
  };

  const handleCancel = () => {
    resetValues();
    onCancel?.();
  };

  const renderInputGroup = useMemo(
    () => (
      <div className="flex items-center justify-between gap-2 md:gap-3">
        <DateInput
          value={range.from}
          onChange={(date) => {
            const toDate = range.to == null || date > range.to ? date : range.to;
            setRange((prevRange) => ({
              ...prevRange,
              from: date,
              to: toDate,
            }));
          }}
        />
        <div className="text-md text-gray-500">–</div>
        <DateInput
          value={range.to}
          onChange={(date) => {
            const fromDate = date < range.from ? date : range.from;
            setRange((prevRange) => ({
              ...prevRange,
              from: fromDate,
              to: date,
            }));
          }}
        />
      </div>
    ),
    [range.from, range.to]
  );

  return (
    <div
      ref={ref}
      className={cn('w-fit flex text-foreground-secondary relative  rounded-xl bg-white shadow-xl', className)}
      {...etc}
    >
      {!isSmallScreen && withPreset && (
        <div className="w-[192px] hidden md:flex border-r border-gray-200 py-3 px-4 flex-col justify-start gap-1">
          {PRESETS.map((preset) => (
            <PresetButton
              onClick={setPreset}
              key={preset.name}
              preset={preset.name}
              label={preset.label}
              isSelected={selectedPreset === preset.name}
            />
          ))}
        </div>
      )}

      <div className="w-[280px] block top-16 inset-x-center md:hidden">
        <div className="block">{renderInputGroup}</div>
        {withPreset ? (
          <div className="flex justify-between mt-3 gap-2 overflow-auto">
            {MOBILE_PRESETS.map((preset) => (
              <PresetButton
                onClick={setPreset}
                key={preset.name}
                preset={preset.name}
                label={preset.label}
                isSelected={selectedPreset === preset.name}
              />
            ))}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col ">
        <Calendar
          className="md:px-6 border-gray-200 border-b"
          classNames={{
            caption_between: 'bg-red-500',
          }}
          components={{
            Caption: (props) =>
              isSmallScreen ? (
                <div
                  className={cn({
                    'mb-24': withPreset,
                    'mb-18': !withPreset,
                  })}
                >
                  <Caption {...props} />
                </div>
              ) : (
                <Caption {...props} />
              ),
          }}
          unstyled
          mode="range"
          onSelect={(value: { from?: Date; to?: Date } | undefined) => {
            if (value?.from != null) {
              setRange({ from: value.from, to: value?.to });
            }
          }}
          selected={range}
          numberOfMonths={isSmallScreen ? 1 : 2}
          defaultMonth={new Date(new Date().setMonth(new Date().getMonth() - (isSmallScreen ? 0 : 1)))}
          disablePast={false}
        />
        <div className="flex p-4 justify-between">
          <div className="md:block hidden">{renderInputGroup}</div>
          <div className="flex md:w-[155px] w-full gap-3">
            <Button fullWidth variant="link" onClick={handleCancel}>
              Cancel
            </Button>
            <Button fullWidth onClick={handleApply}>
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});

DateRangePicker.displayName = 'DateRangePicker';
