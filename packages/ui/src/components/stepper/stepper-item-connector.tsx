import { cn } from '@hashgraph/utils';
import React from 'react';

import { Divider } from '../divider';
import { type StepperContext, useStepperContext } from './stepper-context';

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
  sm: 'w-full absolute top-3 left-[calc(50%_-_24px)]',
  md: 'w-full absolute top-4 left-[calc(50%_-_32px)]',
  lg: 'w-full absolute top-5 left-[calc(50%_-_40px)]',
  none: '',
};

const StepperItemConnector = React.memo(({ isCompletedStep, children, isLastStep }: StepperItemConnectorProps) => {
  const { isVertical, centeredLabel, size } = useStepperContext();
  if (isVertical) {
    return (
      <div
        data-highlighted={isCompletedStep}
        className={cn(
          'mt-1 flex h-auto min-h-[2rem] flex-1 self-stretch border-l-2 ',
          spacing[size ?? 'none'],
          isLastStep ? 'min-h-0 border-transparent' : '',
          isCompletedStep ? 'border-brand-600' : ''
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
      className={cn('flex border-t-2 flex-1 self-auto data-[complete=true]:border-brand-600', {
        [positions[size ?? 'none']]: centeredLabel,
      })}
      orientation="horizontal"
    />
  );
});

StepperItemConnector.displayName = 'StepperItemConnector';

export { StepperItemConnector };
