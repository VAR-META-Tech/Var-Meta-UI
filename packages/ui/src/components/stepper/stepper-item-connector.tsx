import React from 'react';

import { cn } from '../../utils/cn';
import { Divider } from '../divider';
import { useStepperContext, type StepperContext } from './stepper-context';

export interface StepperItemConnectorProps extends React.HTMLAttributes<HTMLDivElement> {
  isCompletedStep: boolean;
  isLastStep?: boolean | null;
  hasLabel?: boolean;
  index: number;
}

const spacing: Record<NonNullable<StepperContext['size']>, string> = {
  sm: 'ms-2.5 ps-6',
  md: 'ms-4 ps-8',
  lg: 'ms-5 ps-8',
  none: '',
};

const positions: Record<NonNullable<StepperContext['size']>, string> = {
  sm: 'absolute top-3 left-[calc(-50%_+_10px)] left-[calc(50%_+_10px)]',
  md: 'absolute top-4 left-[calc(-50%_+_10px)] left-[calc(50%_+_10px)]',
  lg: 'absolute top-5 left-[calc(-50%_+_10px)] left-[calc(50%_+_10px)]',
  none: '',
};

const StepperItemConnector = React.memo(({ isCompletedStep, children, isLastStep }: StepperItemConnectorProps) => {
  const { isVertical, centeredLabel, size } = useStepperContext();
  if (isVertical) {
    return (
      <div
        data-highlighted={isCompletedStep}
        className={cn(
          'mt-1 flex h-auto min-h-[2rem] flex-1 self-stretch border-l-2',
          spacing[size ?? 'none'],
          isLastStep ? 'min-h-0 border-transparent' : '',
          isCompletedStep ? 'border-button' : ''
        )}
      >
        {!isCompletedStep && <div className="my-4 block h-auto w-full">{children}</div>}
      </div>
    );
  }

  if (isLastStep) {
    return null;
  }

  return (
    <Divider
      data-complete={isCompletedStep}
      className={cn('border-border-secondary data-[complete=true]:border-button flex flex-1 self-auto border-t-2', {
        [positions[size ?? 'none']]: centeredLabel,
      })}
      orientation="horizontal"
    />
  );
});

StepperItemConnector.displayName = 'StepperItemConnector';

export { StepperItemConnector };
