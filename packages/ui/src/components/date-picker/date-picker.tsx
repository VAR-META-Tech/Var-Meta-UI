import { cn } from '@hashgraph/utils';
import { Portal } from '@radix-ui/react-portal';
import { format } from 'date-fns';
import React, { type ElementRef, useLayoutEffect } from 'react';
import type { SelectSingleEventHandler } from 'react-day-picker';

import { usePopover } from '../../hooks';
import { useClickOutside } from '../../hooks/useClickOutSide';
import useVisibleAction from '../../hooks/useVisibleAction';
import { Button, type ButtonProps } from '../button';
import { CalendarIcon } from '../icons';
import { Calendar, type CalendarProps } from './calendar';

export interface DatePickerProps extends Omit<ButtonProps, 'onChange' | 'value'> {
  onChange: (date?: Date) => void;
  value?: Date;
  calendarProps?: CalendarProps;
  disablePast?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}
const DatePicker = React.forwardRef<ElementRef<'button'>, DatePickerProps>(
  ({ onChange, value, calendarProps, disablePast, open: openProp, defaultOpen, onOpenChange, ...props }, ref) => {
    const [inputValue, setInputValue] = React.useState<string>('');
    const { opened, floatingStyles, refs, setOpen } = usePopover({
      open: openProp,
      defaultOpen,
      onOpenChange,
      placement: 'bottom-start',
    });
    const { open, close } = useVisibleAction([opened, setOpen]);

    const popoverRef = useClickOutside(close);

    /**
     * * Init value for input
     */
    useLayoutEffect(() => {
      if (inputValue || !value) return;

      setInputValue(format(value, 'dd/MM/yyyy'));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    /**
     * * Init value for input
     */
    useLayoutEffect(() => {
      if (inputValue && !value) setInputValue('');
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const handleSelect: SelectSingleEventHandler = (date) => {
      if (!date) {
        return;
      }
      onChange(date);
      setInputValue(format(date, 'dd/MM/yyyy'));
    };

    return (
      <div>
        <div className="relative" ref={refs.setReference}>
          <Button variant="secondary-gray" ref={ref} {...props} onClick={open}>
            <CalendarIcon />
            {value ? format(value, 'dd/MM/yyyy') : 'Select date'}
          </Button>
        </div>
        {opened && (
          <Portal>
            <div
              ref={refs.setFloating}
              style={floatingStyles}
              className={cn(
                'bg-popover shadow-popover z-50 min-h-[40px] w-fit overflow-hidden rounded-md outline-none'
              )}
              onClick={open}
            >
              <div ref={popoverRef}>
                <Calendar
                  {...calendarProps}
                  mode="single"
                  selected={value}
                  defaultMonth={value}
                  onSelect={handleSelect}
                  disablePast={disablePast}
                />
              </div>
            </div>
          </Portal>
        )}
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';

export { DatePicker };
