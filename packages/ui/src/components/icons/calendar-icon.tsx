import * as React from 'react';
import { type SVGProps } from 'react';

const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={21} height={20} viewBox="0 0 21 20" fill="none" {...props}>
    <path
      d="M18 8.333H3m10.833-6.666V5M7.167 1.667V5M7 18.333h7c1.4 0 2.1 0 2.635-.272a2.5 2.5 0 0 0 1.092-1.093c.273-.535.273-1.235.273-2.635v-7c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.092C16.1 3.333 15.4 3.333 14 3.333H7c-1.4 0-2.1 0-2.635.273a2.5 2.5 0 0 0-1.093 1.092C3 5.233 3 5.933 3 7.333v7c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.093c.535.272 1.235.272 2.635.272"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default CalendarIcon;
