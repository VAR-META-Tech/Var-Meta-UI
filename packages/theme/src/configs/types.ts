export type ColorScheme =
  | Partial<{
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      950: string;
      DEFAULT: string;
    }>
  | string;

export type BaseColors = {
  background: ColorScheme;
  foreground: ColorScheme;
  divider: ColorScheme;
  disabled: ColorScheme;
  overlay: ColorScheme;
  border: ColorScheme;
};

export type ThemeColors = BaseColors & {
  default: ColorScheme;
  brand: ColorScheme;
  secondary: ColorScheme;
  gray: ColorScheme;
  error: ColorScheme;
  warning: ColorScheme;
  success: ColorScheme;
};
