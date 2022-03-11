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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
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

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
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
          <AuthStepTitle>Nombre de pas</AuthStepTitle>
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
  max-height: 400px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: auto;
`;

export default StatisticSmoke;
