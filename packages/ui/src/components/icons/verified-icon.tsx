import * as React from 'react';
import { type SVGProps } from 'react';
const VerifiedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M24.711 5.667a3 3 0 0 0 1.622 1.625l2.576 1.066a3 3 0 0 1 1.623 3.92l-1.066 2.574a2.995 2.995 0 0 0 .001 2.297l1.064 2.573a3 3 0 0 1-1.624 3.921l-2.574 1.067a3 3 0 0 0-1.624 1.621l-1.067 2.576a3 3 0 0 1-3.92 1.624l-2.574-1.066a3 3 0 0 0-2.295.001l-2.576 1.066a3 3 0 0 1-3.917-1.623l-1.067-2.576a3 3 0 0 0-1.622-1.625l-2.576-1.067a3 3 0 0 1-1.624-3.917l1.066-2.574a3 3 0 0 0-.002-2.296l-1.064-2.577a3 3 0 0 1 1.624-3.921L5.669 7.29a3 3 0 0 0 1.623-1.62L8.36 3.094a3 3 0 0 1 3.92-1.624l2.574 1.066a3 3 0 0 0 2.295-.001l2.577-1.063a3 3 0 0 1 3.919 1.623l1.067 2.577v-.005Z"
        fill="#0788F5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.267 11.806a1.5 1.5 0 1 0-2.532-1.612l-5.874 9.23-2.689-3.36a1.5 1.5 0 0 0-2.343 1.874l4 5a1.5 1.5 0 0 0 2.438-.132l7-11Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default VerifiedIcon;
