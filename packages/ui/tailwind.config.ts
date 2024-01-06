// tailwind config is required for editor support
import sharedConfig from '@swiss-digital-assets-institute/tailwindcss-config';
import type { Config } from 'tailwindcss';

const config: Pick<Config, 'presets'> = {
  presets: [sharedConfig],
};

export default config;
