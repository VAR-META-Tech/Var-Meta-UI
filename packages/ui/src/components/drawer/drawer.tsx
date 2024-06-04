import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { ButtonClose } from '../button';
import * as DrawerPrimitive from '../dialog';

export interface DrawerProps extends ElementProps<typeof DrawerPrimitive.Root> {}

const Drawer = DrawerPrimitive.Root;

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerClose = DrawerPrimitive.Close;

const DrawerPortal = DrawerPrimitive.Portal;

const drawerOverlayVariants = cva(
  'bg-overlay/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0  data-[state=open]:fade-in-0 fixed inset-0 z-50',
  {
    variants: {
      blur: {
        true: 'backdrop-blur-sm',
      },
    },
    defaultVariants: {
      blur: true,
    },
  }
);

interface DrawerOverlayProps
  extends ElementProps<typeof DrawerPrimitive.Overlay>,
    VariantProps<typeof drawerOverlayVariants> {}

const DrawerOverlay = React.forwardRef<React.ElementRef<typeof DrawerPrimitive.Overlay>, DrawerOverlayProps>(
  ({ className, blur = true, ...props }, ref) => (
    <DrawerPrimitive.Overlay className={cn(drawerOverlayVariants({ blur }), className)} {...props} ref={ref} />
  )
);
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const drawerVariants = cva(
  'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 gap-4 p-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
  {
    variants: {
      side: {
        top: 'border-border-secondary data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 border-b',
        bottom:
          'border-border-secondary data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 border-t',
        left: 'border-border-secondary data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-full max-w-[375px] border-r',
        right:
          'border-border-secondary data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-full max-w-[375px] border-l',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  }
);

export interface DrawerContentProps
  extends ElementProps<typeof DrawerPrimitive.Content>,
    VariantProps<typeof drawerVariants> {
  hideOverlay?: boolean;
  hideCloseIcon?: boolean;
  blur?: boolean;
}

const DrawerContent = React.forwardRef<React.ElementRef<typeof DrawerPrimitive.Content>, DrawerContentProps>(
  ({ side = 'right', blur = true, hideCloseIcon, hideOverlay, className, children, ...props }, ref) => (
    <DrawerPortal>
      {hideOverlay ? null : <DrawerOverlay blur={blur} />}
      <DrawerPrimitive.Content ref={ref} className={cn(drawerVariants({ side }), className)} {...props}>
        {children}
        {hideCloseIcon ? null : (
          <DrawerPrimitive.Close className="absolute right-2 top-3" asChild>
            <ButtonClose />
          </DrawerPrimitive.Close>
        )}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
);
DrawerContent.displayName = DrawerPrimitive.Content.displayName;

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mb-6 flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
);
DrawerHeader.displayName = 'DrawerHeader';

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
);
DrawerFooter.displayName = 'DrawerFooter';

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  ElementProps<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title ref={ref} className={cn('text-foreground text-lg font-semibold', className)} {...props} />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  ElementProps<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description ref={ref} className={cn('text-muted-foreground text-sm', className)} {...props} />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
};
