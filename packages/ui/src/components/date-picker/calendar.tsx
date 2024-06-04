import { type ComponentProps } from 'react';
import { DayPicker } from 'react-day-picker';

import { cn } from '../../utils/cn';
import { buttonVariants } from '../button';
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
        {
          'bg-background border-border-secondary text-foreground-secondary w-fit rounded-xl border px-6 py-5 shadow-xl':
            !unstyled,
        },
        className
      )}
      classNames={{
        months: cn('flex flex-col sm:flex-row space-y-4 sm:space-y-0', {
          'divide-x divide-border-secondary': mode === 'range',
        }),
        month: cn('space-y-4', {
          'pt-5 px-6': mode === 'range',
        }),
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-md font-semibold',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'link', color: 'default' }),
          'h-9 w-9 bg-transparent p-0 aspect-square'
        ),
        nav_button_previous: 'absolute left-0',
        nav_button_next: 'absolute right-0',
        table: 'w-full border-collapse space-y-1 bg-background',
        head_row: 'flex',
        head_cell: 'h-10 w-10 p-0 text-center rounded-full font-medium text-sm flex items-center justify-center',
        row: 'flex w-full mt-1 rounded-full overflow-hidden',
        cell: cn(
          'text-center rounded-full text-sm p-0 relative focus-within:relative focus-within:z-20 ',
          '[&:has([aria-selected])]:bg-background-secondary first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
        ),
        day: cn(
          buttonVariants({ variant: 'link', color: 'default', size: 'md', radius: 'full' }),
          'h-10 w-10 p-0 font-normal aria-selected:opacity-100 hover:bg-background-secondary '
        ),
        day_selected: cn(
          'bg-brand-600 rounded-full hover:bg-brand-600 focus:bg-brand-600 hover:!text-white text-white'
        ),
        day_today: cn('bg-active rounded-full ', {
          'aria-selected:bg-brand-600': mode !== 'range',
        }),
        day_outside: 'text-disabled opacity-40',
        day_disabled: 'text-disabled opacity-40',
        day_range_middle: cn(
          'aria-selected:bg-background-secondary rounded-none aria-selected:text-foreground-secondary '
        ),
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
