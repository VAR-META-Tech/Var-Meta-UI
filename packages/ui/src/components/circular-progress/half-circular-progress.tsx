import { cn } from '@hashgraph/utils';
import { cva } from 'class-variance-authority';
import React, { type ElementRef, forwardRef, useMemo } from 'react';

import { type NumberExcluded } from '../../types';
import { mappingSizing, mappingThickness, type Sizing } from './progress-config';

// Function to convert polar coordinates to Cartesian
const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
  const angleInRadians = ((angleInDegrees - 180) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};

// Function to describe an arc using an SVG path
const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const arcSweep = endAngle - startAngle <= 180 ? '0' : '1';
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${arcSweep} 0 ${end.x} ${end.y}`;
};

export interface HalfCircularProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  size?: Sizing | NumberExcluded;
  thickness?: number;
}

const labelVariant = cva('absolute inset-x-center bottom-0 text-gray-900 font-semibold', {
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

const HalfCircularProgress = forwardRef<ElementRef<'div'>, HalfCircularProgressProps>(
  ({ thickness: thicknessProp, value: valueProp = 0, size: sizeProp = 'md', children, className, ...props }, ref) => {
    const { size, normalizedValue, radius, strokeDasharray, strokeDashoffset, thickness } = useMemo(() => {
      let size = sizeProp as number;
      let thickness = thicknessProp ?? sizeProp;

      if (typeof sizeProp !== 'number') {
        size = mappingSizing[sizeProp] || 0;
      }

      if (typeof thickness !== 'number') {
        thickness = mappingThickness[thickness] || 0;
      }

      const normalizedValue = Math.max(0, Math.min(100, Math.round(valueProp)));
      const radius = (size - thickness) / 2;
      const circumference = Math.PI * radius;
      const strokeDasharray = circumference.toString();
      const strokeDashoffset = (((100 - normalizedValue) / 100) * circumference).toString();

      return {
        size: size,
        strokeDasharray,
        strokeDashoffset,
        thickness,
        radius,
        normalizedValue,
      };
    }, [sizeProp, thicknessProp, valueProp]);

    const backgroundArc = React.useMemo(() => describeArc(size / 2, size / 2, radius, 0, 180), [size, radius]);

    const viewBox = useMemo(() => {
      const viewXY = thickness / 2 - thickness;
      return `-${viewXY} -${viewXY} ${size} ${size / 2 + thickness}`;
    }, [size, thickness]);

    return (
      <div className={cn('relative w-fit', className)} ref={ref} {...props}>
        <svg
          width={size}
          height={size / 2 + thickness / 2} // Ensure the height is enough to include the stroke caps
          viewBox={viewBox}
          fill="none"
          style={{ transform: `rotateY(-180deg)` }}
        >
          {/* Background arc */}
          <path d={backgroundArc} fill="none" stroke="#EAECF0" strokeWidth={thickness} strokeLinecap="round" />
          {/* Foreground arc */}
          <path
            d={backgroundArc}
            fill="none"
            stroke="#27BFF1"
            strokeWidth={thickness}
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className={cn('transition-all duration-700 ease-in-out')}
          />
        </svg>

        {children}
        <div className={cn(labelVariant({ size: typeof sizeProp === 'number' ? 'md' : sizeProp }))}>
          {normalizedValue}%
        </div>
      </div>
    );
  }
);

export { HalfCircularProgress };
