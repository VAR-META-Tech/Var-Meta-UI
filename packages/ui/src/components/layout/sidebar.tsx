import React, { forwardRef, type ElementRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { type ElementProps, type VisibleState } from '../../types';
import { withAttr } from '../../utils/withAttr';
import { useSidebarContext } from './sidebar.context';

const sidebarVariant = tv({
  base: 'antialiased group transition-width ease-in-out duration-300 flex flex-col fixed top-0 left-0 h-full z-10 bg-background w-0 min-w-20',
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

  const { open, expandOnHover, sidebarWidth, setIsHover, isExpanded } = useSidebarContext();

  const handleMouseEnter = () => {
    if (!expandOnHover) return;
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    if (!expandOnHover) return;
    setIsHover(false);
  };

  return (
    <aside
      style={{ width: isExpanded ? sidebarWidth : 0, ...styleProp }}
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
  );
});

export default SidebarRoot;
