import { DialogTrigger } from '@radix-ui/react-dialog';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from '../../utils/cn';
import {
  CloseDialogTrigger,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  type DialogHeaderProps,
} from '../dialog';

export interface ModalHeaderProps extends DialogHeaderProps {
  align?: 'left' | 'center' | 'baseline';
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export const ModalTrigger = DialogTrigger;
export const CloseModalTrigger = CloseDialogTrigger;

export const ModalHeader = forwardRef<ElementRef<'div'>, ModalHeaderProps>((props, ref) => {
  const { title, children, icon, description, align = 'left', ...etc } = props;

  return (
    <DialogHeader ref={ref} {...etc}>
      <div
        className={cn('flex flex-col gap-4', {
          'justify-start': align === 'left',
          'justify-center items-center': align === 'center',
          'justify-center flex-row': align === 'baseline',
        })}
      >
        {icon ? <div>{icon}</div> : null}
        <div
          className={cn('flex flex-col gap-1', {
            'justify-center items-center text-center': align === 'center',
          })}
        >
          <div className="text-lg text-gray-900 font-semibold">{title}</div>
          <div className="text-sm text-gray-600">{description}</div>
        </div>
      </div>
      {children}
    </DialogHeader>
  );
});

export interface ModalActionProps extends React.HTMLAttributes<HTMLDivElement> {
  separator?: boolean;
}

export const ModalAction = forwardRef<ElementRef<'div'>, ModalActionProps>(({ className, ...props }, ref) => (
  <DialogFooter className={className} {...props} ref={ref} />
));

export interface ModalProps extends ComponentPropsWithoutRef<typeof Dialog> {
  trigger?: React.ReactNode;
  className?: string;
  fitContent?: boolean;
  fullScreen?: boolean;
}

export const Modal = forwardRef<ElementRef<typeof DialogContent>, ModalProps>((props, ref) => {
  const { children, className, fitContent, fullScreen, trigger, ...etc } = props;

  return (
    <Dialog {...etc}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        ref={ref}
        className={cn(
          'min-h-[200px] p-0 shadow-lg',
          {
            'max-w-fit w-fit': fitContent,
            'max-w-full min-h-screen': fullScreen,
          },
          className
        )}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
});

Modal.displayName = 'Modal';
