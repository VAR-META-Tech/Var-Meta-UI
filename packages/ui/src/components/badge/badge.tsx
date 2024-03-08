import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '../../utils/cn';
import { Show } from '../utility';

const badgeVariants = cva(
  'inline-flex text-center whitespace-nowrap font-medium items-center justify-center transition-colors focus:outline-none',
  {
    variants: {
      variant: {
        'pill-color': 'rounded-2xl border',
        'pill-outline': 'rounded-2xl border-[1.5px]',
        'badge-color': 'rounded-sm border',
        'badge-modern': 'rounded-sm border bg-background border-border !text-foreground-secondary',
      },
      size: {
        sm: 'text-xs py-0.75 gap-1 h-5.5',
        md: 'text-xs py-0.5 gap-1 h-6',
        lg: 'text-sm py-1 gap-1 h-7',
      },
      icon: {
        default: '',
        leading: '',
        trailing: '',
        only: 'aspect-square',
      },
      color: {
        gray: 'text-foreground-secondary [&>div[role="trailing"]]:text-foreground-tertiary [&>div[role="leading"]]:text-foreground-tertiary',
        brand: 'text-brand-700 [&>div[role="trailing"]]:text-brand-600 [&>div[role="leading"]]:text-brand-600',
        error: 'text-error-700 [&>div[role="trailing"]]:text-error-600 [&>div[role="leading"]]:text-error-600',
        warning: 'text-warning-700 [&>div[role="trailing"]]:text-warning-600 [&>div[role="leading"]]:text-warning-600',
        success: 'text-success-700 [&>div[role="trailing"]]:text-success-600 [&>div[role="leading"]]:text-success-600',
        blue: 'text-blue-700 [&>div[role="trailing"]]:text-blue-600 [&>div[role="leading"]]:text-blue-600',
        indigo: 'text-blue-700 [&>div[role="trailing"]]:text-blue-600 [&>div[role="leading"]]:text-blue-600',
        purple: 'text-purple-700 [&>div[role="trailing"]]:text-purple-600 [&>div[role="leading"]]:text-purple-600',
        pink: 'text-pink-700 [&>div[role="trailing"]]:text-pink-600 [&>div[role="leading"]]:text-pink-600',
        orange: 'text-orange-700 [&>div[role="trailing"]]:text-orange-600 [&>div[role="leading"]]:text-orange-600',
      },
    },
    defaultVariants: {
      variant: 'pill-color',
      size: 'md',
      color: 'gray',
      icon: 'default',
    },
    compoundVariants: [
      {
        size: 'sm',
        icon: 'default',
        className: 'px-2',
      },
      {
        size: 'sm',
        icon: 'leading',
        className: 'pl-2 pr-1.5',
      },
      {
        size: 'sm',
        icon: 'trailing',
        className: 'pr-2 pl-1.5',
      },

      {
        size: 'md',
        icon: 'default',
        className: 'px-2.5',
      },
      {
        size: 'md',
        icon: 'leading',
        className: 'pl-2.5 pr-2',
      },
      {
        size: 'md',
        icon: 'trailing',
        className: 'pr-2.5 pl-2',
      },

      {
        size: 'lg',
        icon: 'default',
        className: 'px-3',
      },
      {
        size: 'lg',
        icon: 'leading',
        className: 'pl-2.5 pr-3',
      },
      {
        size: 'lg',
        icon: 'trailing',
        className: 'pr-2.5 pl-3',
      },

      // Color setting
      {
        color: 'gray',
        variant: ['pill-color', 'badge-color'],
        className: 'bg-background-secondary border-border-secondary',
      },
      {
        color: 'brand',
        variant: ['pill-color', 'badge-color'],
        className: 'bg-brand-50 border-brand-200',
      },
      {
        color: 'error',
        variant: ['pill-color', 'badge-color'],
        className: 'bg-error-50 border-error-200',
      },
      {
        color: 'warning',
        variant: ['pill-color', 'badge-color'],
        className: 'bg-warning-50 border-warning-200',
      },
      {
        color: 'success',
        variant: ['pill-color', 'badge-color'],
        className: 'bg-success-50 border-success-200',
      },
      {
        color: 'blue',
        variant: ['pill-color', 'badge-color'],
        className: 'bg-blue-50 border-blue-200',
      },
      {
        color: 'indigo',
        variant: ['pill-color', 'badge-color'],
        className: 'bg-indigo-50 border-indigo-200',
      },
      {
        color: 'purple',
        variant: ['pill-color', 'badge-color'],
        className: 'bg-purple-50 border-purple-200',
      },
      {
        color: 'pink',
        variant: ['pill-color', 'badge-color'],
        className: 'bg-pink-50 border-pink-200',
      },
      {
        color: 'orange',
        variant: ['pill-color', 'badge-color'],
        className: 'bg-orange-50 border-orange-200',
      },

      // Pill outline
      {
        color: 'gray',
        variant: 'pill-outline',
        className: 'border-gray-600',
      },
      {
        color: 'brand',
        variant: 'pill-outline',
        className: 'border-brand-600',
      },
      {
        color: 'error',
        variant: 'pill-outline',
        className: 'border-error-600',
      },
      {
        color: 'warning',
        variant: 'pill-outline',
        className: 'border-warning-600',
      },
      {
        color: 'success',
        variant: 'pill-outline',
        className: 'border-success-600',
      },
      {
        color: 'blue',
        variant: 'pill-outline',
        className: 'border-blue-600',
      },
      {
        color: 'indigo',
        variant: 'pill-outline',
        className: 'border-indigo-600',
      },
      {
        color: 'purple',
        variant: 'pill-outline',
        className: 'border-purple-600',
      },
      {
        color: 'pink',
        variant: 'pill-outline',
        className: 'border-pink-600',
      },
      {
        color: 'orange',
        variant: 'pill-outline',
        className: 'border-orange-600',
      },
    ],
  }
);

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    Omit<VariantProps<typeof badgeVariants>, 'icon'> {
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  iconOnly?: boolean;
}

const Badge = React.forwardRef<React.ElementRef<'div'>, BadgeProps>((props: BadgeProps, ref) => {
  const {
    className,
    color,
    iconOnly,
    variant = 'pill-color',
    size = 'md',
    leading,
    trailing,
    children,
    ...etc
  } = props;

  const iconVariant = React.useMemo(() => {
    if (iconOnly) return 'only';
    if (!!leading && !!trailing) return 'default';
    if (leading) return 'leading';
    if (trailing) return 'trailing';
    return 'default';
  }, [leading, trailing, iconOnly]);

  return (
    <div ref={ref} className={cn(badgeVariants({ icon: iconVariant, color, size, variant, className }))} {...etc}>
      <Show when={!!leading}>
        <div role="leading">{leading}</div>
      </Show>
      {children}
      <Show when={!!trailing}>
        <div role="trailing">{trailing}</div>
      </Show>
    </div>
  );
});

export { Badge, badgeVariants };
