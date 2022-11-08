import React, { useState, useMemo } from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import dayjs from 'dayjs';

import SelectBox from '../SelectBox';

import styled from '@emotion/styled';

ChartJS.register(ArcElement, Tooltip, Legend);

interface CovidAgeCaseInfo {
  confCase: string;
  stateDt: string;
  gubun: string;
}

interface DoughnutProps {
  covidAgeCaseList: CovidAgeCaseInfo[];
}

type ChangeEvent = React.ChangeEvent<HTMLSelectElement>;

interface DoughnutChartData {
  [key: string]: ChartData<'doughnut'>;
}

interface GenderData {
  [key: string]: number[];
}

const options: ChartOptions<'doughnut'> = {
  plugins: {
    legend: {
      display: true,
      position: 'bottom' as const,
    },
  },
  maintainAspectRatio: false,
};

const DoughnutChart = ({ covidAgeCaseList }: DoughnutProps) => {
  const [selectedDate, setSelectedDate] = useState<string>('');

  const { setLabels, chartData } = useMemo(() => {
    const genderData: GenderData = {};
    const chartData: DoughnutChartData = {};
    const setLabels = new Set<string>();

    covidAgeCaseList.forEach((item) => {
      if (!(item.gubun === '남성' || item.gubun === '여성')) {
        return;
      }

      if (item.gubun === '남성' || item.gubun === '여성') {
        const dateList = dayjs(item.stateDt).format('MM/DD');

        setLabels.add(dateList);

        if (!genderData[dateList]) {
          genderData[dateList] = [0, 0];
        }

        if (item.gubun === '남성') {
          genderData[dateList][0]++;
        }

        if (item.gubun === '여성') {
          genderData[dateList][1]++;
        }
      }
    });

    [...setLabels].forEach((item) => {
      chartData[item] = {
        labels: ['남', '여'],
        datasets: [
          {
            label: 'Number of Gender Confirmed',
            data: genderData[item],
            backgroundColor: ['#629acd', '#ebaba8'],
            borderWidth: 1,
          },
        ],
      };
    });

    return { setLabels: [...setLabels].reverse(), chartData };
  }, []);

  const selectChoiceHandle = (event: ChangeEvent) => {
    setSelectedDate(event.target.value);
  };

  return (
    <DoughnutContainer>
      <CadeName>일자별 성별 확진자 수</CadeName>
      <hr />
      <SelectMenu>
        <SelectBox itemList={setLabels} selectedItem={selectedDate} onChange={selectChoiceHandle} />
      </SelectMenu>
      <ChartStyle>
        <Doughnut options={options} data={selectedDate === '' ? chartData[setLabels[0]] : chartData[selectedDate]} />
      </ChartStyle>
    </DoughnutContainer>
  );
};

export default DoughnutChart;

const DoughnutContainer = styled.div`
  padding: 10px 50px 20px 50px;
`;

const CadeName = styled.span`
  color: #4a4a4a;
  font-weight: bold;
`;

const SelectMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px 10px 10px;
`;

const ChartStyle = styled.div`
  height: 320px;
  width: 100%;
`;
