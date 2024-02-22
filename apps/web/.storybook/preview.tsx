import '../src/app/globals.css';
import { Toaster } from '@var-ui/core';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      // @ts-ignore
      <>
        {/* @ts-ignore */}
        <Story />
        {/* @ts-ignore */}
        <Toaster />
      </>
    ),
  ],
};

export default preview;
