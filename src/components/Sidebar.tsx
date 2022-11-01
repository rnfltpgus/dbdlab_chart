import type { NextPage } from 'next';

import styled from '@emotion/styled';

const Sidebar: NextPage = () => {
  return (
    <Container>
      <div>
        <h2>사이드바 영역</h2>
      </div>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  min-width: 320px;
  max-width: 450px;
  height: 100%;
  flex: 0.45;
  border-right: 1px solid whitesmoke;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  background: #ffffff;
  background-color: #ffa9a9;

  @media (max-width: 640px) {
    width: 100%;
    height: 100vh;
    margin: 0;
  }

  & div {
    text-align: center;
  }

  & h2 {
    color: #727372;
  }
`;
