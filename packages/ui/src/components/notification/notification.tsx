import React, { useMemo, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { type ReactNodeExcluded } from '../../types';
import { cn } from '../../utils/cn';
import { Avatar, type AvatarProps } from '../avatar';
import { Button, ButtonClose, type ButtonProps } from '../button';
import { AlertCircleIcon, CheckCircleIcon, FeaturedIcon } from '../icons';
import { Show } from '../utility';

export interface NotificationActionProps extends React.HTMLAttributes<HTMLDivElement> {
  confirmLabel?: string;
  cancelLabel?: string;
  actionBtnProps?: ButtonProps;
  cancelBtnProps?: ButtonProps;
  hideConfirm?: boolean;
  hideCancel?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const NotificationAction = React.forwardRef<HTMLDivElement, NotificationActionProps>((props, ref) => {
  const {
    className,
    confirmLabel = 'Confirm',
    cancelLabel = 'Dismiss',
    hideConfirm = false,
    hideCancel = false,
    onConfirm,
    onCancel,
    actionBtnProps,
    cancelBtnProps,
    children,
    ...etc
  } = props;
  return (
    <div ref={ref} className={cn('flex items-start gap-3', className)} {...etc}>
      {!hideCancel ? (
        <Button onClick={onCancel} size="none" variant="link" color="gray" {...cancelBtnProps}>
          {cancelLabel}
        </Button>
      ) : null}
      {!hideConfirm ? (
        <Button onClick={onConfirm} size="none" variant="link" {...actionBtnProps}>
          {confirmLabel}
        </Button>
      ) : null}
      {children}
    </div>
  );
});

export interface NotificationContentProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  title?: ReactNode;
  description?: ReactNode;
}

const NotificationContent = React.forwardRef<HTMLDivElement, NotificationContentProps>(
  ({ className, title, description, ...props }, ref) => {
    return (
      <div className={cn('flex flex-col gap-1', className)} ref={ref} {...props}>
        <div className="text-foreground text-sm font-semibold">{title}</div>
        <div className="text-foreground-secondary text-sm">{description}</div>
      </div>
    );
  }
);

const notificationVariants = tv({
  base: 'border-border bg-background relative flex w-full gap-4 overflow-hidden rounded-xl border p-4 shadow-lg [@media(min-width:37.5rem)]:w-[370px] [@media(min-width:48rem)]:w-[400px]',
  variants: {
    variant: {
      none: '',
      icon: '',
      image: 'p-0',
      avatar: '',
    },
  },
  defaultVariants: {
    variant: 'icon',
  },
  compoundVariants: [],
});

export interface NotificationProps extends NotificationContentProps, VariantProps<typeof notificationVariants> {
  hideCloseIcon?: boolean;
  onClose?: () => void;
  icon?: 'success' | 'warning' | 'error' | ReactNodeExcluded;
  src?: string;
  avatarProps?: AvatarProps;
  imgProps?: ComponentPropsWithoutRef<'img'>;
  actionProps?: NotificationActionProps;
  children?: ReactNode;
}

const Notification = React.forwardRef<HTMLDivElement, NotificationProps>((props, ref) => {
  const {
    className,
    variant = 'icon',
    onClose,
    hideCloseIcon,
    imgProps,
    title,
    description,
    avatarProps,
    src,
    icon,
    actionProps,
    children,
    ...etc
  } = props;

  const renderIcon = useMemo(() => {
    if (variant === 'avatar') {
      return <Avatar size="md" radius="full" indicator="online" src={src} {...avatarProps} />;
    }
    if (variant !== 'icon') return null;
    switch (icon) {
      case 'success':
        return <CheckCircleIcon className="text-success-500 h-8 w-8" />;
      case 'warning':
        return <AlertCircleIcon className="text-warning-500 h-8 w-8" />;
      case 'error':
        return <AlertCircleIcon className="text-error-500 h-8 w-8" />;

      default:
        return (
          <FeaturedIcon variant="modern" color="gray">
            {icon}
          </FeaturedIcon>
        );
    }
  }, [variant, icon, src, avatarProps]);

  return (
    <div ref={ref} className={cn({ 'md:pr-8': !hideCloseIcon }, notificationVariants({ variant, className }))} {...etc}>
      {!hideCloseIcon ? <ButtonClose onClick={onClose} size="sm" className="absolute right-2 top-2" /> : null}

      <Show when={variant === 'image'}>
        <div className="flex">
          <div className="bg-background relative hidden h-full min-w-[5rem] max-w-[5rem] flex-col md:flex">
            <img src={src} {...imgProps} className={cn('absolute h-full w-full object-cover', imgProps?.className)} />
          </div>
          <div className="flex flex-col gap-3 p-4 pl-5">
            <NotificationContent title={title} description={description} />
            <div className="bg-background relative flex max-h-[122px] min-h-[122px] w-full flex-col md:hidden">
              <img
                src={src}
                {...imgProps}
                className={cn('absolute h-full w-full rounded-sm object-cover', imgProps?.className)}
              />
            </div>
            {children}
            {actionProps !== undefined ? (
              <NotificationAction
                {...actionProps}
                onCancel={() => {
                  actionProps.onCancel?.();
                  onClose?.();
                }}
                onConfirm={() => {
                  actionProps.onConfirm?.();
                  onClose?.();
                }}
              />
            ) : null}
          </div>
        </div>
      </Show>

      <Show when={variant === 'icon' || variant === 'avatar'}>
        <div
          className={cn('flex flex-col items-start justify-start gap-2 md:flex-row md:gap-4', {
            'md:pb-2': !!description,
          })}
        >
          {renderIcon}
          <div className="flex flex-col gap-3">
            <NotificationContent title={title} description={description} />
            {children}
            {actionProps !== undefined ? (
              <NotificationAction
                {...actionProps}
                onCancel={() => {
                  actionProps.onCancel?.();
                  onClose?.();
                }}
                onConfirm={() => {
                  actionProps.onConfirm?.();
                  onClose?.();
                }}
              />
            ) : null}
          </div>
        </div>
      </Show>
    </div>
  );
});

export { Notification, NotificationAction, notificationVariants };
