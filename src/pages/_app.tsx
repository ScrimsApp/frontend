import { FunctionComponent } from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global/global';

import theme from '../styles/theme/theme';

import GlobalContextProvider from '../context/GlobalContext.';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <GlobalContextProvider>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Scrims App</title>
        </Head>

        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </GlobalContextProvider>
  );
};

export default App;
