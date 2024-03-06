import '../src/app/globals.css';
import { Toaster } from '@var-ui/core';
import { themes } from '@storybook/theming';
import type { Preview } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';
import { DocsContainer as BaseContainer, DocsContainerProps as BaseContainerProps } from '@storybook/blocks';

const preview: Preview = {
  parameters: {
    docs: {
      container: ({ children, ...props }) => {
        return (
          // @ts-ignore
          <BaseContainer context={props.context} theme={useDarkMode() ? themes.dark : themes.light}>
            {children}
          </BaseContainer>
        );
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Foundations', 'Components'],
      },
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      current: 'dark',
      stylePreview: true,
      darkClass: 'dark',
      lightClass: 'light',
      classTarget: 'html',
      dark: {
        ...themes.dark,
      },
      light: {
        ...themes.light,
      },
    },
  },
  decorators: [
    (Story) => {
      const theme = useDarkMode() ? 'dark' : 'light';
      return (
        // @ts-ignore
        <div className={theme}>
          {/* @ts-ignore */}
          <Story />
          {/* @ts-ignore */}
          <Toaster />
        </div>
      );
    },
  ],
};

export default preview;
