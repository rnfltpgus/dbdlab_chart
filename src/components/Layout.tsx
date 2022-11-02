import { ReactNode } from 'react';

import Sidebar from './Sidebar';

import styled from '@emotion/styled';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const menuitem = ['Dashboard', 'Research', 'Members', 'Insight', 'Calendar'];

  return (
    <Wrapper>
      <Container>
        <Sidebar menuitem={menuitem} />
        {children}
      </Container>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: auto;

  @media (max-width: 640px) {
    width: 100%;
    height: 100vh;
    margin: 0;
  }
`;
