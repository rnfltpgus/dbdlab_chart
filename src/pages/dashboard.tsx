import axios from 'axios';

import Container from '../common/Container';

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
  console.log(covidAgeCaseList, covidStateList);
  return (
    <Container>
      <h2>🤖 개발 작업 중 입니다.</h2>
    </Container>
  );
};

export default Dashboard;

export const getServerSideProps = async () => {
  const covidState = await axios.get(covidStateUrl);
  const covidAgeCase = await axios.get(covidAgeCaseUrl);

  if (!covidState && !covidAgeCase) return;

  return {
    props: {
      covidStateList: covidState.data,
      covidAgeCaseList: covidAgeCase.data,
    },
  };
};
