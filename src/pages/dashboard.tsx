import axios from 'axios';

import LineChart from '../components/chart/LineChart';
import StackedBarChart from '../components/chart/StackedBarChart';
import DoughnutChart from '../components/chart/DoughnutChart';

import styled from '@emotion/styled';

interface CovidState {
  confCase: number;
  // decideCnt: string;
  stateDt: string;
  stateTime: string;
}

interface CovidAgeCaseInfo {
  confCase: string;
  stateDt: string;
  gubun: string;
}

interface DashboardProps {
  covidStateList: CovidState[];
  covidAgeCaseList: CovidAgeCaseInfo[];
}

const covidStateUrl = 'http://localhost:3000/data/getCovid19GenAgeCaseInfoJson.json';
const covidAgeCaseUrl = 'http://localhost:3000/data/getCovid19GenAgeCaseInfoJson.json';

const Dashboard = ({ covidStateList, covidAgeCaseList }: DashboardProps) => {
  return (
    <DashboardContainer>
      <TopContainer>
        <LineChart covidStateList={covidStateList} />
      </TopContainer>
      <RowContainer>
        <RowLeftContainer>
          <StackedBarChart covidAgeCaseList={covidAgeCaseList} />
        </RowLeftContainer>
        <RowRightContainer>
          <DoughnutChart covidAgeCaseList={covidAgeCaseList} />
        </RowRightContainer>
      </RowContainer>
    </DashboardContainer>
  );
};

export default Dashboard;

export const getServerSideProps = async () => {
  const covidState = await axios.get(covidStateUrl as string);
  const covidAgeCase = await axios.get(covidAgeCaseUrl as string);

  if (!covidState && !covidAgeCase) return;

  return {
    props: {
      covidStateList: covidState.data.items.item,
      covidAgeCaseList: covidAgeCase.data.items.item,
    },
  };
};

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #f8fafc;
`;

const TopContainer = styled.div`
  height: 100%;
`;

const RowContainer = styled.div`
  display: flex;
  height: 100%;
`;

const RowLeftContainer = styled.div`
  width: 50%;
`;

const RowRightContainer = styled.div`
  width: 50%;
`;
