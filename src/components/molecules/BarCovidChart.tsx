import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Button, Typography } from "@material-ui/core";

Chart.register(...registerables);

type Props = {
  infectedCount: number;
  recoveredCount: number;
  deadCount: number;
};

export const BarCovidChart: FC<Props> = memo((Props) => {
  const { infectedCount, recoveredCount, deadCount } = Props;

  /** Propsを受け取らないと、Graphデータを作成する必要がある */

  const covidLabel = ["Infected", "Recoverd", "Deaths"];

  const data = {
    labels: covidLabel,
    datasets: [
      {
        label: "People",
        backgroundColor: ["rgba(0,0,255,0.5)", "#008080", "rgba(255,0,0,0.5)"],
        data: [infectedCount, recoveredCount, deadCount]
      }
    ]
  };

  const options = {
    legend: { display: false },
    title: { display: true, text: "Latest Status" }
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
});
