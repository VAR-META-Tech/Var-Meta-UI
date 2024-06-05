import { createSafeContext } from '../../utils/create-safe-context';

export interface SidebarContext {
  toggleOpen: () => void;
  setOpen: (open: boolean) => void;
  open?: boolean;
  isHover?: boolean;
  isExpanded: boolean;
  active?: string;
  setActive: (active: string) => void;
}

export const [SidebarProvider, useSidebarContext] = createSafeContext<SidebarContext>(
  'Sidebar component was not found in tree'
);
