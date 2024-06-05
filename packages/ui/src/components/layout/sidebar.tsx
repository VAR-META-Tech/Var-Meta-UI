import React, { forwardRef, useState, type ElementRef } from 'react';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { tv, type VariantProps } from 'tailwind-variants';

import { type ElementProps, type VisibleState } from '../../types';
import { withAttr } from '../../utils/withAttr';
import { SidebarProvider } from './sidebar.context';

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

export interface SidebarProps extends ElementProps<'aside'>, VisibleState, VariantProps<typeof sidebarVariant> {
  expandOnHover?: boolean;
  width?: number;
  active?: string;
  defaultActive?: string;
  onActiveChange?: (active: string) => void;
}

const SidebarRoot = forwardRef<ElementRef<'aside'>, SidebarProps>((props, ref) => {
  const {
    className,
    open: openProps,
    defaultOpen,
    expandOnHover = true,
    onOpenChange,
    width = 272,
    children,
    style: styleProp,
    variant,
    active: activeProp,
    defaultActive: defaultActiveProp,
    onActiveChange,
    ...etc
  } = props;

  const [isHover, setIsHover] = useState(false);

  const [open, setOpen] = useControllableState<boolean>({
    prop: openProps,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });

  const [active, setActive] = useControllableState<string>({
    prop: activeProp,
    defaultProp: defaultActiveProp,
    onChange: onActiveChange,
  });

  const handleMouseEnter = () => {
    if (!expandOnHover) return;
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    if (!expandOnHover) return;
    setIsHover(false);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  const isExpanded = Boolean(open || isHover);

  return (
    <SidebarProvider value={{ open, isExpanded, active, setActive, toggleOpen, isHover, setOpen }}>
      <aside
        style={{ width: isExpanded ? width : 0, ...styleProp }}
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
    </SidebarProvider>
  );
});

export default SidebarRoot;
