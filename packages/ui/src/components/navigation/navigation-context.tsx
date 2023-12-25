import { createSafeContext } from '../../utils/create-safe-context';

export interface NavigationContext {
  variant?: 'default' | 'dark' | 'brand' | null;
}

export const [NavigationProvider, useNavigationContext] = createSafeContext<NavigationContext>(
  'NavigationRoot component was not found in tree'
);
