import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme/theme';

const AppThemeProvider: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const testRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AppThemeProvider, ...options });

export * from '@testing-library/react';

export { testRender as render };
