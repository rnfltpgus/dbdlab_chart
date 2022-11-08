import React, { useMemo } from 'react';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import dayjs from 'dayjs';

import styled from '@emotion/styled';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface CovidState {
  decideCnt: string;
  stateDt: string;
  stateTime: string;
}

interface LineChartProps {
  covidStateList: CovidState[];
}

const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const LineChart = ({ covidStateList }: LineChartProps) => {
  const chartData = useMemo(() => {
    const dateList = covidStateList.map((item) => dayjs(item.stateDt).format('MM/DD')).reverse();
    const data = covidStateList.map((item) => Number(item.decideCnt));

    const detailedData: ChartData<'line'> = {
      labels: dateList,
      datasets: [
        {
          label: 'Confirmed Patients',
          backgroundColor: '#E79997',
          borderColor: '#e79997',
          borderWidth: 4,
          data: data,
        },
      ],
    };

    return detailedData;
  }, []);

  return (
    <LineChartContainer>
      <CadeName>코로나 일자별 확진자 수</CadeName>
      <hr />
      <Line options={options} data={chartData} height="75" />
    </LineChartContainer>
  );
};

export default LineChart;

const LineChartContainer = styled.div`
  padding: 50px 50px 10px 50px;
`;

const CadeName = styled.span`
  color: #4a4a4a;
  font-weight: bold;
`;
