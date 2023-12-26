import { cn } from '@hashgraph/utils';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { Indicator, type IndicatorProps } from './indicator';

const avatarVariants = cva('relative z-[1] flex shrink-0 overflow-hidden bg-gray-100 rounded-full', {
  variants: {
    size: {
      xs: 'w-6 h-6',
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-12 h-12',
      xl: 'w-14 h-14',
      '2xl': 'w-16 h-16',
      '3xl': 'w-18 h-18 shadow-md',
      '4xl': 'w-24 h-24 shadow-lg',
      '5xl': 'w-40 h-40 shadow-lg',
    },
  },
  defaultVariants: {
    size: 'xs',
  },
});

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>,
    VariantProps<typeof avatarVariants> {
  indicator?: IndicatorProps['type'] | 'none';
  rootClassName?: string;
  outlined?: boolean;
}

const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Image>, AvatarProps>(
  ({ className, outlined, style, children, rootClassName, indicator = 'none', size = 'md', ...props }, ref) => {
    const mappingSize = React.useMemo(() => {
      if (size === '3xl') return '2xl';
      if (size === '4xl') return '3xl';
      if (size === '5xl') return '4xl';
      return size;
    }, [size]);

    return (
      <div className={cn('relative group inline-flex align-middle shrink-0 rounded-full', className)} style={style}>
        <AvatarPrimitive.Root className={cn(avatarVariants({ size, className: rootClassName }))}>
          <AvatarPrimitive.Image className={cn('aspect-square object-cover h-full w-full')} ref={ref} {...props} />
          <AvatarPrimitive.Fallback className={cn('flex h-full w-full items-center justify-center rounded-full ')}>
            {children}
          </AvatarPrimitive.Fallback>
        </AvatarPrimitive.Root>

        <div
          className={cn(
            'w-[calc(100%_+_1px)] h-[calc(100%_+_1px)] inset-center z-[1] pointer-events-none rounded-full border border-black/10'
          )}
        />

        {outlined ? (
          <div className="w-[calc(100%_+_3px)] h-[calc(100%_+_3px)] inset-center z-[1] pointer-events-none rounded-full border-2 border-white" />
        ) : null}
        <div
          className={cn(
            'w-[calc(100%_+_5px)] h-[calc(100%_+_5px)] inset-center z-[1] rounded-full opacity-[14%] pointer-events-none',
            'group-focus-within:border-4 group-focus-within:border-focus-border',
            'group-focus:border-4 group-focus:border-focus-border',
            'group-focus-visible:border-4 group-focus-visible:border-focus-border'
          )}
        />
        {indicator !== 'none' && !!indicator ? (
          <Indicator
            className="absolute z-[2] bottom-[14%] transform scale-100 translate-x-1/2 translate-y-1/2 right-[14%]"
            type={indicator}
            size={mappingSize}
          />
        ) : null}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export { Avatar };
