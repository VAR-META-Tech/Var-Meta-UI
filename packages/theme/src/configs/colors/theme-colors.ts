import { colors } from './';
import { ThemeColors } from './types';

export const defaultLightColors: ThemeColors = {
  base: colors.base.black,
  background: colors.base.white,
  foreground: colors.gray[900],
  border: colors.gray[300],
  divider: colors.gray[200],
  overlay: colors.gray[950],
  brand: colors.brand,
  gray: colors.gray,
  secondary: colors.blue,
  warning: colors.warning,
  error: colors.error,
  success: colors.success,
  disabled: colors.gray[400],
};

export const defaultDarkColors: ThemeColors = {
  base: colors.base.white,
  background: colors.gray[950],
  foreground: colors.gray[50],
  border: colors.gray[700],
  divider: colors.gray[800],
  overlay: colors.gray[950],
  brand: colors.brand,
  gray: colors.gray,
  secondary: colors.blue,
  warning: colors.warning,
  error: colors.error,
  success: colors.success,
  disabled: colors.gray[400],
};
