export type ColorScheme =
  | Partial<{
      25: string;
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
      tertiary?: string;
      quaternary?: string;
      secondary: string;
      DEFAULT: string;
    }>
  | string;

export type ComponentScheme = {
  hover?: string;
  focus?: string;
  active?: string;
  border?: string;
  DEFAULT: string;
};

export type ComponentColors = {
  button?: ComponentScheme;
  input?: ComponentScheme;
};

export type BaseColors = {
  background: {
    DEFAULT?: string;
    white?: string;
    primary?: string;
    secondary?: string;
    light?: string;
    disabled?: string;
    tertiary?: string;
    quaternary?: string;
  };
  foreground: {
    DEFAULT?: string;
    primary?: string;
    button?: string;
    secondary?: string;
    disabled?: string;
    error?: string;
    success?: string;
    warning?: string;
  };
  divider: SemanticScheme;
  active: SemanticScheme;
  disabled: SemanticScheme;
  overlay: SemanticScheme;
  border: SemanticScheme;
  muted: SemanticScheme;
};

export interface ThemeColors extends BaseColors, ComponentColors {
  base: ColorScheme;
  brand: ColorScheme;
  secondary: ColorScheme;
  tertiary: ColorScheme;
  gray: ColorScheme;
  error: ColorScheme;
  warning: ColorScheme;
  success: ColorScheme;
}
