import { Config } from 'tailwindcss';
import { defaultWidth } from './width';
import { defaultColor } from './colors';
import { defaultSpacing } from './spacing';
import { defaultRadius } from './radius';
import { defaultShadow } from './shadow';

export const defaultTheme: Config['theme'] = {
  screens: {
    sm: '36rem',
    md: '48rem',
    lg: '80rem',
  },
  extend: {
    width: defaultWidth,
    maxWidth: defaultWidth,
    minWidth: defaultWidth,
    spacing: defaultSpacing,
    colors: defaultColor,
    borderRadius: defaultRadius,
    boxShadow: defaultShadow,
    keyframes: {
      'accordion-down': {
        from: { height: '0' },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0' },
      },
      'collapsible-down': {
        from: { height: '0' },
        to: { height: 'var(--radix-collapsible-content-height)' },
      },
      'collapsible-up': {
        from: { height: 'var(--radix-collapsible-content-height)' },
        to: { height: '0' },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
      'collapsible-down': 'collapsible-down 0.2s ease-out',
      'collapsible-up': 'collapsible-up 0.2s ease-out',
    },
  },
};
