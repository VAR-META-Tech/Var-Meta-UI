import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { ButtonClose } from '../button';
import * as DrawerPrimitive from '../dialog';

export interface DrawerProps extends ElementProps<typeof DrawerPrimitive.Root> {}

const Drawer = DrawerPrimitive.Root;

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerClose = DrawerPrimitive.Close;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    className={cn(
      'fixed inset-0 z-50 bg-gray-900/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
    ref={ref}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const drawerVariants = cva(
  'fixed z-50 gap-4 bg-white p-4 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-gray-200 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
          'inset-x-0 bottom-0 border-gray-200 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-full max-w-[375px] border-gray-200 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
        right:
          'inset-y-0 right-0 h-full w-full max-w-[375px] border-gray-200 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  }
);

export interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>,
    VariantProps<typeof drawerVariants> {
  hideOverlay?: boolean;
  hideCloseIcon?: boolean;
}

const DrawerContent = React.forwardRef<React.ElementRef<typeof DrawerPrimitive.Content>, DrawerContentProps>(
  ({ side = 'right', hideCloseIcon, hideOverlay, className, children, ...props }, ref) => (
    <DrawerPortal>
      {hideOverlay ? null : <DrawerOverlay />}
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
  <div className={cn('flex flex-col space-y-2 text-center sm:text-left mb-6', className)} {...props} />
);
DrawerHeader.displayName = 'DrawerHeader';

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
);
DrawerFooter.displayName = 'DrawerFooter';

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title ref={ref} className={cn('text-lg font-semibold text-foreground', className)} {...props} />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
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
