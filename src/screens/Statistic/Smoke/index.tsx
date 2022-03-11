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
import { Share } from "iconsax-react";
import Button from "../../../components/Layout/Button";
import Link from "../../../components/Link";

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

  console.log(smokes);

  const chartData = {
    labels: days,
    datasets: [
      {
        type: "line" as const,
        label: "Objectifs",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: cigarettes.map(() => 50),
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
          <SocialButton
            href={`https://twitter.com/intent/tweet?text=J'ai%20téléchargé%20l'application%20Nyumi%20grâce%20à%20laquelle%20je%20peux%20suivre%20ma%20consommation%20de%20tabac%20et%20aujourd'hui%20je%20n'ai%20consommé%20que%20${cigarettes.length}%20cigarettes%20!&via=onRuntime`}
            backgroundColor="#1c9bef;"
          >
            <SocialContent>
              <Share size="32" color="#FFFF" />
              <SocialTitle>{"Partager"}</SocialTitle>
            </SocialContent>
          </SocialButton>
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

const SocialButton = styled(({ children, ...props }) => (
  <Button as={Link} {...props}>
    {children}
  </Button>
))<{ backgroundColor: string }>`
  display: flex;
  width: 130px;
  color: ${({ theme }) => theme.colors.text.lightest};
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor}`}
`;

const SocialContent = styled.div`
  font-weight: ${({ theme }) => theme.weight.medium};
  display: flex;
  align-items: center;
`;

const SocialTitle = styled.h2`
  font-weight: ${({ theme }) => theme.weight.bold};
`;

const ChartContainer = styled.div`
  max-height: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: auto;
`;

export default StatisticSmoke;
