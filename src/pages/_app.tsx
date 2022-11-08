import { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '../components/Layout';

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>DBDLAB - Dashboard</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
