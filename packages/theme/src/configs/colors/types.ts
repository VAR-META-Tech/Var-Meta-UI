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

export type SemanticScheme =
  | Partial<{
      secondary: string;
      DEFAULT: string;
    }>
  | string;

export type BaseColors = {
  background: SemanticScheme;
  foreground: SemanticScheme;
  divider: SemanticScheme;
  disabled: SemanticScheme;
  overlay: SemanticScheme;
  border: SemanticScheme;
  muted: SemanticScheme;
};

export type ThemeColors = BaseColors & {
  base: ColorScheme;
  brand: ColorScheme;
  secondary: ColorScheme;
  tertiary: ColorScheme;
  gray: ColorScheme;
  error: ColorScheme;
  warning: ColorScheme;
  success: ColorScheme;
};
