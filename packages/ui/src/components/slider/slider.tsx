'use client';

import { cn } from '@hashgraph/utils';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';

import { Tooltip, TooltipProvider } from '../tooltip';

export interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  withLabel?: boolean;
  withTooltip?: boolean;
  formatLabel?: (value: number) => string;
}

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  (
    {
      className,
      withLabel,
      withTooltip,
      orientation = 'horizontal',
      onValueChange,
      min,
      max,
      formatLabel = (v) => `${v}%`,
      ...props
    },
    ref
  ) => {
    const initialValue = props.value || props.defaultValue || [min, max];
    const [value, setValue] = React.useState(initialValue);

    const handleValueChange = (newValues: number[]) => {
      setValue(newValues);
      if (onValueChange) {
        onValueChange(newValues);
      }
    };

    return (
      <TooltipProvider>
        <SliderPrimitive.Root
          orientation={orientation}
          onValueChange={handleValueChange}
          ref={ref}
          className={cn(
            [
              'relative flex  touch-none select-none items-center',
              'data-[orientation=vertical]:flex-col data-[orientation=vertical]:h-full',
              'data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:w-full',
            ],
            className
          )}
          {...props}
        >
          <SliderPrimitive.Track
            className={cn([
              'relative w-full overflow-hidden bg-gray-200 rounded-full grow',
              {
                'w-2 h-full': orientation === 'vertical',
                'h-2 w-full': orientation === 'horizontal',
              },
            ])}
          >
            <SliderPrimitive.Range
              className={cn([
                'absolute h-full bg-brand-600',
                {
                  'w-full': orientation === 'vertical',
                  'h-full': orientation === 'horizontal',
                },
              ])}
            />
          </SliderPrimitive.Track>
          {value?.map((v, i) => (
            <Tooltip
              open={!withTooltip ? false : undefined}
              key={i}
              title={<span className="text-xs font-semibold text-gray-900">{formatLabel(v ?? 0)}</span>}
            >
              <SliderPrimitive.Thumb
                key={i}
                className={cn([
                  'block w-6 h-6 transition-colors border-2 shadow-md rounded-full border-brand-600 bg-base-white  ',
                  'focus-visible:outline-none focus-visible:shadow-brand-sm disabled:pointer-events-none',
                ])}
              >
                <div
                  className={cn('absolute font-medium  text-gray-900 text-md', {
                    'left-1/2 -translate-x-1/2 top-7': orientation === 'horizontal',
                    'top-1/2 -translate-y-1/2 left-7': orientation === 'vertical',
                    hidden: !withLabel,
                  })}
                >
                  {formatLabel(v ?? 0)}
                </div>
              </SliderPrimitive.Thumb>
            </Tooltip>
          ))}
        </SliderPrimitive.Root>
      </TooltipProvider>
    );
  }
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
