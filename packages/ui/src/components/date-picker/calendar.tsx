import { cn } from '@swiss-digital-assets-institute/utils';
import { type ComponentProps } from 'react';
import { DayPicker } from 'react-day-picker';

import { buttonVariants } from '../button/button';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons';
import { isPastDate } from './date-utils';

export type CalendarProps = ComponentProps<typeof DayPicker> & {
  disablePast?: boolean;
  unstyled?: boolean;
};

function Calendar({
  className,
  unstyled = false,
  classNames,
  showOutsideDays = true,
  disablePast,
  mode = 'single',
  components,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        { 'bg-base-white border border-gray-200 shadow-xl w-fit text-gray-700 rounded-xl px-6 py-5': !unstyled },
        className
      )}
      classNames={{
        months: cn('flex flex-col sm:flex-row space-y-4 sm:space-y-0', {
          'divide-x divide-gray-200': mode === 'range',
        }),
        month: cn('space-y-4', {
          'pt-5 px-6': mode === 'range',
        }),
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-md font-semibold',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(buttonVariants({ variant: 'tertiary-gray' }), 'h-9 w-9 bg-transparent p-0 aspect-square'),
        nav_button_previous: 'absolute left-0',
        nav_button_next: 'absolute right-0',
        table: 'w-full border-collapse space-y-1 bg-background',
        head_row: 'flex',
        head_cell: 'h-10 w-10 p-0 text-center rounded-full font-medium text-sm flex items-center justify-center',
        row: 'flex w-full mt-1 rounded-full overflow-hidden',
        cell: cn(
          'text-center rounded-full text-sm p-0 relative focus-within:relative focus-within:z-20 ',
          '[&:has([aria-selected])]:bg-gray-50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
        ),
        day: cn(
          buttonVariants({ variant: 'tertiary-gray', size: 'md', radius: 'full' }),
          'h-10 w-10 p-0 font-normal aria-selected:opacity-100 hover:bg-gray-50 '
        ),
        day_selected: 'bg-brand-600 rounded-full hover:bg-brand-600 focus:bg-brand-600 hover:text-white text-white',
        day_today: cn('bg-gray-100 rounded-full ', {
          'aria-selected:bg-brand-600': mode !== 'range',
        }),
        day_outside: 'text-gray-500 opacity-40',
        day_disabled: 'text-gray-500 opacity-40',
        day_range_middle: 'aria-selected:bg-gray-50 rounded-none aria-selected:text-gray-700 ',
        day_hidden: 'invisible',
        day_range_end: '!bg-brand-600',
        day_range_start: '!bg-brand-600',
        ...classNames,
      }}
      disabled={disablePast ? isPastDate : props.disabled}
      components={{
        IconLeft: () => <ChevronLeftIcon className="h-5 w-5" />,
        IconRight: () => <ChevronRightIcon className="h-5 w-5" />,
        ...components,
      }}
      mode={mode as any}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
