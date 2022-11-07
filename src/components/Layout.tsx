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
      <SidebarMenu>
        <Sidebar menuitem={menuitem} />
      </SidebarMenu>
      <MenuComponent>{children}</MenuComponent>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const SidebarMenu = styled.div``;

const MenuComponent = styled.div`
  width: 100%;
  background-color: #e5e5e5;
  padding: 10px;
  overflow-x: hidden;
`;
