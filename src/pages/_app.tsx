import { FunctionComponent } from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global/global';

import theme from '../styles/theme/theme';

import GlobalContextProvider from '../context/GlobalContext.';
import NotificationPopUp from '../components/NotificationPopUp/NotificationPopUp.component';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <GlobalContextProvider>
      <ThemeProvider theme={theme}>
        <Head>
          <title>SCRIMS APP </title>
        </Head>

        <Component {...pageProps} />
        <GlobalStyle />

        <NotificationPopUp
          backgroundColor="#5ACA73"
          title="Success"
          message="You have created the notification pop up"
        />
      </ThemeProvider>
    </GlobalContextProvider>
  );
};

export default App;
