import axios from 'axios';

import LineChart from '../components/chart/LineChart';
import PieChart from '../components/chart/PieChart';
// import StackedBarChart from '../components/chart/StackedBarChart';

import styled from '@emotion/styled';

interface CovidState {
  decideCnt: string;
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

const covidStateUrl = 'http://localhost:3000/data/getCovid19InfoStateJson.json';
const covidAgeCaseUrl = 'http://localhost:3000/data/getCovid19GenAgeCaseInfoJson.json';

const Dashboard = ({ covidStateList, covidAgeCaseList }: DashboardProps) => {
  return (
    <DashboardContainer>
      <LineChart covidStateList={covidStateList} />
      <PieChart covidAgeCaseList={covidAgeCaseList} />
      {/* <StackedBarChart /> */}
    </DashboardContainer>
  );
};

export default Dashboard;

export const getServerSideProps = async () => {
  const covidState = await axios.get(covidStateUrl);
  const covidAgeCase = await axios.get(covidAgeCaseUrl);

  if (!covidState && !covidAgeCase) return;

  return {
    props: {
      covidStateList: covidState.data.items.item,
      covidAgeCaseList: covidAgeCase.data.items.item,
    },
  };
};

const DashboardContainer = styled.div`
  padding: 60px;
  display: flex;
  background-color: #f8fafc;
  width: 100%;
  height: 100%;
`;
