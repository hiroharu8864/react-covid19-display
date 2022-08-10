import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Chart, registerables } from "chart.js";
import { Bubble } from "react-chartjs-2";

Chart.register(...registerables);

/**
 * Todo:
 * Invalid scale configuration for scale: xAxes
 * Invalid scale configuration for scale: yAxes
 */
const data = {
  datasets: [
    {
      label: "React",
      backgroundColor: "#4169e1",
      borderColor: "transparent",
      data: [{ x: 20, y: 866, r: 6350000 / 100000 }]
    },
    {
      label: "Angular",
      backgroundColor: "#c71585",
      borderColor: "transparent",
      pointBorderWidth: 10,
      data: [{ x: 30, y: 389, r: 410000 / 100000 }]
    },
    {
      label: "Vue",
      backgroundColor: "#008080",
      borderColor: "transparent",
      data: [{ x: 10, y: 749, r: 1320000 / 100000 }]
    }
  ]
};

const options = {
  title: {
    display: true,
    fontSize: 18,
    text: "NPM Downloads comparison (global)"
  },
  scales: {
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Number of job offer in LinkedIn (Japan)",
          fontSize: 10
        },
        ticks: {
          min: 0,
          max: 1300,
          fontSize: 14
        }
      }
    ],
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Learning Cost",
          fontSize: 10
        },
        ticks: {
          min: 5,
          max: 35,
          fontSize: 14
        }
      }
    ]
  }
};

export const BubblePlot: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <h3>BubblePlot Pages</h3>
      <Bubble data={data} options={options} />
      <button onClick={onClickHome}>Go To Home</button>
    </>
  );
});
