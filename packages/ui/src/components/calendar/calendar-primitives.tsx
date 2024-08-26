import React, { forwardRef, type ElementRef } from 'react';
import { CalendarKit, type CalendarProps, type RangeCalendarProps } from 'react-calendar-kit';

import { cn } from '../../utils/cn';

const Calendar = forwardRef<ElementRef<typeof CalendarKit.Calendar>, CalendarProps>((props, ref) => (
  <CalendarKit.Calendar
    ref={ref}
    classNames={{
      root: 'bg-background border border-border-secondary rounded-lg w-fit',
      gridWrapper: 'flex justify-between',
      gridGroup: 'relative w-full h-full pb-4',
      header: 'relative p-4 flex items-center justify-between gap-2',
      navGroup: 'flex items-center gap-2',
      nav: 'min-w-10 aspect-square h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-background-light',
      month: cn([
        'flex w-full items-center justify-center',

        // Position for each layout
        'data-[layout=apart]:justify-center',
        'data-[layout=left]:justify-end data-[layout=left]:pr-2',
        'data-[layout=right]:justify-start data-[layout=right]:pl-2',
      ]),
      gridHead: '',
      gridHeadRow: 'text-default-400 flex justify-center px-4 pb-2',
      gridHeadCell: 'flex w-10 justify-center items-center font-normal text-sm',
      gridBodyRow:
        'flex justify-center items-center data-[picker-expanded=true]:pointer-events-none pointer-events-auto',
      gridBodyCell: 'py-0.5 px-0',
      cellButton: cn([
        // Base
        'tap-highlight-transparent box-border flex h-10 w-10 origin-center select-none appearance-none items-center justify-center overflow-hidden whitespace-nowrap rounded-full text-sm font-normal text-foreground subpixel-antialiased shadow-none outline-none transition-[transform,background-color,color] duration-100',

        // Disabled state
        'data-[disabled=true]:cursor-default data-[readonly=true]:cursor-default data-[unavailable=true]:cursor-default data-[disabled=true]:text-foreground-disabled data-[unavailable=true]:text-foreground-disabled data-[unavailable=true]:line-through data-[disabled=true]:transition-none',

        // Focus state
        'data-[focus-visible=true]:outline-focus data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2',

        // Selected
        'data-[hover=true]:bg-background-light data-[selected=true]:bg-button data-[selected=true]:data-[hover=true]:bg-button data-[hover=true]:text-foreground data-[selected=true]:data-[hover=true]:text-foreground-button data-[selected=true]:text-foreground-button data-[selected=true]:shadow-none',

        // Click state
        'scale-100 data-[pressed=true]:scale-90 data-[pressed=true]:bg-button data-[pressed=true]:text-foreground-button',
      ]),
      // Styles for month/year picker
      picker: {
        root: cn([
          '!duration-250 absolute inset-x-0 top-0 z-20 flex w-full justify-center rounded-lg bg-background transition-opacity',
          // Opened state
          'pointer-events-none opacity-0 data-[expanded=true]:pointer-events-auto data-[expanded=true]:opacity-100',
        ]),

        button: cn([
          'flex items-center justify-between gap-2 rounded-full !bg-transparent border border-border-secondary px-4 py-2 ',
          '!duration-250 group scale-100 outline-none transition-transform data-[pressed=true]:scale-90',
        ]),
        buttonIcon: 'group-data-[expanded=true]:rotate-180 transition-transform duration-250',
        highlight:
          'h-10 border-y border-border-secondary absolute w-[calc(100%_-_16px)] z-0 top-1/2 -translate-y-1/2 pointer-events-none',
        list: cn([
          'scrollbar-hide flex snap-y snap-mandatory flex-col items-center overflow-y-scroll px-4 ',
          '[--scroll-shadow-size:100px] [mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]',
        ]),
        item: cn([
          'text-foreground z-20 flex h-10 min-h-10 w-full snap-center items-center text-base transition-opacity',
          'data-[focus-visible=true]:outline-focus outline-none data-[focus-visible=true]:z-20 data-[pressed=true]:opacity-50 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2 ',
        ]),
      },
    }}
    {...props}
  />
));
const RangeCalendar = forwardRef<ElementRef<typeof CalendarKit.RangeCalendar>, RangeCalendarProps>((props, ref) => (
  <CalendarKit.RangeCalendar
    ref={ref}
    classNames={{
      root: 'bg-background border border-border-secondary rounded-lg w-fit',
      gridWrapper: 'flex justify-between pb-4',
      gridGroup: 'relative w-full h-full',
      header: 'relative p-4 flex items-center justify-between gap-2',
      nav: 'min-w-10 aspect-square h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-background-light absolute top-1/2 -translate-y-1/2',
      nextButton: 'right-3',
      previousButton: 'left-3',
      month: 'w-full flex items-center justify-center',

      gridHead: '',
      gridHeadRow: 'px-4 pb-2 flex justify-center text-default-400',
      gridHeadCell: 'flex w-10 justify-center items-center font-normal text-sm',

      gridBodyRow: 'flex justify-center items-center',
      gridBodyCell: 'py-0.5 px-0',

      cellButton: cn([
        // Base
        'tap-highlight-transparent relative z-10 box-border flex h-10 w-10 origin-center select-none appearance-none items-center justify-center overflow-visible whitespace-nowrap rounded-full text-sm font-normal text-foreground subpixel-antialiased shadow-none outline-none transition-[transform,background-color,color] duration-100',

        // Disabled state
        'data-[disabled=true]:cursor-default data-[readonly=true]:cursor-default data-[unavailable=true]:cursor-default data-[disabled=true]:text-foreground-disabled data-[unavailable=true]:text-foreground-disabled data-[unavailable=true]:line-through data-[disabled=true]:transition-none',

        // Focus state
        'data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2',

        // Hovered
        'data-[hover=true]:bg-background-light data-[hover=true]:text-foreground data-[selected=true]:data-[hover=true]:text-foreground-button',

        // Click state
        'scale-100 data-[pressed=true]:scale-90 data-[pressed=true]:bg-button data-[pressed=true]:text-foreground-button',

        // Range state using pseudo elements
        "before:absolute before:inset-0 before:z-[-2] before:rounded-none before:content-['']",
        "after:absolute after:inset-0 after:z-[-1] after:rounded-full after:content-['']",

        // Range select but outside month
        'data-[outside-month=true]:before:hidden',
        'data-[selected=true]:data-[range-selection=true]:data-[outside-month=true]:bg-transparent',
        'data-[selected=true]:data-[range-selection=true]:data-[outside-month=true]:text-foreground-disabled',

        // Range selection middle
        'data-[range-start=true]:before:rounded-l-full data-[selection-start=true]:before:rounded-l-full',
        'data-[range-end=true]:before:rounded-r-full data-[selection-end=true]:before:rounded-r-full',
        'data-[selected=true]:data-[range-selection=true]:before:bg-background-light',
        'data-[selected=true]:data-[range-selection=true]:text-foreground',

        // Range selection start and end shape
        'data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:rounded-full',
        'data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:rounded-full',
        'data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:after:bg-button',
        'data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:after:bg-button',
        'data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:text-foreground-button',
        'data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:text-foreground-button',
      ]),

      // Styles for month/year picker
      picker: {
        root: cn([
          '!duration-250 absolute inset-x-0 top-0 z-20 flex w-full justify-center rounded-lg bg-background transition-opacity',
          // Opened state
          'pointer-events-none opacity-0 data-[expanded=true]:pointer-events-auto data-[expanded=true]:opacity-100',
        ]),

        button: cn([
          'flex items-center justify-between gap-2 rounded-full !bg-transparent border border-border-secondary px-4 py-2 ',
          '!duration-250 group scale-100 outline-none transition-transform data-[pressed=true]:scale-90',
        ]),
        buttonIcon: 'group-data-[expanded=true]:rotate-180 transition-transform duration-250',
        highlight:
          'h-10 border-y border-border-secondary absolute w-[calc(100%_-_16px)] z-0 top-1/2 -translate-y-1/2 pointer-events-none',
        list: cn([
          'scrollbar-hide flex snap-y snap-mandatory flex-col items-center overflow-y-scroll px-4 ',
          '[--scroll-shadow-size:100px] [mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]',
        ]),
        item: cn([
          'text-foreground z-20 flex h-10 min-h-10 w-full snap-center items-center text-base transition-opacity',
          'data-[focus-visible=true]:outline-focus outline-none data-[focus-visible=true]:z-20 data-[pressed=true]:opacity-50 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2 ',
        ]),
      },
    }}
    visibleMonths={1}
    weekdayStyle="short"
    {...props}
  />
));

export { RangeCalendar, Calendar };
