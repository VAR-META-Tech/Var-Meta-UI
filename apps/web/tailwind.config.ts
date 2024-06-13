import { createThemes } from '@var-meta/theme';
import { withTV } from 'tailwind-variants/transformer';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './.storybook/welcome.stories.mdx',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@var-meta/ui/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [createThemes()],
};

export default withTV(config);
