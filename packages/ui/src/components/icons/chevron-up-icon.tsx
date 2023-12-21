import * as React from 'react';
import { type SVGProps } from 'react';
const ChevronUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m5 7.5 5 5 5-5" stroke="#667085" strokeWidth={1.667} strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="m5 7.5 5 5 5-5"
      stroke="#000"
      strokeOpacity={0.2}
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m5 7.5 5 5 5-5"
      stroke="#000"
      strokeOpacity={0.2}
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ChevronUpIcon;
