import React, { useMemo } from 'react';

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';
import dayjs from 'dayjs';

import styled from '@emotion/styled';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface CovidState {
  confCase: number;
  // decideCnt: string;
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
    const data = covidStateList.map((item) => Number(item.confCase));
    const setLabels = new Set<string>();

    dateList.forEach((item) => {
      setLabels.add(item);
    });

    const detailedData: ChartData<'line'> = {
      labels: [...setLabels],
      datasets: [
        {
          label: 'Confirmed Patients',
          data: data,
          backgroundColor: '#E79997',
          borderColor: '#e79997',
          borderWidth: 3,
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
