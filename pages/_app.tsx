import { FunctionComponent } from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";

import "../styles/globals.css";

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
