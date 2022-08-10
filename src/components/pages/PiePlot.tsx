import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Chart, registerables } from "chart.js";
import { Pie, Doughnut } from "react-chartjs-2";

Chart.register(...registerables);

const osLabel = ["Windows", "Mac", "Linux"];

const data = {
  labels: osLabel,
  datasets: [
    {
      data: [80, 15, 5],
      backgroundColor: ["#4169e1", "#ff1493", "#ffce56"],
      hoverBackgroundColor: ["#36a2eb", "#ff6384", "#ffce56"],
      borderColor: ["transparent", "transparent", "transparent"]
    }
  ]
};

export const PiePlot: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <h3>PiePlot Pages</h3>
      <Pie data={data} />
      <Doughnut data={data} />
      <button onClick={onClickHome}>Go To Home</button>
    </>
  );
});
