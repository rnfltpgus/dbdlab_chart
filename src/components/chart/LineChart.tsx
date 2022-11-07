import React, { useMemo } from 'react';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartData } from 'chart.js';

import styled from '@emotion/styled';

interface CovidState {
  decideCnt: string;
  stateDt: string;
  stateTime: string;
}

interface LineChartProps {
  covidStateList: CovidState[];
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const LineChart = ({ covidStateList }: LineChartProps) => {
  const chartData = useMemo(() => {
    const dateList = covidStateList.map((item) => item.stateDt).reverse();
    const detailedData: ChartData<'line'> = {
      labels: dateList,
      datasets: [
        {
          label: 'Daily Status',
          backgroundColor: '#E79997',
          borderWidth: 2,
          data: covidStateList.map((item) => Number(item.decideCnt)),
        },
      ],
    };

    return detailedData;
  }, []);

  return (
    <LineChartContainer>
      <CadeName>코로나 일자별 확진자 수</CadeName>
      <hr />
      <Line options={options} data={chartData} />
    </LineChartContainer>
  );
};

export default LineChart;

const LineChartContainer = styled.div``;

const CadeName = styled.span`
  /* color: #4a4a4a; */
`;
