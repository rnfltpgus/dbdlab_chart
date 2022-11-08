// 코로나 일자 별 연령대 확진자 수, x축 : 일자 , y축 : 확진자 수
import React, { useMemo } from 'react';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import dayjs from 'dayjs';

import { ageGroupList, colorList } from '../../common/StackedBarItem';

import styled from '@emotion/styled';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface CovidAgeCaseInfo {
  confCase: string;
  stateDt: string;
  gubun: string;
}

interface StackedBarChartProps {
  covidAgeCaseList: CovidAgeCaseInfo[];
}

interface AgeData {
  [key: string]: {
    [key: string]: string;
  };
}

type IconName = keyof typeof colorList;

const options: ChartOptions<'bar'> = {
  plugins: {
    legend: {
      display: true,
      position: 'bottom' as const,
    },
  },
  responsive: true,
  scales: {
    x: { stacked: true },
    y: { stacked: true },
  },
  indexAxis: 'y' as const,
};

const StackedBarChart = ({ covidAgeCaseList }: StackedBarChartProps) => {
  const chartData = useMemo(() => {
    const ageData: AgeData = {};
    const setLabels = new Set<string>('');

    covidAgeCaseList.forEach((item) => {
      if (item.gubun === '남성' || item.gubun === '여성') {
        return;
      }

      setLabels.add(item.stateDt);

      if (!ageData[item.gubun]) {
        ageData[item.gubun] = { [item.stateDt]: item.confCase };
      }

      ageData[item.gubun][item.stateDt] = item.confCase;
    });

    const chartData: ChartData<'bar'> = {
      labels: [...setLabels].map((date) => dayjs(date).format('MM/DD')).reverse(),
      datasets: ageGroupList.map((label) => {
        return {
          label,
          data: [...setLabels].map((item) => Number(ageData[label][item])).reverse(),
          backgroundColor: colorList[label as IconName],
        };
      }),
    };

    return chartData;
  }, []);

  return (
    <StackedBarContainer>
      <CadeName>일자별 연령대 확진자 수</CadeName>
      <hr />
      <Bar options={options} data={chartData} />;
    </StackedBarContainer>
  );
};

export default StackedBarChart;

const StackedBarContainer = styled.div`
  padding: 10px 50px 20px 50px;
`;

const CadeName = styled.span`
  color: #4a4a4a;
  font-weight: bold;
`;
