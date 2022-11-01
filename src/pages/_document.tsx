import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="ko">
      <Head>
        <title>DBDLAB - Dashboard</title>
        <meta name="description" content="DBDLAB - Dashboard" />
        <link
          rel="icon"
          href="https://static.wixstatic.com/media/52fe03_0170e12ad6a64e5487ae511b399f2363~mv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/52fe03_0170e12ad6a64e5487ae511b399f2363~mv2.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
