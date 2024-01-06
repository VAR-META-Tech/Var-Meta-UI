# `@swiss-digital-assets-institute/tailwindcss-config`

## Installation

```sh
$ pnpm add @swiss-digital-assets-institute/tailwindcss-config
# or
$ yarn add @swiss-digital-assets-institute/tailwindcss-config
# or
$ npm install @swiss-digital-assets-institute/tailwindcss-config
```

## Usage

Update your `tailwind.config.ts`

```ts
import preset from '@swiss-digital-assets-institute/tailwindcss-config';
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  presets: [preset],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};

export default config;
```
