import React, { useMemo, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { type ReactNodeExcluded } from '../../types';
import { cn } from '../../utils/cn';
import { ButtonClose } from '../button';
import { AlertCircleIcon, CheckCircleIcon, FeaturedIcon } from '../icons';

export interface AlertActionProps extends React.HTMLAttributes<HTMLDivElement> {}

const AlertAction = React.forwardRef<HTMLDivElement, AlertActionProps>((props, ref) => {
  const { className, children, ...etc } = props;
  return (
    <div ref={ref} className={cn('flex items-start gap-3', className)} {...etc}>
      {children}
    </div>
  );
});

export interface AlertContentProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  title?: ReactNode;
  description?: ReactNode;
  variant?: 'floating' | 'fullWidth' | null;
}

const AlertContent = React.forwardRef<HTMLDivElement, AlertContentProps>(
  ({ className, title, variant, description, ...props }, ref) => {
    return (
      <div
        className={cn(
          'flex flex-col gap-1',
          {
            'gap-1.5 md:flex-row': variant === 'fullWidth',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="text-foreground text-sm font-semibold">{title}</div>
        <div className="text-foreground-secondary text-sm">{description}</div>
      </div>
    );
  }
);

const alertVariants = cva('relative flex', {
  variants: {
    variant: {
      floating: ['border-border shadow-xs bg-background w-full gap-4 rounded-xl border p-4'],
      fullWidth: ['border-border bg-background w-full gap-4 border-t md:border-b md:border-t-0'],
    },
  },
  defaultVariants: {
    variant: 'floating',
  },
  compoundVariants: [],
});

export interface AlertProps
  extends Pick<AlertContentProps, 'title' | 'description' | 'className'>,
    VariantProps<typeof alertVariants> {
  hideCloseIcon?: boolean;
  onClose?: () => void;
  icon?: 'success' | 'warning' | 'error' | 'gray' | ReactNodeExcluded;
  children?: ReactNode;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { className, title, description, variant = 'floating', onClose, hideCloseIcon, icon, children, ...etc } = props;

  const renderIcon = useMemo(() => {
    switch (icon) {
      case 'success':
        return (
          <FeaturedIcon
            className={cn({ '-ml-2.5 md:-mt-2.5': variant === 'floating' })}
            variant="outline"
            color="success"
          >
            <CheckCircleIcon />
          </FeaturedIcon>
        );
      case 'warning':
        return (
          <FeaturedIcon
            className={cn({ '-ml-2.5 md:-mt-2.5': variant === 'floating' })}
            variant="outline"
            color="warning"
          >
            <AlertCircleIcon />
          </FeaturedIcon>
        );

      case 'error':
        return (
          <FeaturedIcon
            className={cn({ '-ml-2.5 md:-mt-2.5': variant === 'floating' })}
            variant="outline"
            color="error"
          >
            <AlertCircleIcon />
          </FeaturedIcon>
        );

      case 'gray':
        return (
          <FeaturedIcon className={cn({ '-ml-2.5 md:-mt-2.5': variant === 'floating' })} variant="outline" color="gray">
            <AlertCircleIcon />
          </FeaturedIcon>
        );

      default:
        return (
          <FeaturedIcon className={cn({ '-ml-2.5 md:-mt-2.5': variant === 'floating' })} variant="modern" color="gray">
            {icon}
          </FeaturedIcon>
        );
    }
  }, [variant, icon]);

  return (
    <div ref={ref} className={cn(alertVariants({ variant, className }))} {...etc}>
      {variant === 'floating' ? (
        <>
          {!hideCloseIcon ? <ButtonClose onClick={onClose} size="sm" className="absolute right-2 top-2" /> : null}
          <div
            className={cn('flex flex-col items-start justify-start gap-2 md:flex-row md:gap-4', {
              'md:pr-8': !hideCloseIcon,
            })}
          >
            {renderIcon}
            <div className="flex flex-1 flex-col gap-3">
              <AlertContent variant={variant} title={title} description={description} />
              {children}
            </div>
          </div>
        </>
      ) : (
        <div
          className={cn(
            'flex w-full flex-col items-start justify-start gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-8 md:py-0',
            {
              'pr-8 md:pr-0': !hideCloseIcon,
            }
          )}
        >
          <div className="flex flex-1 flex-col gap-4 md:flex-row md:items-center">
            <div className="hidden md:block">{renderIcon}</div>
            <AlertContent variant={variant} title={title} description={description} />
          </div>
          <div className="flex items-center gap-2">
            {children}
            {!hideCloseIcon ? (
              <ButtonClose
                className="md:right-none md:top-none absolute right-2 top-2 md:relative"
                onClick={onClose}
                size="sm"
              />
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
});

export { Alert, AlertAction, AlertContent, alertVariants };
