import { createThemes } from '@var-meta/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [],
  plugins: [createThemes()],
};

export default config;
