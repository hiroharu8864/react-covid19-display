import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(...registerables);

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Demo line plot",
      backgroundColor: "#008080",
      borderColor: "#7fffd4",
      pointBorderWidth: 10,
      data: [6, 9, 30, 20, 11, 23, 42]
    }
  ]
};

export const LinePlot: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <h3>LinePlot Pages</h3>
      <Line height={300} width={400} data={data} />
      <button onClick={onClickHome}>Go To Home</button>
    </>
  );
});
