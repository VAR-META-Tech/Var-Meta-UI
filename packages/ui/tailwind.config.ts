import { createThemes } from '@var-ui/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [],
  plugins: [createThemes()],
};

export default config;
