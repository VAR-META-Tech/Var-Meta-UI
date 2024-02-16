import { defaultTheme } from '@var-ui/theme';
import type { Config } from 'tailwindcss';

const { centerPlugin, animatePlugin } = require('@var-ui/plugins');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@var-ui/core/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    ...defaultTheme,
  },
  plugins: [centerPlugin, animatePlugin],
};

export default config;
