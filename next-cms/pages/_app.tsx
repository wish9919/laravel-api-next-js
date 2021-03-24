import { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.scss";
import "tailwindcss/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
