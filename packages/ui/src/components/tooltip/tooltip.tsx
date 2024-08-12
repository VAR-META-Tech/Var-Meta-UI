import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { tv, type VariantProps } from 'tailwind-variants';

import { type VisibleState } from '../../types';
import { cn } from '../../utils/cn';

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipRoot = TooltipPrimitive.Root;

const TooltipPortal = TooltipPrimitive.Portal;

const TooltipTrigger = TooltipPrimitive.Trigger;

export const tooltipContentVariants = tv({
  base: [
    'max-w-xxs flex flex-col items-start self-stretch rounded-md px-3 py-2',
    'z-100 overflow-hidden text-xs font-semibold shadow-lg',
    'animate-in fade-in-0 zoom-in-95',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  ],
  variants: {
    border: {
      default: '',
      outlined: 'border-border-secondary border',
    },
    theme: {
      default: 'bg-background text-foreground',
      light: 'bg-white text-gray-900',
      dark: 'bg-gray-900 text-white',
    },
  },
  defaultVariants: {
    theme: 'default',
    border: 'default',
  },
});

export interface TooltipContentProps
  extends Omit<React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>, 'title' | 'content'>,
    VariantProps<typeof tooltipContentVariants> {}

const TooltipContent = React.forwardRef<React.ElementRef<typeof TooltipPrimitive.Content>, TooltipContentProps>(
  ({ className, sideOffset = 4, border = 'default', theme = 'light', ...props }, ref) => (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(tooltipContentVariants({ theme, border, className }))}
      {...props}
    />
  )
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export interface TooltipProps extends TooltipContentProps, VisibleState {
  title?: React.ReactNode;
  content?: React.ReactNode;
  contentClassName?: string;
  outlined?: string;
  /**
   * The duration from when the pointer enters the trigger until the tooltip gets opened. This will
   * override the prop with the same name passed to Provider.
   * @defaultValue 300
   */
  delayDuration?: number;
  /**
   * When `true`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.
   * @defaultValue false
   */
  disableHoverableContent?: boolean;
  arrow?: boolean;
}

const Tooltip = React.forwardRef<React.ElementRef<typeof TooltipPrimitive.Content>, TooltipProps>(
  (
    {
      title,
      content,
      children,
      open,
      defaultOpen,
      onOpenChange,
      theme = 'default',
      delayDuration = 200,
      disableHoverableContent,
      arrow,
      contentClassName,
      ...contentProps
    },
    ref
  ) => (
    <TooltipRoot
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      delayDuration={delayDuration}
      disableHoverableContent={disableHoverableContent}
    >
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipPortal>
        <TooltipContent theme={theme} ref={ref} {...contentProps}>
          {title}
          {content && (
            <div
              className={cn(
                'mt-1 text-xs font-medium',
                {
                  'text-gray-600': theme === 'light',
                  'text-gray-300': theme === 'dark',
                  'text-foreground': theme === 'default',
                },
                contentClassName
              )}
            >
              {content}
            </div>
          )}
          {arrow && (
            <TooltipPrimitive.Arrow
              className={cn('-mt-px w-3 drop-shadow-lg', {
                'fill-white': theme === 'light',
                'fill-gray-900': theme === 'dark',
                'fill-background': theme === 'default',
              })}
            />
          )}
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  )
);
Tooltip.displayName = 'Tooltip';

export { Tooltip, TooltipContent, TooltipProvider, TooltipRoot, TooltipTrigger };
