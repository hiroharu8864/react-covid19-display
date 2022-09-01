import { FC, memo } from "react";
import { Chart, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(...registerables);

type Props = {
  infectedCount: number;
  recoveredCount: number;
  deadCount: number;
};

export const PieCovidChart: FC<Props> = memo((Props) => {
  const { infectedCount, recoveredCount, deadCount } = Props;

  /** Propsを受け取らないと、Graphデータを作成する必要がある */

  const covidLabel = ["Infected", "Recoverd", "Deaths"];

  const data = {
    labels: covidLabel,
    datasets: [
      {
        data: [infectedCount, recoveredCount, deadCount],
        backgroundColor: ["#4169e1", "#ff1493", "#ffce56"],
        hoverBackgroundColor: ["#36a2eb", "#ff6384", "#ffce56"],
        borderColor: ["transparent", "transparent", "transparent"]
      }
    ]
  };

  return (
    <>
      <Doughnut data={data} />
    </>
  );
});
