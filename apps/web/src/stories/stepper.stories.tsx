import type { Meta, StoryFn } from '@storybook/react';
import { Button, Stepper, StepperItem, type StepperProps, useStepper } from '@var-ui/core';
import { BarChart01Icon, HomeLineIcon, LayersThree01Icon } from '@var-ui/icons';
import React from 'react';

import { View } from '@/components/View';

const meta: Meta = {
  title: 'Components/Stepper/Linear',
  component: Stepper,
};

export default meta;

const steps = [
  {
    label: 'Your details',
    description: 'Please provide your name and email',
    icon: <HomeLineIcon className="w-6 h-6" />,
    active: false,
  },
  {
    label: 'Company details',
    description: 'A few details about your company',
    icon: <BarChart01Icon className="w-6 h-6" />,
    active: true,
  },
  {
    label: 'Invite your team',
    description: 'Start collaborating ',
    icon: <LayersThree01Icon className="w-6 h-6" />,
    active: false,
  },
];

const DefaultTemplate: StoryFn<StepperProps> = ({ ...args }) => {
  const { nextStep, prevStep, resetSteps, activeStep, isDisabledStep, isLastStep, isOptionalStep } = useStepper({
    initialStep: 0,
    steps,
  });

  return (
    <View prop="Default">
      <div className="flex w-full flex-col gap-4 bg-background p-4">
        <Stepper {...args} activeStep={activeStep}>
          {steps.map((step, index) => (
            <StepperItem index={index} key={index} label={step.label} description={step.description}>
              <div className="h-40 w-full rounded-lg p-4 bg-background-secondary">
                <p>Step {index + 1} content</p>
              </div>
            </StepperItem>
          ))}
        </Stepper>
        <div className="flex items-center justify-end gap-2">
          {activeStep === steps.length ? (
            <>
              <h2>All steps completed!</h2>
              <Button onClick={resetSteps}>Reset</Button>
            </>
          ) : (
            <>
              <Button disabled={isDisabledStep} onClick={prevStep}>
                Prev
              </Button>
              <Button onClick={nextStep}>{isLastStep ? 'Finish' : isOptionalStep ? 'Skip' : 'Next'}</Button>
            </>
          )}
        </div>
      </div>
    </View>
  );
};

export const Default: StoryFn<StepperProps> = DefaultTemplate.bind({});
