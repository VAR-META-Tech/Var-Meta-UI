# Welcome 👋🏼

## VAR-Meta-Tech UI Version 1 - Design system

Here you can find the guidelines, components APIs and examples to help you build your next project with VAR-UI.

## Install

The UI came with different packages, namely `@var-meta-tech/icon` and `@var-meta-tech/ui`.

```sh
npm install @var-meta-tech/ui @var-meta-tech/icon

yarn add @var-meta-tech/ui @var-meta-tech/icon

pnpm i @var-meta-tech/ui @var-meta-tech/icon
```

## Install

The UI came with differences package namely `@var-meta-tech/icon` and `@var-meta-tech/ui`

```sh
npm install @var-meta-tech/ui @var-meta-tech/icon
```

```sh
yarn add @var-meta-tech/ui @var-meta-tech/icon
```

```sh
pnpm i @var-meta-tech/ui @var-meta-tech/icon
```

## Tailwind CSS Setup

var-ui is built on top of Tailwind CSS, so you need to install Tailwind CSS first. You can follow the official
[installation guide](https://tailwindcss.com/docs/installation) to install Tailwind CSS. Then you need to add
the following code to your `tailwind.config.js` file:

```ts
// tailwind.config.ts
import { createThemes } from '@var-meta-tech/theme';
import { withTV } from 'tailwind-variants/transformer';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './.storybook/welcome.stories.mdx',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@var-meta-tech/ui/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [createThemes()],
};

export default withTV(config);
```

## Use the Component

Now, you can use the component you installed in your application:

```jsx
import * as React from 'react';
import { Button } from '@var-meta-tech/ui';

function App() {
  return <Button>Press me</Button>;
}
```
