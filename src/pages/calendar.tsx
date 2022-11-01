import type { NextPage } from 'next';

import styled from '@emotion/styled';

const Calendar: NextPage = () => {
  return <Container></Container>;
};

export default Calendar;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8fafc;
  width: 100%;
  height: 100%;
`;