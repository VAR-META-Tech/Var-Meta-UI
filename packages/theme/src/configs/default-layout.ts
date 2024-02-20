import { Config } from 'tailwindcss';
import { defaultWidth } from './width';
import { defaultSpacing } from './spacing';
import { defaultRadius } from './radius';
import { defaultShadow } from './shadow';
import { defaultFont } from './font';
import { defaultAnimation, defaultKeyFrame } from './animation';

export const defaultTheme: Config['theme'] = {
  screens: {
    sm: '36rem',
    md: '48rem',
    lg: '80rem',
    xl: '90rem',
    xxl: '120rem',
  },
  container: {
    center: true,
    padding: {
      DEFAULT: '1rem',
      lg: '2rem',
      xl: '2rem',
    },
  },
  extend: {
    fontSize: defaultFont,
    width: defaultWidth,
    maxWidth: defaultWidth,
    minWidth: defaultWidth,
    spacing: defaultSpacing,
    borderRadius: defaultRadius,
    boxShadow: defaultShadow,
    keyframes: defaultKeyFrame,
    animation: defaultAnimation,
  },
};
