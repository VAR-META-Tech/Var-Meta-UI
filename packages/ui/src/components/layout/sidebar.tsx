import React, { forwardRef, useMemo, type ElementRef } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { tv, type VariantProps } from 'tailwind-variants';

import { type ElementProps, type VisibleState } from '../../types';
import { withAttr } from '../../utils/withAttr';
import { useSidebarContext } from './sidebar.context';

const sidebarVariant = tv({
  base: 'antialiased group transition-width ease-in-out duration-300 flex flex-col fixed top-0 left-0 h-full z-50 bg-background w-0 min-w-20',
  variants: {
    variant: {
      outline: 'border-r border-border-secondary',
      shadow: 'shadow-md',
    },
  },
  defaultVariants: {
    variant: 'outline',
  },
});

export interface SidebarProps extends ElementProps<'aside'>, VisibleState, VariantProps<typeof sidebarVariant> {}

const SidebarRoot = forwardRef<ElementRef<'aside'>, SidebarProps>((props, ref) => {
  const { className, children, style: styleProp, variant, ...etc } = props;

  const { isMobile, open, expandOnHover, sidebarWidth = 272, setIsHover, isExpanded } = useSidebarContext();

  const handleMouseEnter = () => {
    if (!expandOnHover || isMobile) return;
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    if (!expandOnHover || isMobile) return;
    setIsHover(false);
  };

  const width = useMemo(() => {
    if (isMobile) return sidebarWidth;
    return isExpanded ? sidebarWidth : 0;
  }, [isExpanded, isMobile, sidebarWidth]);

  const left = useMemo(() => {
    if (!isMobile) return undefined;
    return Boolean(open) ? 0 : -(sidebarWidth + 40);
  }, [isMobile, open, sidebarWidth]);

  return (
    <RemoveScroll enabled={isMobile && open} allowPinchZoom>
      <aside
        style={{ width, left, ...styleProp }}
        className={sidebarVariant({ variant, className })}
        role="sidebar"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-expanded={withAttr(isExpanded)}
        data-opened={withAttr(open)}
        aria-expanded={withAttr(isExpanded)}
        ref={ref}
        {...etc}
      >
        {children}
      </aside>
    </RemoveScroll>
  );
});

export default SidebarRoot;
