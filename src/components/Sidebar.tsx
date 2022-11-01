import Link from 'next/link';
import type { NextPage } from 'next';

import styled from '@emotion/styled';

const Sidebar: NextPage = () => {
  return (
    <>
      <Wrapper>
        <CompanyName>
          <img src={'/image/img_logo01.svg'} width={24} height={24} alt="로고이미지" />
          <span>DBDLAB Corp.</span>
        </CompanyName>
        <MenuGrouping>
          <div>
            <img src={'/image/icon_dashboard01.svg'} width={15} height={15} alt="대시보드" />
            <Link href="/dashboard">Dashboard</Link>
          </div>
          <div>
            <img src={'https://cdn-icons-png.flaticon.com/512/1924/1924990.png'} width={15} height={15} alt="연구" />
            <Link href="/research">Research</Link>
          </div>
          <div>
            <img src={'/image/icon_members01.svg'} width={15} height={15} alt="회원" />
            <Link href="/members">Members</Link>
          </div>
          <div>
            <img src={'/image/icon_insight01.svg'} width={15} height={15} alt="통찰력" />
            <Link href="/insight">Insight</Link>
          </div>
          <div>
            <img src={'/image/icon_calendar01.svg'} width={15} height={15} alt="달력" />
            <Link href="/calendar">Calendar</Link>
          </div>
        </MenuGrouping>
      </Wrapper>
    </>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  width: 350px;
  height: 100%;
  padding: 48px 20px;
  background-color: #f8f8f8;
  color: #000;
`;

const CompanyName = styled.div`
  display: flex;
  justify-content: center;

  & span {
    margin-left: 10px;
    font-size: 18px;
    font-weight: 900;
  }
`;

const MenuGrouping = styled.div`
  margin-top: 65px;

  & div {
    margin: 35px;
  }

  & img {
    margin-right: 10px;
  }
`;
