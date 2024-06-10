import { colors } from './';
import { ThemeColors } from './types';

export const defaultLightColors: ThemeColors = {
  base: colors.base.black,
  background: {
    DEFAULT: colors.base.white,
    secondary: colors.gray.light[50],
    tertiary: colors.gray.light[100],
    quaternary: colors.gray.light[200],
  },
  active: colors.gray.light[100],
  foreground: {
    DEFAULT: colors.gray.light[900],
    secondary: colors.gray.light[700],
    tertiary: colors.gray.light[600],
    quaternary: colors.gray.light[500],
  },
  border: {
    DEFAULT: colors.gray.light[300],
    secondary: colors.gray.light[200],
  },
  divider: colors.gray.light[200],
  overlay: colors.gray.light[950],
  brand: colors.brand.light,
  tertiary: colors.orange,
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
    tertiary: colors.gray.dark[800],
    quaternary: colors.gray.dark[700],
  },
  active: colors.gray.dark[800],
  foreground: {
    DEFAULT: colors.base.white,
    secondary: colors.gray.dark[300],
    tertiary: colors.gray.dark[400],
    quaternary: colors.gray.dark[500],
  },
  border: {
    DEFAULT: colors.gray.dark[700],
    secondary: colors.gray.dark[800],
  },
  divider: colors.gray.dark[800],
  overlay: colors.gray.dark[950],
  brand: colors.brand.dark,
  tertiary: colors.orange,
  gray: colors.gray.dark,
  secondary: colors.blue,
  warning: colors.warning,
  error: colors.error,
  success: colors.success,
  disabled: colors.gray.dark[500],
  muted: colors.gray.dark[400],
};
