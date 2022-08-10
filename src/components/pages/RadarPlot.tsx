import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Chart, registerables } from "chart.js";
import { Radar } from "react-chartjs-2";

Chart.register(...registerables);

const programLabel = [
  "React",
  "Vue",
  "Angular",
  "JavaScript",
  "TypeScript",
  "Redux",
  "REST API"
];

const data = {
  labels: programLabel,
  datasets: [
    {
      label: "Hiroharu Tanaka",
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "#008b8b",
      pointBackgroundColor: "#008b8b",
      pointBorderColor: "#fff",
      data: [100, 50, 30, 90, 50, 70, 40]
    },
    {
      label: "Rival A",
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "#ff1493",
      pointBackgroundColor: "#ff1493",
      pointBorderColor: "#fff",
      data: [10, 30, 100, 10, 100, 70, 60]
    }
  ]
};

export const RadarPlot: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <h3>RadarPlot Pages</h3>
      <Radar data={data} />
      <button onClick={onClickHome}>Go To Home</button>
    </>
  );
});
