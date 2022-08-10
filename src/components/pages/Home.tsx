import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const Home: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onClickLinePlot = useCallback(() => {
    navigate("/lineplot");
  }, [navigate]);
  const onClickPiePlot = useCallback(() => {
    navigate("/pieplot");
  }, [navigate]);
  const onClickBarPlot = useCallback(() => {
    navigate("/barplot");
  }, [navigate]);
  const onClickRadarPlot = useCallback(() => {
    navigate("/radarplot");
  }, [navigate]);

  return (
    <>
      <h3>Home Pages</h3>
      <button onClick={onClickHome}>Go To Home</button>
      <br />
      <button onClick={onClickLinePlot}>Go To LinePlot</button>
      <br />
      <button onClick={onClickPiePlot}>Go To PiePlot</button>
      <br />
      <button onClick={onClickBarPlot}>Go To BarPlot</button>
      <br />
      <button onClick={onClickRadarPlot}>Go To RadarPlot</button>
    </>
  );
});
