import { createThemes } from '@var-ui/theme';
import { withTV } from 'tailwind-variants/transformer';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './.storybook/welcome.stories.mdx',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@var-ui/core/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    createThemes({
      defaultTheme: 'dark',
    }),
  ],
};

export default withTV(config);
