import styled from "styled-components";
import { AuthStepHeader, AuthStepTitle } from "../../../components/Layout/Auth";
import Page from "../../../components/Page";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_SMOKES } from "../../../queries/smoke";
import { Cigarette } from "../../../types/cigarette";
import convertDate from "../../../utils/convertDate";
import { AuthContext } from "../../../contexts/Auth";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Stats",
    },
  },
};

const StatisticSmoke: React.FC = () => {
  const { user } = React.useContext(AuthContext);
  const { data } = useQuery(GET_SMOKES);

  const cigarettes = data?.getAllSmoke || [];

  // add convertDate to days array if the date is not already in the array
  const days = cigarettes.reduce((acc: string[], cigarette: Cigarette) => {
    const date = convertDate(cigarette.createdAt);
    if (!acc.includes(date)) {
      acc.push(date);
    }
    return acc;
  }, [] as string[]);

  const smokes = days.reduce((acc: number[], day: string) => {
    const count = cigarettes.reduce((acc2: number, cigarette: Cigarette) => {
      if (convertDate(cigarette.createdAt) === day) {
        return acc2 + 1;
      }
      return acc2;
    }, 0);
    acc.push(count);
    return acc;
  }, [] as number[]);

  console.log(user?.goals.smoke);

  const chartData = {
    labels: days,
    datasets: [
      {
        type: "line" as const,
        label: "Objectifs",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: cigarettes.map(() => user?.goals.smoke || 0),
      },
      {
        label: "Conso de cigarettes",
        data: smokes,
        backgroundColor: "rgb(26, 188, 156)",
      },
    ],
  };

  return (
    <Page toolbar>
      <Content>
        <AuthStepHeader>
          <AuthStepTitle>Conso de cigarettes</AuthStepTitle>
          <ChartContainer>
            <Chart type={"bar"} data={chartData} options={options} />
          </ChartContainer>
        </AuthStepHeader>
      </Content>
    </Page>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

const ChartContainer = styled.div`
  max-height: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: auto;
`;

export default StatisticSmoke;
