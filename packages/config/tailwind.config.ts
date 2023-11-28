import type { Config } from 'tailwindcss';
import { colors, spacing, width } from './config';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class'],
  theme: {
    screens: {
      sm: '36rem',
      md: '48rem',
      lg: '80rem',
    },
    fontSize: {
      xs: ['.75rem', '1.125rem'],
      sm: ['.875rem', '1.25rem'],
      md: ['1rem', '1.5rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.875rem'],
      'display-xs': ['1.5rem', '2rem'],
      'display-sm': ['1.875rem', '2.375rem'],
      'display-md': ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '-2%' }],
      'display-lg': ['3rem', { lineHeight: '3.75rem', letterSpacing: '-2%' }],
      'display-xl': ['3.75rem', { lineHeight: '4.5rem', letterSpacing: '-2%' }],
      'display-2xl': ['4.5rem', { lineHeight: '5.625rem', letterSpacing: '-2%' }],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
    },
    extend: {
      width: width,
      maxWidth: width,
      minWidth: width,
      spacing: spacing,
      colors: colors,
      borderRadius: {
        none: '0rem',
        xxs: '0.125rem',
        xs: '0.25rem',
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.625rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.25rem',
        '4xl': '1.5rem',
        half: '50%',
      },
      boxShadow: {
        xs: '0px 1px 2px 0px rgba(16,24,40,0.05)',
        sm: '0px 1px 2px 0px rgba(16,24,40,0.06), 0px 1px 3px 0px rgba(16,24,40,0.1)',
        md: '0px 2px 4px -2px rgba(16,24,40,0.06), 0px 4px 8px -2px rgba(16,24,40,0.1)',
        lg: '0px 4px 6px -2px rgba(16,24,40,0.03), 0px 12px 16px -4px rgba(16,24,40,0.08)',
        xl: '0px 8px 8px -4px rgba(16,24,40,0.03), 0px 20px 24px -4px rgba(16,24,40,0.08)',
        '2xl': '0px 24px 48px -12px rgba(16,24,40,0.18)',
        '3xl': '0px 32px 64px -12px rgba(16,24,40,0.14)',
        brand: '0px 0px 0px 4px rgba(158,119,237,0.24)',
        'brand-xs': '0px 0px 0px 4px rgba(158,119,237,0.24), 0px 1px 2px 0px rgba(16,24,40,0.05)',
        'brand-sm':
          '0px 0px 0px 4px rgba(158,119,237,0.24), 0px 1px 2px 0px rgba(16,24,40,0.06), 0px 1px 3px 0px rgba(16,24,40,0.1)',
        gray: '0px 0px 0px 4px rgba(152,162,179,0.14)',
        'gray-xs': '0px 0px 0px 4px rgba(152,162,179,0.14), 0px 1px 2px 0px rgba(16,24,40,0.05)',
        'gray-sm':
          '0px 0px 0px 4px rgba(152,162,179,0.14), 0px 1px 2px 0px rgba(16,24,40,0.06), 0px 1px 3px 0px rgba(16,24,40,0.1)',
        'gray-secondary': '0px 0px 0px 4px rgba(152,162,179,0.2)',
        error: '0px 0px 0px 4px rgba(240,68,56,0.24)',
        'error-xs': '0px 0px 0px 4px rgba(240,68,56,0.24), 0px 1px 2px 0px rgba(16,24,40,0.05)',
      },
      ringColor: {
        'ring-brand': 'rgba(158,119,237,0.24)',
        'ring-gray': 'rgba(152,162,179,0.14)',
        'ring-error': 'rgba(240,68,56,0.24)',
      },
      backdropBlur: {
        sm: '.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2.5rem',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
