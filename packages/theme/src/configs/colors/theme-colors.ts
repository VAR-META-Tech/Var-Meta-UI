import { colors } from './';
import { ThemeColors } from './types';

export const defaultLightColors: ThemeColors = {
  base: colors.base.black,
  background: {
    DEFAULT: colors.base.white,
    secondary: colors.gray.light[50],
  },
  foreground: colors.gray.light[900],
  border: colors.gray.light[300],
  divider: colors.gray.light[200],
  overlay: colors.gray.light[950],
  brand: colors.brand,
  tertiary: colors.gray.light,
  gray: colors.gray.light,
  secondary: colors.blue,
  warning: colors.warning,
  error: colors.error,
  success: colors.success,
  disabled: colors.gray.light[400],
  muted: colors.gray.light[400],
};

export const defaultDarkColors: ThemeColors = {
  base: colors.base.white,
  background: {
    DEFAULT: colors.gray.dark[950],
    secondary: colors.gray.dark[900],
  },
  foreground: colors.gray.dark[50],
  border: colors.gray.dark[700],
  divider: colors.gray.dark[800],
  overlay: colors.gray.dark[950],
  brand: colors.brand,
  tertiary: colors.gray.dark,
  gray: colors.gray.dark,
  secondary: colors.blue,
  warning: colors.warning,
  error: colors.error,
  success: colors.success,
  disabled: colors.gray.dark[400],
  muted: colors.gray.dark[400],
};
