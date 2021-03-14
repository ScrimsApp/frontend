import { FunctionComponent } from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';

import '../styles/globals.css';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Scrims App</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default App;
