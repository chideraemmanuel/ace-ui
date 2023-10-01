'use client';

import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

interface Props {
  children: React.ReactNode;
  theme: any;
}

const UiThemeProvider: FC<Props> = ({ children, theme }) => {
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default UiThemeProvider;
