# `@var-meta/tailwindcss-config`

## Installation

```sh
$ pnpm add @var-meta/tailwindcss-config
# or
$ yarn add @var-meta/tailwindcss-config
# or
$ npm install @var-meta/tailwindcss-config
```

## Usage

Update your `tailwind.config.ts`

```ts
import preset from '@var-meta/tailwindcss-config';
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
