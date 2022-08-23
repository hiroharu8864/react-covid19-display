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

const covidLabel = ["Infected", "Recoverd", "Deaths"];

export const BarCovidChart: FC<Props> = memo((Props) => {
  return (
    <>
      <p>test</p>
      <p>test</p>
    </>
  );
});
