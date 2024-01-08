import React from 'react';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { StepperProvider } from './stepper-context';

export interface StepperProps extends ElementProps<'div'> {
  activeStep: number;
  orientation?: 'vertical' | 'horizontal';
  state?: 'loading' | 'error';
  responsive?: boolean;
  onClickStep?: (step: number) => void;
  successIcon?: React.ReactElement;
  errorIcon?: React.ReactElement;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'none';
  iconVariant?: 'default' | 'unstyled' | null;
  showIndex?: boolean;
  nonLinear?: boolean;
}

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      activeStep = 0,
      state,
      responsive = true,
      nonLinear,
      orientation = 'horizontal',
      onClickStep,
      children,
      errorIcon,
      successIcon,
      className,
      size = 'md',
      iconVariant,
      showIndex,
      ...props
    },
    ref
  ) => {
    const childArr = React.Children.toArray(children);

    const stepCount = childArr.length;

    const renderHorizontalContent = () => {
      if (activeStep <= childArr.length) {
        return React.Children.map(childArr[activeStep], (node) => {
          if (!React.isValidElement(node)) return;
          return React.Children.map(node.props.children, (childNode) => childNode);
        });
      }
      return null;
    };

    const isClickable = !!onClickStep;

    return (
      <StepperProvider
        value={{
          activeStep,
          orientation,
          state,
          responsive,
          onClickStep,
          isClickable,
          stepCount,
          errorIcon,
          successIcon,
          size,
          iconVariant,
          showIndex,
          isVertical: orientation === 'vertical',
          centeredLabel: orientation === 'horizontal',
          isLoading: state === 'loading',
          isError: state === 'error',
        }}
      >
        <div
          {...props}
          ref={ref}
          className={cn(
            'flex w-full flex-1 justify-between text-center',
            orientation === 'vertical' ? 'flex-col' : 'flex-row gap-4',
            className
          )}
        >
          {React.Children.map(children, (child, i) => {
            let isCompletedStep = React.isValidElement(child) && child.props.isCompletedStep;
            if (!nonLinear && !isCompletedStep) {
              isCompletedStep = i < activeStep;
            }

            const isLastStep = i === stepCount - 1;
            const isCurrentStep = i === activeStep;

            const stepProps = {
              index: i,
              isCompletedStep,
              isCurrentStep,
              isLastStep,
            };

            if (React.isValidElement(child)) {
              return React.cloneElement(child, stepProps);
            }

            return null;
          })}
        </div>
        {orientation === 'horizontal' && renderHorizontalContent()}
      </StepperProvider>
    );
  }
);

Stepper.displayName = 'Stepper';

export { Stepper };
