import { createSafeContext } from '../../utils/create-safe-context';

export interface SidebarContext {
  toggleOpen: () => void;
  open?: boolean;
  setOpen: (open: boolean) => void;
  isHover?: boolean;
  setIsHover?: (isHover: boolean) => void;
  isExpanded: boolean;
  active?: string;
  setActive: (active: string) => void;
}

export const [SidebarProvider, useSidebarContext] = createSafeContext<SidebarContext>(
  'Sidebar component was not found in tree'
);
