import React, { type ComponentPropsWithoutRef } from 'react';
import { Primitive } from '@radix-ui/react-primitive';

import { useMergedRef } from '../../hooks';
import { composeEventHandlers } from '../../utils/compose-event-handler';
import { getAriaLabelState, useDialogContext } from './dialog.context';

const TRIGGER_NAME = 'DialogClose';

type DialogCloseElement = React.ElementRef<typeof Primitive.button>;
type PrimitiveButtonProps = ComponentPropsWithoutRef<typeof Primitive.button>;
export interface DialogCloseProps extends PrimitiveButtonProps {}

export const DialogClose = React.forwardRef<DialogCloseElement, DialogCloseProps>(
  (triggerProps: DialogCloseProps, forwardedRef) => {
    const context = useDialogContext();
    const composedTriggerRef = useMergedRef(forwardedRef, context.triggerRef);
    return (
      <Primitive.button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={context.open}
        aria-controls={context.contentId}
        data-state={getAriaLabelState(context.open)}
        {...triggerProps}
        ref={composedTriggerRef}
        onClick={composeEventHandlers(triggerProps.onClick, () => context.onOpenChange(false))}
      />
    );
  }
);

DialogClose.displayName = TRIGGER_NAME;
