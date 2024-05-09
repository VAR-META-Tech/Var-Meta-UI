import React, { type ComponentPropsWithoutRef } from 'react';
import { Primitive } from '@radix-ui/react-primitive';

import { useMergedRef } from '../../hooks';
import { composeEventHandlers } from '../../utils/compose-event-handler';
import { getAriaLabelState, useDialogContext } from './dialog.context';

const TRIGGER_NAME = 'DialogTrigger';

type DialogTriggerElement = React.ElementRef<typeof Primitive.button>;
type PrimitiveButtonProps = ComponentPropsWithoutRef<typeof Primitive.button>;
export interface DialogTriggerProps extends PrimitiveButtonProps {}

export const DialogTrigger = React.forwardRef<DialogTriggerElement, DialogTriggerProps>(
  (triggerProps: DialogTriggerProps, forwardedRef) => {
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
        onClick={composeEventHandlers(triggerProps.onClick, context.toggleOpen)}
      />
    );
  }
);

DialogTrigger.displayName = TRIGGER_NAME;
