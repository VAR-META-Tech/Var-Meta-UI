import * as DialogPrimitive from '@radix-ui/react-dialog';
import { type ComponentPropsWithoutRef, Primitive } from '@radix-ui/react-primitive';
import * as React from 'react';
import { RemoveScroll } from 'react-remove-scroll';

import { cn } from '../../utils/cn';
import { ButtonClose, type ButtonCloseProps } from '../button';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogCloseTrigger = DialogPrimitive.Close;

const DialogPortal = DialogPrimitive.Portal;

const dialogOverLayerClass =
  'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-gray-950/70 backdrop-blur-sm';

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay ref={ref} className={cn(dialogOverLayerClass, className)} {...props} />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

type DialogOverlayImplElement = React.ElementRef<typeof Primitive.div>;
type PrimitiveDivProps = ComponentPropsWithoutRef<typeof Primitive.div>;
interface DialogOverlayImplProps extends PrimitiveDivProps {
  shards?: Array<React.RefObject<any> | HTMLElement>;
  disabled?: boolean;
}

const DialogOverlayImpl = React.forwardRef<DialogOverlayImplElement, DialogOverlayImplProps>(
  ({ className, shards: _shards, disabled, ...props }: DialogOverlayImplProps, forwardedRef) => {
    return (
      <Primitive.div
        {...props}
        ref={forwardedRef}
        className={cn(dialogOverLayerClass, className)}
        // We re-enable pointer-events prevented by `Dialog.Content` to allow scrolling the overlay.
        style={{ pointerEvents: disabled ? 'none' : 'auto', ...props.style }}
      />
    );
  }
);

interface DialogContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  overlayClosable?: boolean;
}

const DialogContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, DialogContentProps>(
  ({ className, children, overlayClosable = true, ...props }, ref) => (
    <DialogPortal>
      {overlayClosable ? <DialogOverlay /> : <DialogOverlayImpl disabled />}
      <RemoveScroll>
        <DialogPrimitive.Content
          onInteractOutside={(e) => (overlayClosable ? null : e.preventDefault())}
          ref={ref}
          className={cn(
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
            'border-linear bg-white fixed left-[50%] top-[50%] z-50 grid max-h-screen w-full max-w-[400px] translate-x-[-50%] translate-y-[-50%] gap-4 overflow-auto border px-4 py-3 shadow-xl duration-200 sm:rounded-lg md:w-full',
            className
          )}
          {...props}
        >
          {children}
        </DialogPrimitive.Content>
      </RemoveScroll>
    </DialogPortal>
  )
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

export interface DialogHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  onClose?: () => void;
  className?: string;
  hideCloseButton?: boolean;
  buttonCloseProps?: ButtonCloseProps;
}

const DialogHeader = React.forwardRef<React.ElementRef<'div'>, DialogHeaderProps>(
  ({ className, children, onClose, hideCloseButton, buttonCloseProps, ...props }, ref) => (
    <div ref={ref} className={cn('px-6 pt-6 relative', className)} {...props}>
      {children}
      {hideCloseButton ? null : (
        <DialogCloseTrigger className="absolute top-4 right-4" asChild onClick={onClose}>
          <ButtonClose size="lg" {...buttonCloseProps} />
        </DialogCloseTrigger>
      )}
    </div>
  )
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = React.forwardRef<React.ElementRef<'div'>, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex p-6 flex-col-reverse sm:flex-row sm:justify-end gap-3', className)} {...props} />
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
  <DialogPrimitive.Description ref={ref} className={cn('text-sm text-gray-700 2xl:text-base', className)} {...props} />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogCloseTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogOverlayImpl,
  DialogTitle,
  DialogTrigger,
};
