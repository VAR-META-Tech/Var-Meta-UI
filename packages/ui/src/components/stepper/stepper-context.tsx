import { createSafeContext } from '../../utils/create-safe-context';
import { type StepperProps } from './stepper';

export interface StepperContext extends StepperProps {
  isClickable?: boolean;
  isError?: boolean;
  isLoading?: boolean;
  isVertical?: boolean;
  centeredLabel?: boolean;
  stepCount?: number;
}

export const [StepperProvider, useStepperContext] = createSafeContext<StepperContext>(
  'StepperRoot component was not found in tree'
);
