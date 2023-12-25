import * as React from 'react';

import { type StepperItemProps } from './stepper-item';

export type UseStepper = {
  initialStep: number;
  steps: Pick<StepperItemProps, 'label' | 'description' | 'optional' | 'optionalLabel' | 'icon'>[];
};

type useStepperReturn = {
  nextStep: () => void;
  prevStep: () => void;
  resetSteps: () => void;
  setStep: (step: number) => void;
  activeStep: number;
  isDisabledStep: boolean;
  isLastStep: boolean;
  isOptionalStep: boolean | undefined;
};

export function useStepper({ initialStep, steps }: UseStepper): useStepperReturn {
  const [activeStep, setActiveStep] = React.useState(initialStep);

  const nextStep = () => {
    setActiveStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setActiveStep((prev) => prev - 1);
  };

  const resetSteps = () => {
    setActiveStep(initialStep);
  };

  const setStep = (step: number) => {
    setActiveStep(step);
  };

  const isDisabledStep = activeStep === 0;

  const isLastStep = activeStep === steps.length - 1;

  const isOptionalStep = steps[activeStep]?.optional;

  return {
    nextStep,
    prevStep,
    resetSteps,
    setStep,
    activeStep,
    isDisabledStep,
    isLastStep,
    isOptionalStep,
  };
}
