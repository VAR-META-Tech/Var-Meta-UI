import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { tv, type VariantProps } from 'tailwind-variants';

const headingVariants = tv(
  {
    base: '',
    variants: {
      size: {
        xxs: 'text-xxs',
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-md',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
        '4xl': 'text-4xl',
        '5xl': 'text-5xl',
        '6xl': 'text-6xl',
        '7xl': 'text-7xl',
        '8xl': 'text-8xl',
        '9xl': 'text-9xl',
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify',
      },
      weight: {
        light: 'font-light',
        regular: 'font-normal',
        medium: 'font-medium',
        bold: 'font-bold',
        semibold: 'font-semibold',
        extrabold: 'font-extrabold',
        black: 'font-black',
      },
    },
    compoundVariants: [],
    compoundSlots: [],
    defaultVariants: {},
  },
  {
    responsiveVariants: true,
  }
);

export interface HeadingProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof headingVariants> {
  asChild?: boolean;
}

const Heading = React.forwardRef<HTMLDivElement, HeadingProps>(
  ({ className, align, weight, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp className={headingVariants({ align, weight, size, className })} ref={ref} {...props}>
        {children}
      </Comp>
    );
  }
);
Heading.displayName = 'Heading';

export { Heading, headingVariants };
