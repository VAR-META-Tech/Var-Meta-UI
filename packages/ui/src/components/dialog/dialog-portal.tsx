import { Portal as PortalPrimitive } from '@radix-ui/react-portal';
import { Presence } from '@radix-ui/react-presence';
import React from 'react';

import { createSafeContext } from '../../utils/create-safe-context';
import { useDialogContext } from './dialog.context';
const PORTAL_NAME = 'DialogPortal';

type PortalContextValue = { forceMount?: true };

export const [PortalProvider, usePortalContext] = createSafeContext<PortalContextValue>(
  'Portal component was not found in tree'
);

type PortalProps = React.ComponentPropsWithoutRef<typeof PortalPrimitive>;
export interface DialogPortalProps {
  children?: React.ReactNode;
  /**
   * Specify a container element to portal the content into.
   */
  container?: PortalProps['container'];
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
}

export const DialogPortal: React.FC<DialogPortalProps> = (props: DialogPortalProps) => {
  const { forceMount, children, container } = props;
  const context = useDialogContext();

  return (
    <PortalProvider value={{ forceMount }}>
      {React.Children.map(children, (child) => (
        <Presence present={forceMount || context.open}>
          <PortalPrimitive asChild container={container}>
            {child}
          </PortalPrimitive>
        </Presence>
      ))}
    </PortalProvider>
  );
};

DialogPortal.displayName = PORTAL_NAME;
