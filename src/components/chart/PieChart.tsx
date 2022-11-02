// 코로나 일자 별 성별 확진자 수
import React from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import styled from '@emotion/styled';

interface CovidAgeCaseInfo {
  confCase: string;
  stateDt: string;
  gubun: string;
}

interface PieChartProps {
  covidAgeCaseList: CovidAgeCaseInfo[];
}

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ covidAgeCaseList }: PieChartProps) => {
  const data = {
    labels: ['남자', '여자'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container>
      <CadeName>일자별 연령대 확진자 수</CadeName>
      <hr />
      <Pie data={data} />
    </Container>
  );
};

export default PieChart;

const Container = styled.div`
  width: 25vw;
  margin-left: 1vw;
`;

const CadeName = styled.span`
  color: #4a4a4a;
`;
