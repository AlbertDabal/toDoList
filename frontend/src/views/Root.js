import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/MainTheme';
import { Dashboard } from './Dashboard';
import Test from './Test';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Test />
  </ThemeProvider>
);

export default Root;
