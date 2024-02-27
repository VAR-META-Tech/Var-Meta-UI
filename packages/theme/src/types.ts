import { ThemeColors } from './configs/colors/types';

export type DefaultThemeType = 'light' | 'dark';

export type ConfigTheme = {
  extend?: DefaultThemeType;
  colors?: Partial<ThemeColors>;
};

export type ConfigThemes = Record<string, ConfigTheme>;

export type PluginConfig = {
  /**
   * The prefix for the css variables.
   * @default "varui"
   */
  prefix?: string;
  /**
   * The theme definitions.
   */
  themes?: ConfigThemes;
  /**
   * The default theme to use.
   * @default "light"
   */
  defaultTheme?: DefaultThemeType;
};
