import type { Preview } from '@storybook/react';
// import ThemeProvider from '../src/decorators/themeProvider/ThemeProvider';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../src/components/theme';
import { GlobalStyles } from '../src/components/globals.styled';

// const GlobalStyles = createGlobalStyle`
//   * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }
// `;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
