import { differenceInCalendarDays } from 'date-fns';

export function isPastDate(date: Date) {
  return differenceInCalendarDays(date, new Date()) < 0;
}
