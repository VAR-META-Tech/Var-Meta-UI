import { createThemes } from '@var-ui/theme';
import type { Config } from 'tailwindcss';

const { animatePlugin } = require('@var-ui/plugins');

const config: Config = {
  content: [],
  plugins: [animatePlugin, createThemes()],
};

export default config;
