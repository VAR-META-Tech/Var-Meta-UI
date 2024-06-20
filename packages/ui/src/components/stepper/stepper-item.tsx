import React, { type ElementRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '../../utils/cn';
import { CheckIcon, CloseIcon, DotIcon } from '../icons';
import { Spinner } from '../spinner';
import { useStepperContext, type StepperContext } from './stepper-context';
import { StepperItemConnector } from './stepper-item-connector';
import { StepperItemLabel, type StepperItemLabelProps } from './stepper-item-label';

const stepperItemVariants = tv({
  base: 'relative flex flex-row items-start',
  variants: {
    isLastStep: {
      true: 'flex-1 justify-end',
      false: 'flex-1 justify-start',
    },
    isVertical: {
      true: 'flex-col',
      false: 'items-center gap-2',
    },
    isClickable: {
      true: 'cursor-pointer',
      false: '',
    },
  },
  compoundVariants: [
    {
      isVertical: true,
      isLastStep: true,
      class: 'w-full flex-1 flex-col items-start justify-start',
    },
  ],
});

const iconButtonVariants = tv({
  base: 'z-10 flex aspect-square cursor-default items-center justify-center rounded-full text-sm data-[clickable=true]:cursor-pointer',
  variants: {
    variant: {
      default: [
        'bg-background border-border-secondary text-foreground-secondary border-2',
        'aria-[current=step]:bg-button aria-[current=step]:border-button aria-[current=step]:shadow-brand-base aria-[current=step]:text-foreground-button',
        'data-[invalid=true]:bg-error-600 data-[invalid=true]:border-error-600 data-[invalid=true]:shadow-error-base data-[invalid=true]:text-foreground-button',
        'data-[complete=true]:bg-button data-[complete=true]:text-foreground-button',
      ],
      unstyled: '',
    },
    size: {
      none: '',
      sm: 'h-6 w-6 ',
      md: 'h-8 w-8',
      lg: 'h-10 w-10',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'none',
  },
});

export interface StepperConfig extends StepperItemLabelProps {
  icon?: React.ReactElement;
}

interface StepProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stepperItemVariants>,
    StepperConfig {
  loading?: boolean;
  error?: boolean;
  isCompletedStep?: boolean;
}

interface StepperItemStatus {
  index: number;
  isCompletedStep?: boolean;
  isCurrentStep?: boolean;
}

export interface StepperItemProps extends StepProps, StepperItemStatus {
  classNames?: {
    button?: string;
    label?: string;
    description?: string;
  };
}

const errorIconSize: Record<NonNullable<StepperContext['size']>, string> = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
  none: '',
};

const tickIconSize: Record<NonNullable<StepperContext['size']>, string> = {
  sm: 'w-2 h-2',
  md: 'w-2.5 h-2.5',
  lg: 'w-3 h-3',
  none: '',
};

const checkIconSize: Record<NonNullable<StepperContext['size']>, string> = {
  sm: 'w-3 h-2.5',
  md: 'w-4 h-3.5',
  lg: 'w-5 h-4.5',
  none: '',
};

export const StepperItem = React.forwardRef<ElementRef<'div'>, StepperItemProps>((props, ref) => {
  const {
    children,
    description,
    icon: CustomIcon,
    index,
    isCompletedStep,
    isCurrentStep,
    isLastStep,
    label,
    optional,
    optionalLabel,
    className,
    classNames,
    loading,
    error,
    ...etc
  } = props;

  const {
    isVertical,
    isError,
    isLoading,
    successIcon: CustomSuccessIcon,
    errorIcon: CustomErrorIcon,
    centeredLabel,
    onClickStep,
    isClickable,
    size,
    iconVariant,
    showIndex,
  } = useStepperContext();

  const hasVisited = isCurrentStep || isCompletedStep;

  const handleClick = (index: number) => {
    if (isClickable && onClickStep) {
      onClickStep(index);
    }
  };

  const Icon = React.useMemo(() => CustomIcon ?? null, [CustomIcon]);

  const Success = React.useMemo(
    () => CustomSuccessIcon ?? <CheckIcon className={checkIconSize[size ?? 'none']} />,
    [CustomSuccessIcon, size]
  );

  const Error = React.useMemo(
    () => CustomErrorIcon ?? <CloseIcon className={errorIconSize[size ?? 'none']} />,
    [CustomErrorIcon, size]
  );

  const RenderIcon = React.useMemo(() => {
    if (isCompletedStep) return Success;
    if (isCurrentStep) {
      if (isError) return Error;
      if (isLoading) return <Spinner />;
    }
    if (error) return Error;
    if (loading) return <Spinner />;
    if (Icon) return Icon;
    if (showIndex) return index + 1;
    return <DotIcon className={tickIconSize[size ?? 'none']} />;
  }, [
    isCompletedStep,
    loading,
    error,
    Success,
    isCurrentStep,
    Icon,
    showIndex,
    index,
    isError,
    Error,
    isLoading,
    size,
  ]);

  return (
    <div
      {...etc}
      className={cn(
        stepperItemVariants({ isLastStep, isVertical, isClickable: isClickable && !!onClickStep }),
        className
      )}
      ref={ref}
      onClick={() => handleClick(index)}
      aria-disabled={!hasVisited}
    >
      <div className={cn('flex flex-1 items-center', centeredLabel ? 'flex-col gap-3' : 'gap-4')}>
        <button
          type="button"
          aria-current={isCurrentStep ? 'step' : undefined}
          data-invalid={isCurrentStep && isError}
          data-complete={isCompletedStep}
          data-clickable={isClickable}
          disabled={!hasVisited}
          className={iconButtonVariants({
            size: iconVariant === 'unstyled' ? 'none' : size,
            variant: iconVariant,
            className: classNames?.button,
          })}
        >
          {RenderIcon}
        </button>
        <StepperItemLabel
          label={label}
          description={description}
          optional={optional}
          optionalLabel={optionalLabel}
          labelClassName={classNames?.label}
          descriptionClassName={classNames?.description}
          {...{ isCurrentStep }}
        />
      </div>

      <StepperItemConnector
        index={index}
        isLastStep={isLastStep}
        hasLabel={!!label || !!description}
        isCompletedStep={isCompletedStep || false}
      >
        {(isCurrentStep || isCompletedStep) && children}
      </StepperItemConnector>
    </div>
  );
});

StepperItem.displayName = 'StepperItem';
