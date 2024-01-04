import { type CheckedState } from '@radix-ui/react-checkbox';
import { cn } from '@swiss-digital-assets-institute/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { Checkbox } from '../checkbox';
import { CloseIcon } from '../icons';
import { Show } from '../utility';

const tagVariants = cva(
  'inline-flex text-center whitespace-nowrap font-medium items-center justify-center border transition-colors focus:outline-none',
  {
    variants: {
      variant: {
        default: 'text-gray-700',
      },
      rounded: {
        default: 'rounded-xs',
        sm: 'rounded-sm',
        none: 'rounded-none',
      },
      size: {
        sm: 'text-xs px-2 py-0.75 h-6',
        md: 'text-xs px-2.75 py-0.5 gap-0.75 h-6',
        lg: 'text-sm px-2.5 py-1 gap-0.75 h-7',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      rounded: 'default',
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

const countVariants = cva('flex text-center font-medium bg-gray-100 items-center rounded-3', {
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
    rounded,
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
        tagVariants({ variant, rounded, size }),
        {
          'pl-1.25': withCheckBox,
          'pr-1': withCloseIcon || count !== undefined,
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
          {typeof closeIcon === 'boolean' ? <CloseIcon className="w-5 h-5 text-gray-400" /> : closeIcon}
        </button>
      </Show>
    </div>
  );
});

export { Tag, tagVariants };
