import { ThemeConfig } from 'tailwindcss/types/config';

export const defaultFont = {
  xxs: ['0.625rem', { lineHeight: '1rem' }],
  xs: ['0.75rem', { lineHeight: '1rem' }],
  sm: ['0.875rem', { lineHeight: '1.25rem' }],
  md: ['1rem', { lineHeight: '1.5rem' }],
  base: ['1rem', { lineHeight: '1.5rem' }],
  lg: ['1.125rem', { lineHeight: '1.75rem' }],
  xl: ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.0025rem' }],
  '2xl': ['1.5rem', { lineHeight: '1.875rem', letterSpacing: '-0.005rem' }],
  '3xl': ['1.75rem', { lineHeight: '2.25rem', letterSpacing: '-0.0063rem' }],
  '4xl': ['2.1875rem', { lineHeight: '2.5rem', letterSpacing: '-0.0075rem' }],
  '5xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.01rem' }],
  '6xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.025rem' }],
  '7xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.025rem' }],
  '8xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.025rem' }],
  '9xl': ['8.75rem', { lineHeight: '1', letterSpacing: '-0.025rem' }],
} as ThemeConfig['fontSize'];
