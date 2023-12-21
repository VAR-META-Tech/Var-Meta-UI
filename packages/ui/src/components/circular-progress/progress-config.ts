export const mappingSizing: Record<Sizing, number> = {
  xxs: 64,
  xs: 160,
  sm: 200,
  md: 240,
  lg: 280,
};

export const mappingThickness: Record<Sizing, number> = {
  xxs: 6,
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
};

export type Sizing = 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
