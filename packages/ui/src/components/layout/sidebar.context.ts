import { createSafeContext } from '../../utils/create-safe-context';

export interface SidebarContext {
  toggleOpen: () => void;
  open?: boolean;
  expandOnHover?: boolean;
  setOpen: (open: boolean) => void;
  isHover?: boolean;
  setIsHover: (isHover: boolean) => void;
  isExpanded: boolean;
  active?: string;
  sidebarWidth?: number;
  setActive: (active: string) => void;
}

export const [SidebarProvider, useSidebarContext] = createSafeContext<SidebarContext>(
  'SidebarProvider or Layout component was not found in tree'
);
