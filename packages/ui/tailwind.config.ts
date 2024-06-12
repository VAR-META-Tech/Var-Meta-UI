import { createThemes } from '@var-meta-tech/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [],
  plugins: [createThemes()],
};

export default config;
