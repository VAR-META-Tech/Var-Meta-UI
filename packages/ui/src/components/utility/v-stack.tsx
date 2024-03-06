import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const vStackVariants = tv(
  {
    base: 'flex flex-col',
    variants: {
      align: {
        default: 'items-stretch',
        center: 'items-center items',
        start: 'items-start',
        end: 'items-end',
        baseline: 'items-baseline',
      },
      justify: {
        default: 'justify-start',
        center: 'justify-center',
        start: 'justify-start',
        between: 'justify-between',
        end: 'justify-end',
        evenly: 'justify-evenly',
        around: 'justify-around',
      },
      spacing: {
        0: 'gap-0',
        2: 'gap-0.5',
        4: 'gap-1',
        6: 'gap-1.5',
        8: 'gap-2',
        10: 'gap-2.5',
        12: 'gap-3',
        16: 'gap-4',
        20: 'gap-5',
        24: 'gap-6',
        32: 'gap-8',
        40: 'gap-10',
        48: 'gap-12',
        64: 'gap-16',
        none: 'gap-0',
        xxs: 'gap-xxs',
        xs: 'gap-xs',
        sm: 'gap-sm',
        md: 'gap-md',
        lg: 'gap-lg',
        xl: 'gap-xl',
        '2xl': 'gap-2xl',
        '3xl': 'gap-3xl',
        '4xl': 'gap-4xl',
        '5xl': 'gap-5xl',
        '6xl': 'gap-6xl',
        '7xl': 'gap-7xl',
        '8xl': 'gap-8xl',
        '9xl': 'gap-9xl',
        '10xl': 'gap-10xl',
        '11xl': 'gap-11xl',
      },
    },
    defaultVariants: {
      spacing: 8,
      align: 'default',
      justify: 'default',
    },
  },
  {
    responsiveVariants: true,
  }
);

export interface VStackProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof vStackVariants> {
  asChild?: boolean;
}

const VStack = React.forwardRef<HTMLDivElement, VStackProps>(
  ({ className, asChild = false, spacing, align, justify, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp className={vStackVariants({ className, spacing, align, justify })} ref={ref} {...props}>
        {children}
      </Comp>
    );
  }
);
VStack.displayName = 'VStack';

export { VStack, vStackVariants };
