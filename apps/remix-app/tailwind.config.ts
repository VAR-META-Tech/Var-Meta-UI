import { createThemes } from '@var-meta/theme';
import { withTV } from 'tailwind-variants/transformer';
import type { Config } from 'tailwindcss';

const config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx,ts,tsx}', './node_modules/@var-meta/ui/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [createThemes()],
} satisfies Config;

export default withTV(config);
