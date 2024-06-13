# Welcome 👋🏼

## VAR-Meta UI Version 1 - Design system

Here you can find the guidelines, components APIs and examples to help you build your next project with VAR-UI.

## Documentation

Visit [https://ui.var-meta.com](https://ui.var-meta.com) to view the full documentation.

## Install

The UI came with different packages, namely `@var-meta/icons` and `@var-meta/ui`.

```sh
npm install @var-meta/ui @var-meta/theme @var-meta/icons
```

```sh
yarn add @var-meta/ui @var-meta/theme @var-meta/icons
```

```sh
pnpm i @var-meta/ui @var-meta/theme @var-meta/icons
```

## Install

The UI came with differences package namely `@var-meta/icons` and `@var-meta/ui`

```sh
npm install @var-meta/ui @var-meta/icons
```

```sh
yarn add @var-meta/ui @var-meta/icons
```

```sh
pnpm i @var-meta/ui @var-meta/icons
```

## Tailwind CSS Setup

var-ui is built on top of Tailwind CSS, so you need to install Tailwind CSS first. You can follow the official
[installation guide](https://tailwindcss.com/docs/installation) to install Tailwind CSS. Then you need to add
the following code to your `tailwind.config.js` file:

```ts
// tailwind.config.ts
import { createThemes } from '@var-meta/theme';
import { withTV } from 'tailwind-variants/transformer';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './.storybook/welcome.stories.mdx',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@var-meta/ui/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [createThemes()],
};

export default withTV(config);
```

## Use the Component

Now, you can use the component you installed in your application:

```jsx
import * as React from 'react';
import { Button } from '@var-meta/ui';

function App() {
  return <Button>Press me</Button>;
}
```
