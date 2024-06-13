# `@var-meta/theme`

## Installation

```sh
$ pnpm add @var-meta/theme
# or
$ yarn add @var-meta/theme
# or
$ npm install @var-meta/theme
```

## Usage

Update your `tailwind.config.ts`

```ts
import preset from '@var-meta/theme';
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

## Getting correct color

[https://uicolors.app/create] use this
