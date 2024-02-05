import { defaultTheme } from '@var-meta/tailwindcss-config';
import type { Config } from 'tailwindcss';

const { centerPlugin, animatePlugin } = require('@var-meta/tailwindcss-plugins');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@var-meta/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    ...defaultTheme,
  },
  plugins: [centerPlugin, animatePlugin],
};

export default config;
