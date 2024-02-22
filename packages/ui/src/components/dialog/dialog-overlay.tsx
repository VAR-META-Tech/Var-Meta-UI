import { Presence } from '@radix-ui/react-presence';
import type * as Radix from '@radix-ui/react-primitive';
import { Primitive } from '@radix-ui/react-primitive';
import * as React from 'react';

import { composeEventHandlers } from '../../utils/compose-event-handler';
import { getAriaLabelState, useDialogContext } from './dialog.context';
import { usePortalContext } from './dialog-portal';

type DialogOverlayImplElement = React.ElementRef<typeof Primitive.div>;
type PrimitiveDivProps = Radix.ComponentPropsWithoutRef<typeof Primitive.div>;
interface DialogOverlayImplProps extends PrimitiveDivProps {}

const DialogOverlayImpl = React.forwardRef<DialogOverlayImplElement, DialogOverlayImplProps>(
  (props: DialogOverlayImplProps, forwardedRef) => {
    const { ...overlayProps } = props;
    const context = useDialogContext();
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      <Primitive.div
        data-state={getAriaLabelState(context.open)}
        {...overlayProps}
        ref={forwardedRef}
        // We re-enable pointer-events prevented by `Dialog.Content` to allow scrolling the overlay.
        style={{ pointerEvents: 'auto', ...overlayProps.style }}
        onClick={composeEventHandlers(props.onClick, (e: any) => {
          if (e.target['ariaHidden'] === 'true') return;
          context.dismissable ? context.onOpenChange(false) : null;
        })}
      />
    );
  }
);

const OVERLAY_NAME = 'DialogOverlay';

type DialogOverlayElement = DialogOverlayImplElement;
export interface DialogOverlayProps extends DialogOverlayImplProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
}

export const DialogOverlay = React.forwardRef<DialogOverlayElement, DialogOverlayProps>(
  (props: DialogOverlayProps, forwardedRef) => {
    const portalContext = usePortalContext();
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext();
    return (
      <Presence present={forceMount || context.open}>
        <DialogOverlayImpl {...overlayProps} ref={forwardedRef} />
      </Presence>
    );
  }
);

DialogOverlay.displayName = OVERLAY_NAME;
