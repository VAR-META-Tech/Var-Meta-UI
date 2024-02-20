import { animatePlugin } from '@var-ui/plugins';
import { createThemes } from '@var-ui/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@var-ui/core/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    animatePlugin,
    createThemes({
      defaultTheme: 'light',
    }),
  ],
};

export default config;
