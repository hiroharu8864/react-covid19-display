import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Button, Typography } from "@material-ui/core";

Chart.register(...registerables);

const weekLabel = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const data = {
  labels: weekLabel,
  datasets: [
    {
      label: "Demo bar plot",
      backgroundColor: "#20b2aa",
      borderColor: "transparent",
      hoverBackgroundColor: "#5f9ea0",
      data: [6, 9, 30, 20, 11, 23, 42]
    }
  ]
};

export const BarPlot: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <Typography
        color="secondary"
        variant="h2"
        align="center"
        gutterBottom
        noWrap
      >
        BarPlot Pages
      </Typography>
      <Bar data={data} />
      <Button onClick={onClickHome} variant="contained" color="secondary">
        Go To Home
      </Button>
    </>
  );
});
