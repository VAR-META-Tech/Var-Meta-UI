import { cva, type VariantProps } from 'class-variance-authority';
import React, { type ReactNode, useMemo } from 'react';

import { type ReactNodeExcluded } from '../../types';
import { cn } from '../../utils/cn';
import { ButtonClose } from '../button';
import { AlertCircleIcon, CheckCircleIcon, FeaturedIcon } from '../icons';

export interface AlertActionProps extends React.HTMLAttributes<HTMLDivElement> {}

const AlertAction = React.forwardRef<HTMLDivElement, AlertActionProps>((props, ref) => {
  const { className, children, ...etc } = props;
  return (
    <div ref={ref} className={cn('flex gap-3 items-start', className)} {...etc}>
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
          'gap-1 flex flex-col',
          {
            'md:flex-row gap-1.5': variant === 'fullWidth',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="text-sm font-semibold text-gray-700">{title}</div>
        <div className="text-sm text-gray-600">{description}</div>
      </div>
    );
  }
);

const alertVariants = cva('flex relative', {
  variants: {
    variant: {
      floating: ['p-4 gap-4 rounded-xl border border-gray-300 shadow-xs bg-base-white w-full'],
      fullWidth: ['gap-4 border-t md:border-t-0 md:border-b border-gray-300 bg-base-white w-full'],
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
            className={cn({ 'md:-mt-2.5 -ml-2.5': variant === 'floating' })}
            variant="outline"
            color="success"
          >
            <CheckCircleIcon />
          </FeaturedIcon>
        );
      case 'warning':
        return (
          <FeaturedIcon
            className={cn({ 'md:-mt-2.5 -ml-2.5': variant === 'floating' })}
            variant="outline"
            color="warning"
          >
            <AlertCircleIcon />
          </FeaturedIcon>
        );

      case 'error':
        return (
          <FeaturedIcon
            className={cn({ 'md:-mt-2.5 -ml-2.5': variant === 'floating' })}
            variant="outline"
            color="error"
          >
            <AlertCircleIcon />
          </FeaturedIcon>
        );

      case 'gray':
        return (
          <FeaturedIcon className={cn({ 'md:-mt-2.5 -ml-2.5': variant === 'floating' })} variant="outline" color="gray">
            <AlertCircleIcon />
          </FeaturedIcon>
        );

      default:
        return (
          <FeaturedIcon className={cn({ 'md:-mt-2.5 -ml-2.5': variant === 'floating' })} variant="modern" color="gray">
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
            className={cn('flex flex-col items-start justify-start gap-2 md:gap-4 md:flex-row', {
              'md:pr-8': !hideCloseIcon,
            })}
          >
            {renderIcon}
            <div className="flex flex-col flex-1 gap-3">
              <AlertContent variant={variant} title={title} description={description} />
              {children}
            </div>
          </div>
        </>
      ) : (
        <div
          className={cn(
            'flex flex-col items-start justify-start w-full gap-3 px-4 py-4 md:py-0 md:px-8 md:items-center md:justify-between md:flex-row',
            {
              'md:pr-0 pr-8': !hideCloseIcon,
            }
          )}
        >
          <div className="flex flex-col flex-1 gap-4 md:items-center md:flex-row">
            <div className="hidden md:block">{renderIcon}</div>
            <AlertContent variant={variant} title={title} description={description} />
          </div>
          <div className="flex items-center gap-2">
            {children}
            {!hideCloseIcon ? (
              <ButtonClose
                className="absolute right-2 top-2 md:relative md:right-none md:top-none "
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
