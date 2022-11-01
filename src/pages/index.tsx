import Head from 'next/head';
import type { NextPage } from 'next';

import styled from '@emotion/styled';

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>DBDLAB - Dashboard</title>
        <meta name="description" content="DBDLAB - Dashboard" />
        <link
          rel="icon"
          href="https://static.wixstatic.com/media/52fe03_0170e12ad6a64e5487ae511b399f2363~mv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/52fe03_0170e12ad6a64e5487ae511b399f2363~mv2.png"
        />
      </Head>
      <div>
        <h2>차트 영역</h2>
      </div>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8fafc;
  width: 100%;
  height: 100%;

  & div {
    width: 50%;
    text-align: center;
  }

  & h2 {
    color: #727372;
  }
`;
