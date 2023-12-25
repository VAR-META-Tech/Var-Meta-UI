import * as React from 'react';

import { type UseStepper } from './use-stepper';

type useStepperReturn = {
  nextStep: () => void;
  prevStep: () => void;
  resetSteps: () => void;
  setStep: (step: number) => void;
  setCompletedStep: (step: number) => void;
  removeCompletedStep: (step: number) => void;
  completedSteps: number[];
  activeStep: number;
  isDisabledStep: boolean;
  isLastStep: boolean;
  isOptionalStep: boolean | undefined;
};

export function useNonLinearStepper({ initialStep, steps }: UseStepper): useStepperReturn {
  const [activeStep, setActiveStep] = React.useState(initialStep);
  const [completedSteps, setCompletedSteps] = React.useState<number[]>([]);

  const setCompletedStep = (step: number) => {
    completedSteps.push(step);
    const newStep = Array.from(new Set(completedSteps));
    setCompletedSteps(newStep);
  };

  const removeCompletedStep = (step: number) => {
    const newStep = completedSteps.filter((x) => x !== step);
    setCompletedSteps(newStep);
  };

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
    completedSteps,
    setCompletedStep,
    removeCompletedStep,
  };
}
