import { FC, memo } from "react";
import styled from "styled-components";
import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

/** Styled Component定義 */
const SContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const data = {
  labels: ["Infected", "Recovered", "Deaths"],
  datasets: [
    {
      label: "People",
      backgroundColor: ["rgba(0,0,255,0.5)", "#008080", "rgba(255,0,0,0.5)"],
      data: [1020, 1020, 5000]
    }
  ]
};
const options = {
  legend: { display: false },
  title: { display: true, text: "Latest Status" }
};

export const SChart: FC = memo(() => {
  return (
    <>
      <h3>404 Not Found</h3>
      <p>test</p>
    </>
  );
});
