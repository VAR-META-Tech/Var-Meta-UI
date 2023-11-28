import * as React from 'react';
import { type SVGProps } from 'react';
const CheckboxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10 3 4.5 8.5 2 6"
      stroke="currentColor"
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default CheckboxIcon;
