import * as React from 'react';
import { type CheckedState } from '@radix-ui/react-checkbox';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../utils/cn';
import { radiusVariant } from '../../utils/variant-common';
import { Checkbox } from '../checkbox';
import { CloseIcon } from '../icons';
import { Show } from '../utility';

const tagVariants = cva(
  'border-border-secondary inline-flex items-center justify-center whitespace-nowrap border text-center font-medium transition-colors focus:outline-none',
  {
    variants: {
      variant: {
        default: 'text-foreground',
      },
      radius: radiusVariant,
      size: {
        sm: 'py-0.75 gap-1 h-6 px-1 text-xs',
        md: 'px-1.5 gap-1 h-6 py-0.5 text-xs',
        lg: 'gap-1 h-7 px-2 py-1 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      radius: 'xs',
    },
  }
);

const tagContentVariants = cva('flex items-center', {
  variants: {
    size: {
      sm: 'gap-1',
      md: 'gap-1.25',
      lg: 'gap-1.5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const countVariants = cva('rounded-xxs flex items-center bg-background-light text-center font-medium', {
  variants: {
    size: {
      sm: 'px-1 text-xs ',
      md: 'px-1.25 text-xs',
      lg: 'px-1.5 text-sm',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface TagProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof tagVariants> {
  icon?: React.ReactNode;
  count?: number;
  withCount?: boolean;
  closeIcon?: React.ReactNode;
  checkable?: boolean;
  checked?: boolean;
  onClose?: () => void;
  onChange?: (checked: CheckedState) => void;
  contentClassName?: string;
}

const Tag = React.forwardRef<React.ElementRef<'div'>, TagProps>((props: TagProps, ref) => {
  const {
    className,
    variant = 'default',
    size = 'md',
    radius,
    icon,
    count,
    onClose,
    checked,
    closeIcon,
    onChange,
    checkable,
    withCount,
    contentClassName,
    children,
    ...etc
  } = props;
  const withCheckBox = Boolean(checkable);
  const withCloseIcon = Boolean(closeIcon);
  return (
    <div
      ref={ref}
      className={cn(
        tagVariants({ variant, radius, size }),
        {
          'pl-1': withCheckBox,
          'pr-1': withCloseIcon || withCount,
        },
        className
      )}
      {...etc}
    >
      <div className={cn(tagContentVariants({ size }), contentClassName)}>
        <Show when={withCheckBox}>
          <Checkbox checked={checked} onCheckedChange={onChange} size={('tag-' + size) as any} />
        </Show>
        <Show when={!!icon}>{icon}</Show>
        {children}
        <Show when={withCount}>
          <div className={cn(countVariants({ size }))}>{count ?? 0}</div>
        </Show>
      </div>
      <Show when={withCloseIcon}>
        <button onClick={onClose}>
          {typeof closeIcon === 'boolean' ? <CloseIcon className="h-5 w-5 text-gray-400" /> : closeIcon}
        </button>
      </Show>
    </div>
  );
});

export { Tag, tagVariants };
