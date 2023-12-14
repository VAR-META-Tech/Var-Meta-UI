import { type ComponentPropsWithoutRef } from 'react';
import { toast as sonnerToast, Toaster as SonnerToaster } from 'sonner';

import { Notification, type NotificationActionProps, type NotificationProps } from '../notification';

export interface ToasterProps extends ComponentPropsWithoutRef<typeof SonnerToaster> {}

const Toaster = ({ style, ...props }: ToasterProps) => {
  return (
    <SonnerToaster
      style={
        {
          /**
           * Override variable of section to fit with notification width
           */
          '--width': 'var(--toaster-width)',
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

interface ToastIconParams extends Pick<NotificationProps, 'onClose' | 'description' | 'className' | 'hideCloseIcon'> {
  action?: NotificationActionProps;
}

const successToast = (title: string, params?: ToastIconParams) => {
  return sonnerToast.custom((t) => (
    <Notification
      icon="success"
      variant="icon"
      onClose={() => {
        params?.onClose?.();
        sonnerToast.dismiss(t);
      }}
      title={title}
      actionProps={params?.action}
      {...params}
    />
  ));
};

const errorToast = (title: string, params?: ToastIconParams) => {
  return sonnerToast.custom((t) => (
    <Notification
      icon="error"
      variant="icon"
      onClose={() => {
        params?.onClose?.();
        sonnerToast.dismiss(t);
      }}
      title={title}
      actionProps={params?.action}
      {...params}
    />
  ));
};

const warningToast = (title: string, params?: ToastIconParams) => {
  return sonnerToast.custom((t) => (
    <Notification
      icon="warning"
      variant="icon"
      onClose={() => {
        params?.onClose?.();
        sonnerToast.dismiss(t);
      }}
      title={title}
      actionProps={params?.action}
      {...params}
    />
  ));
};

interface ToastAvatarParams
  extends Pick<NotificationProps, 'onClose' | 'src' | 'description' | 'className' | 'hideCloseIcon'> {
  action?: NotificationActionProps;
}

const avatarToast = (title: string, params?: ToastAvatarParams) => {
  return sonnerToast.custom((t) => (
    <Notification
      variant="avatar"
      onClose={() => {
        params?.onClose?.();
        sonnerToast.dismiss(t);
      }}
      title={title}
      actionProps={params?.action}
      {...params}
    />
  ));
};

interface ToastImageParams
  extends Pick<NotificationProps, 'onClose' | 'src' | 'description' | 'className' | 'hideCloseIcon'> {
  action?: NotificationActionProps;
}

const imageToast = (title: string, params?: ToastImageParams) => {
  return sonnerToast.custom((t) => (
    <Notification
      variant="image"
      onClose={() => {
        params?.onClose?.();
        sonnerToast.dismiss(t);
      }}
      title={title}
      actionProps={params?.action}
      {...params}
    />
  ));
};

const baseToast = (params?: NotificationProps) => {
  return sonnerToast.custom((t) => (
    <Notification
      onClose={() => {
        params?.onClose?.();
        sonnerToast.dismiss(t);
      }}
      {...params}
    />
  ));
};

const toast = {
  success: successToast,
  error: errorToast,
  warning: warningToast,
  avatar: avatarToast,
  image: imageToast,
  base: baseToast,
  custom: sonnerToast.custom,
};

export { toast, Toaster };
