import * as React from 'react';
import { Portal as PortalPrimitive, type PortalProps } from '@radix-ui/react-portal';
import { Presence } from '@radix-ui/react-presence';
import type * as Radix from '@radix-ui/react-primitive';
import { Primitive } from '@radix-ui/react-primitive';

import { cn } from '../../utils/cn';
import { composeEventHandlers } from '../../utils/compose-event-handler';
import { withAttr } from '../../utils/withAttr';
import { useSidebarContext } from './sidebar.context';

type SidebarOverlayImplElement = React.ElementRef<typeof Primitive.div>;
type PrimitiveDivProps = Radix.ComponentPropsWithoutRef<typeof Primitive.div>;
interface SidebarOverlayImplProps extends PrimitiveDivProps {}

const SidebarOverlayImpl = React.forwardRef<SidebarOverlayImplElement, SidebarOverlayImplProps>(
  (props: SidebarOverlayImplProps, forwardedRef) => {
    const { open, setOpen } = useSidebarContext();
    return (
      <Primitive.div
        role="sidebar-overlay"
        data-state={withAttr(open)}
        {...props}
        ref={forwardedRef}
        style={{ pointerEvents: open ? 'auto' : 'none', ...props.style }}
        onClick={composeEventHandlers(props.onClick, (e: any) => {
          if (e.target['ariaHidden'] === 'true') return;
          setOpen(false);
        })}
      />
    );
  }
);

const OVERLAY_NAME = 'SidebarOverlay';

type SidebarOverlayElement = SidebarOverlayImplElement;
export interface SidebarOverlayProps extends SidebarOverlayImplProps {
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

export const SidebarOverlay = React.forwardRef<SidebarOverlayElement, SidebarOverlayProps>(
  (props: SidebarOverlayProps, forwardedRef) => {
    const { forceMount, className, container, ...etc } = props;
    const { open, isMobile } = useSidebarContext();
    if (!isMobile) return null;

    return (
      <SidebarOverlayImpl
        className={cn(
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 bg-overlay/70 fixed inset-0 z-40 backdrop-blur-sm transition-all',
          {
            'invisible opacity-0': !open,
            'visible opacity-100': open,
          },
          className
        )}
        {...etc}
        ref={forwardedRef}
      />
    );
  }
);

SidebarOverlay.displayName = OVERLAY_NAME;
