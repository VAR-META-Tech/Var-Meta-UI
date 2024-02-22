import { createSafeContext } from '../../utils/create-safe-context';

export interface DialogContext {
  toggleOpen: () => void;
  triggerRef: React.RefObject<HTMLButtonElement>;
  contentRef: React.RefObject<HTMLDivElement>;
  contentId: string;
  titleId: string;
  descriptionId: string;
  open: boolean;
  onOpenChange(open: boolean): void;
  dismissable?: boolean;
}

export const [DialogProvider, useDialogContext] = createSafeContext<DialogContext>(
  'Dialog component was not found in tree'
);

/* -----------------------------------------------------------------------------------------------*/

export function getAriaLabelState(open: boolean) {
  return open ? 'open' : 'closed';
}
