import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styled from '@emotion/styled';

interface SidebarProps {
  menuitem: string[];
}

interface MenuProps {
  isChoice: boolean;
}

const Sidebar = ({ menuitem }: SidebarProps) => {
  const router = useRouter();
  const [choice, setChoice] = useState<string>('dashboard');

  const menuChoiceHandle = (menuChoice: string) => {
    setChoice(menuChoice);
    router.push(menuChoice.toLowerCase());
  };

  return (
    <Wrapper>
      <CompanyName>
        <img src={'/image/img_logo01.svg'} width={24} height={24} alt="DBDLAB Corp. (로고)" />
        <Link href={'/'}>DBDLAB Corp.</Link>
      </CompanyName>
      <MenuGrouping>
        {menuitem.map((item) => {
          return (
            <Menu key={item} isChoice={choice === item} onClick={() => menuChoiceHandle(item)}>
              <img
                src={item == 'research' && 'Research' ? 'https://cdn-icons-png.flaticon.com/512/1924/1924990.png' : `/image/icon_${item}01.svg`}
                width={15}
                height={15}
                // alt={item}
              />
              {item}
            </Menu>
          );
        })}
      </MenuGrouping>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  width: 270px;
  height: 100%;
  padding: 60px 20px;
  background-color: #f8f8f8;
  color: #000;
`;

const CompanyName = styled.div`
  display: flex;
  justify-content: center;

  & img {
    margin-right: 10px;
    font-size: 18px;
  }
`;

const MenuGrouping = styled.div`
  margin-top: 65px;
  cursor: pointer;
`;

const Menu = styled.div<MenuProps>`
  margin: 35px;
  color: ${(props) => (props.isChoice ? '#2878F0' : '#282828')};

  & img {
    margin-right: 10px;
  }
`;
