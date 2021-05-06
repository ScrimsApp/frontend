import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme/theme';

import GlobalContextProvider from '../context/GlobalContext.';

const AppThemeProvider: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const AppContextProvider: FC = ({ children }) => {
  return (
    <GlobalContextProvider>
      <AppThemeProvider>{children}</AppThemeProvider>
    </GlobalContextProvider>
  );
};

const testRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AppContextProvider, ...options });

export * from '@testing-library/react';

export { testRender as render };
