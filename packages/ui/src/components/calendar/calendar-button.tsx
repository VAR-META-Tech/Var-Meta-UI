import React, { type ReactNode } from 'react';

import { type ElementProps } from '../../types';
import { CalendarIcon } from '../icons';

export interface CalendarButtonProps extends ElementProps<'button'> {
  icon?: ReactNode;
}

const CalendarButton = ({ icon = <CalendarIcon />, ...props }: CalendarButtonProps) => {
  return (
    <button className="flex items-center justify-center" type="button" {...props}>
      {icon}
    </button>
  );
};

export default CalendarButton;
