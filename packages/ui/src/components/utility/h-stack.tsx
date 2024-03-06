import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const hStackVariants = tv(
  {
    base: 'flex flex-wrap items-center',
    variants: {
      pos: {
        left: 'justify-start',
        right: 'justify-end',
        center: 'justify-center',
        apart: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly',
      },
      align: {
        default: 'items-stretch',
        center: 'items-center items',
        start: 'items-start',
        end: 'items-end',
        baseline: 'items-baseline',
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
      noWrap: {
        true: 'flex-nowrap',
      },
    },
    compoundVariants: [],
    compoundSlots: [],
    defaultVariants: {
      spacing: 8,
      pos: 'left',
    },
  },
  {
    responsiveVariants: true,
  }
);

export interface HStackProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof hStackVariants> {
  asChild?: boolean;
}

const HStack = React.forwardRef<HTMLDivElement, HStackProps>(
  ({ className, asChild = false, noWrap, pos, align, spacing, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp className={hStackVariants({ spacing, align, className, noWrap, pos })} ref={ref} {...props}>
        {children}
      </Comp>
    );
  }
);
HStack.displayName = 'HStack';

export { HStack, hStackVariants };
