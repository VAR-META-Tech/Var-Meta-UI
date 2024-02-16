import { defaultTheme } from '@var-ui/theme';
import type { Config } from 'tailwindcss';

const { centerPlugin, animatePlugin } = require('@var-ui/plugins');

const config: Config = {
  content: [],
  theme: {
    ...defaultTheme,
  },
  plugins: [centerPlugin, animatePlugin],
};

export default config;
