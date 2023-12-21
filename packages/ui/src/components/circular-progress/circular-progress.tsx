import { cn } from '@hashgraph/utils';
import { cva } from 'class-variance-authority';
import React, { useMemo } from 'react';

import { type ElementProps, type NumberExcluded } from '../../types';
import { mappingSizing, mappingThickness, type Sizing } from './progress-config';

interface CircleProps extends ElementProps<'circle', 'r'> {
  value?: number;
  r?: number;
  thickness?: number | string;
}

const CircleTrack = React.forwardRef<SVGCircleElement, CircleProps>(({ r, thickness, ...props }, ref) => {
  return (
    <circle
      ref={ref}
      r={r}
      cx="50%"
      cy="50%"
      fill="transparent"
      stroke="#EAECF0"
      strokeWidth={thickness}
      strokeLinecap="round"
      {...props}
    />
  );
});

const CircleProgress = React.forwardRef<SVGCircleElement, CircleProps>(
  ({ r = 70, value = 0, thickness, className, ...props }, ref) => {
    const { strokeDasharray, strokeDashoffset } = useMemo(() => {
      const circumference = 2 * Math.PI * r;
      const offset = value ? ((100 - value) * circumference) / 100 : circumference;
      return {
        strokeDasharray: circumference,
        strokeDashoffset: offset,
      };
    }, [r, value]);

    return (
      <circle
        ref={ref}
        r={r}
        cx="50%"
        cy="50%"
        stroke="#27BFF1"
        fill="transparent"
        strokeLinecap="round"
        strokeWidth={thickness}
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        className={cn('transition-all duration-700 ease-in-out', className)}
        {...props}
      />
    );
  }
);

export interface CircularProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  size?: Sizing | NumberExcluded;
  thickness?: number;
}

const labelVariant = cva('absolute inset-center text-gray-900 font-semibold', {
  variants: {
    size: {
      xxs: 'text-sm ',
      xs: 'text-display-xs',
      sm: 'text-display-sm',
      md: 'text-display-md',
      lg: 'text-display-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const CircularProgress = React.forwardRef<HTMLDivElement, CircularProgressProps>(
  ({ className, children, value: valueProp = 0, size: sizeProp = 'md', thickness: thicknessProp, ...props }, ref) => {
    const { size, r, thickness } = useMemo(() => {
      let sizer = sizeProp;
      let thickness = thicknessProp ?? sizeProp;

      if (typeof sizeProp !== 'number') {
        sizer = mappingSizing[sizeProp] || 0;
      }

      if (typeof thickness !== 'number') {
        thickness = mappingThickness[thickness] || 0;
      }
      return {
        size: Number(sizer),
        r: Math.floor(Number(sizer) / 2) - Number(thickness),
        thickness,
      };
    }, [sizeProp, thicknessProp]);

    const value = valueProp ? Math.max(0, Math.min(100, Math.round(valueProp))) : 0;
    return (
      <div className={cn('relative w-fit', className)} ref={ref} {...props}>
        <svg width={size} height={size} fill="none">
          <g className="origin-center -rotate-90">
            <CircleTrack r={r} thickness={`${thickness}px`} />
            <CircleProgress r={r} value={value} thickness={`${thickness}px`} />
          </g>
        </svg>

        {children}
        <div className={cn(labelVariant({ size: typeof sizeProp === 'number' ? 'md' : sizeProp }))}>{value}%</div>
      </div>
    );
  }
);
CircularProgress.displayName = 'CircularProgress';

export { CircularProgress };
