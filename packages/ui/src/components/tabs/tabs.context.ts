import { createSafeContext } from '../../utils/create-safe-context';
import { type RadiusVariantKey } from '../../utils/variant-common';

export interface TabsContext {
  value: string;
  setValue: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'outline';
  radius?: RadiusVariantKey;
  size?: 'sm' | 'md' | 'lg';

  // Framer animated layout id
  layoutId?: string;
}

export const [TabsProvider, useTabsContext] = createSafeContext<TabsContext>('Tabs component was not found in tree');
