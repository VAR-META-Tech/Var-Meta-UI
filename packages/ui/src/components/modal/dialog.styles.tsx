import * as React from 'react';
import { composeEventHandlers } from '@radix-ui/primitive';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '../../utils/cn';
import { ButtonClose, type ButtonCloseProps } from '../button';
import * as DialogPrimitive from '../dialog';
import { useDialogContext } from '../dialog/dialog.context';

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogCloseTrigger = DialogPrimitive.Close;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

interface DialogOverlayProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> {}

const DialogOverlay = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Overlay>, DialogOverlayProps>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 bg-overlay/70 fixed inset-0 z-40 backdrop-blur-sm',
        className
      )}
      {...props}
    />
  )
);
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

interface DialogContentProps extends DialogPrimitive.DialogContentProps {
  fitContent?: boolean;
  fullScreen?: boolean;
}

const dialogContentVariants = tv({
  base: 'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] duration-200 sm:mx-6 sm:my-16 border border-border bg-background w-full max-w-[400px] h-fit  min-h-[200px] p-0 shadow-lg rounded-lg md:w-full flex flex-col box-border z-50',
  variants: {
    fitContent: {
      true: 'max-w-fit w-fit',
    },
    scrollBehavior: {
      inside: 'max-h-[calc(100%_-_8rem)] overflow-auto',
      outside: '',
    },
    fullScreen: {
      true: 'max-w-full min-h-screen sm:mx-none sm:my-none rounded-none',
    },
  },
});

const DialogContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, DialogContentProps>(
  ({ className, onClick, fitContent, fullScreen, children, ...props }, ref) => {
    const { onOpenChange, dismissable, scrollBehavior } = useDialogContext();

    return (
      <DialogPrimitive.DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
          onClick={composeEventHandlers(onClick, function (e) {
            if (e.target === e.currentTarget && dismissable) onOpenChange(false);
          })}
          ref={ref}
          className={cn('fixed inset-0 z-50 flex h-[100dvh] w-screen justify-center', {
            'items-start overflow-auto': scrollBehavior === 'outside',
            'items-center': scrollBehavior === 'inside',
          })}
          {...props}
        >
          <section className={dialogContentVariants({ scrollBehavior, fitContent, fullScreen, className })}>
            {children}
          </section>
        </DialogPrimitive.Content>
      </DialogPrimitive.DialogPortal>
    );
  }
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

interface DialogHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  onClose?: () => void;
  className?: string;
  hideCloseButton?: boolean;
  buttonCloseProps?: ButtonCloseProps;
}

const DialogHeader = React.forwardRef<React.ElementRef<'div'>, DialogHeaderProps>(
  ({ className, children, onClose, hideCloseButton, buttonCloseProps, ...props }, ref) => (
    <div ref={ref} className={cn('relative px-4 pt-3 md:px-6 md:pt-6', className)} {...props}>
      {children}
      {hideCloseButton ? null : (
        <DialogPrimitive.DialogClose className="absolute right-4 top-4" asChild onClick={onClose}>
          <ButtonClose size="lg" {...buttonCloseProps} />
        </DialogPrimitive.DialogClose>
      )}
    </div>
  )
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = React.forwardRef<React.ElementRef<'div'>, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col-reverse gap-3 p-6 sm:flex-row sm:justify-end', className)} {...props} />
  )
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold leading-tight tracking-tight', className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-foreground-secondary text-sm 2xl:text-base', className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogClose,
  DialogCloseTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};

export type { DialogHeaderProps };
