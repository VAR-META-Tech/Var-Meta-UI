import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { tv, type VariantProps } from 'tailwind-variants';

const textVariants = tv(
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

export interface TextProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof textVariants> {
  asChild?: boolean;
}

const Text = React.forwardRef<HTMLDivElement, TextProps>(
  ({ className, align, size, weight, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp className={textVariants({ size, weight, align, className })} ref={ref} {...props}>
        {children}
      </Comp>
    );
  }
);
Text.displayName = 'Text';

export { Text, textVariants };
