import { DismissableLayer } from '@radix-ui/react-dismissable-layer';
import { FocusScope } from '@radix-ui/react-focus-scope';
import { Presence } from '@radix-ui/react-presence';
import type * as Radix from '@radix-ui/react-primitive';
import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { RemoveScroll } from 'react-remove-scroll';

import { useFocusGuards, useMergedRef } from '../../hooks';
import { getAriaLabelState, useDialogContext } from './dialog.context';

/* -----------------------------------------------------------------------------------------------*/

export type DialogContentImplElement = React.ElementRef<typeof DismissableLayer>;
type DismissableLayerProps = Radix.ComponentPropsWithoutRef<typeof DismissableLayer>;
type FocusScopeProps = Radix.ComponentPropsWithoutRef<typeof FocusScope>;
interface DialogContentImplProps extends Omit<DismissableLayerProps, 'onDismiss'> {
  /**
   * When `true`, focus cannot escape the `Content` via keyboard,
   * pointer, or a programmatic focus.
   * @defaultValue false
   */
  trapFocus?: FocusScopeProps['trapped'];

  /**
   * Event handler called when auto-focusing on open.
   * Can be prevented.
   */
  onOpenAutoFocus?: FocusScopeProps['onMountAutoFocus'];

  /**
   * Event handler called when auto-focusing on close.
   * Can be prevented.
   */
  onCloseAutoFocus?: FocusScopeProps['onUnmountAutoFocus'];
}

const DialogContentImpl = React.forwardRef<DialogContentImplElement, DialogContentImplProps>(
  (props: DialogContentImplProps, forwardedRef) => {
    const { trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext();
    const contentRef = React.useRef<HTMLDivElement>(null);
    const composedRefs = useMergedRef(forwardedRef, contentRef);

    // Make sure the whole tree has focus guards as our `Dialog` will be
    // the last element in the DOM (because of the `Portal`)
    useFocusGuards();

    return (
      <>
        <RemoveScroll allowPinchZoom as={Slot}>
          <FocusScope
            asChild
            loop
            trapped={trapFocus}
            onMountAutoFocus={onOpenAutoFocus}
            onUnmountAutoFocus={onCloseAutoFocus}
          >
            <DismissableLayer
              role="dialog"
              id={context.contentId}
              aria-describedby={context.descriptionId}
              aria-labelledby={context.titleId}
              data-state={getAriaLabelState(context.open)}
              {...contentProps}
              ref={composedRefs}
              // onDismiss={() => context.onOpenChange?.(false)}
            />
          </FocusScope>
        </RemoveScroll>
      </>
    );
  }
);
const CONTENT_NAME = 'DialogContent';

export interface DialogContentProps extends Omit<DialogContentImplProps, 'trapFocus' | 'disableOutsidePointerEvents'> {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
}

export const DialogContent = React.forwardRef<DialogContentImplElement, DialogContentProps>((props, forwardedRef) => {
  const { forceMount, ...etc } = props;

  const context = useDialogContext();
  const hasInteractedOutsideRef = React.useRef(false);
  const hasPointerDownOutsideRef = React.useRef(false);

  return (
    <Presence present={forceMount || context.open}>
      <DialogContentImpl
        {...etc}
        ref={forwardedRef}
        trapFocus={false}
        disableOutsidePointerEvents={false}
        onCloseAutoFocus={(event) => {
          props.onCloseAutoFocus?.(event);

          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
            // Always prevent auto focus because we either focus manually or want user agent focus
            event.preventDefault();
          }

          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        }}
        onInteractOutside={(event) => {
          props.onInteractOutside?.(event);

          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === 'pointerdown') {
              hasPointerDownOutsideRef.current = true;
            }
          }

          // Prevent dismissing when clicking the trigger.
          // As the trigger is already setup to close, without doing so would
          // cause it to close and immediately open.
          const target = event.target as HTMLElement;
          const targetIsTrigger = context.triggerRef.current?.contains(target);
          if (targetIsTrigger) event.preventDefault();

          // On Safari if the trigger is inside a container with tabIndex={0}, when clicked
          // we will get the pointer down outside event on the trigger, but then a subsequent
          // focus outside event on the container, we ignore any focus outside event when we've
          // already had a pointer down outside event.
          if (event.detail.originalEvent.type === 'focusin' && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }}
      />
    </Presence>
  );
});

DialogContent.displayName = CONTENT_NAME;
