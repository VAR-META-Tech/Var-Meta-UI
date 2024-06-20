import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from 'react';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { useDialogContext } from '../dialog/dialog.context';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  type DialogHeaderProps,
} from './dialog.styles';

const ModalTrigger = DialogTrigger;
const ModalClose = DialogClose;

export interface ModalHeaderProps extends DialogHeaderProps {
  align?: 'left' | 'center' | 'baseline';
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
}

const ModalHeader = forwardRef<ElementRef<'div'>, ModalHeaderProps>((props, ref) => {
  const { title, children, icon, description, align = 'left', ...etc } = props;

  return (
    <DialogHeader ref={ref} {...etc}>
      <div
        className={cn('flex flex-col gap-4 pb-3', {
          'justify-start': align === 'left',
          'items-center justify-center': align === 'center',
          'flex-row justify-center': align === 'baseline',
        })}
      >
        {icon ? <div>{icon}</div> : null}
        <div
          className={cn('flex flex-col gap-1', {
            'items-center justify-center text-center': align === 'center',
          })}
        >
          <div className="text-foreground text-lg font-semibold">{title}</div>
          <div className="text-foreground-secondary text-sm">{description}</div>
        </div>
      </div>
      {children}
    </DialogHeader>
  );
});

export interface ModalBodyProps extends DialogHeaderProps {}

const ModalBody = forwardRef<ElementRef<'div'>, ModalBodyProps>((props, ref) => {
  const { children, className, ...etc } = props;
  const { scrollBehavior } = useDialogContext();

  return (
    <div
      ref={ref}
      className={cn(
        'relative flex flex-1 flex-col px-6 py-3',
        {
          'overflow-y-auto': scrollBehavior === 'inside',
        },
        className
      )}
      {...etc}
    >
      {children}
    </div>
  );
});

export interface ModalActionProps extends React.HTMLAttributes<HTMLDivElement> {
  separator?: boolean;
}

const ModalAction = forwardRef<ElementRef<'div'>, ModalActionProps>(({ className, ...props }, ref) => (
  <DialogFooter className={className} {...props} ref={ref} />
));

export interface ModalProps extends ComponentPropsWithoutRef<typeof Dialog> {
  trigger?: React.ReactNode;
  className?: string;
  fitContent?: boolean;
  fullScreen?: boolean;
  modalContentProps?: ElementProps<typeof DialogContent, 'className'>;
}

const ModalRoot = forwardRef<ElementRef<typeof DialogContent>, ModalProps>((props, ref) => {
  const { children, className, fitContent, fullScreen, modalContentProps, trigger, ...etc } = props;

  return (
    <Dialog {...etc}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        ref={ref}
        fitContent={fitContent}
        fullScreen={fullScreen}
        className={className}
        {...modalContentProps}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
});

ModalRoot.displayName = 'Modal';

export const Modal = Object.assign(ModalRoot, {
  Header: ModalHeader,
  Body: ModalBody,
  Action: ModalAction,
  Trigger: ModalTrigger,
  Close: ModalClose,
});
