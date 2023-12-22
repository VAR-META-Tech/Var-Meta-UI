import { type ReactNode } from 'react';

import { createSafeContext } from '../../utils/create-safe-context';

export interface AccordionContext {
  /**
   * Specifies whether to display a divider after the element.
   */
  divider?: boolean;

  /**
   * The icon to display when the element is active.
   */
  activeIcon?: ReactNode;

  /**
   * The icon to display when the element is inactive.
   */
  inactiveIcon?: ReactNode;

  /**
   * Specifies the position of the icon relative to the text.
   * Can be 'left' or 'right'.
   */
  iconPosition?: 'left' | 'right';

  /**
   * Specifies whether to hide the icon.
   */
  hideIcon?: boolean;
}

export const [AccordionProvider, useAccordionContext] = createSafeContext<AccordionContext>(
  'Accordion component was not found in tree'
);
