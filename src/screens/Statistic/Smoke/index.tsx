import styled from "styled-components";
import { AuthStepHeader, AuthStepTitle } from "../../../components/Layout/Auth";
import Page from "../../../components/Page";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
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

const labels = [...new Array(7)].map((i, idx) =>
  moment().startOf("day").subtract(idx, "days")
);

export const data = {
  labels,
  datasets: [
    {
      label: "Conso de cigarettes",
      data: labels.map(() => 100),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const StatisticSmoke: React.FC = () => {
  return (
    <Page toolbar>
      <Content>
        <AuthStepHeader>
          <AuthStepTitle>Conso de cigarettes</AuthStepTitle>
          <ChartContainer>
            <Bar options={options} data={data} />
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
