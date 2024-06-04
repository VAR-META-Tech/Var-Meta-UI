import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '../../utils/cn';
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
              'relative flex touch-none select-none items-center',
              'data-[orientation=vertical]:h-full data-[orientation=vertical]:flex-col',
              'data-[orientation=horizontal]:w-full data-[orientation=horizontal]:flex-row',
            ],
            className
          )}
          {...props}
        >
          <SliderPrimitive.Track
            className={cn([
              'bg-background-quaternary relative w-full grow overflow-hidden rounded-full',
              {
                'h-full w-2': orientation === 'vertical',
                'h-2 w-full': orientation === 'horizontal',
              },
            ])}
          >
            <SliderPrimitive.Range
              className={cn([
                'bg-brand-600 absolute h-full',
                {
                  'w-full': orientation === 'vertical',
                  'h-full': orientation === 'horizontal',
                },
              ])}
            />
          </SliderPrimitive.Track>
          {value?.map((v, i) => (
            <Tooltip
              className="border-border-secondary border"
              open={!withTooltip ? false : true}
              key={i}
              title={<span className="text-foreground text-xs font-semibold">{formatLabel(v ?? 0)}</span>}
            >
              <SliderPrimitive.Thumb
                key={i}
                className={cn([
                  'border-brand-600 block h-6 w-6 rounded-full border-2 bg-white shadow-md transition-colors',
                  'focus-visible:shadow-brand-sm focus-visible:outline-none disabled:pointer-events-none',
                ])}
              >
                <div
                  className={cn('text-foreground text-md absolute font-medium', {
                    'left-1/2 top-7 -translate-x-1/2': orientation === 'horizontal',
                    'left-7 top-1/2 -translate-y-1/2': orientation === 'vertical',
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
