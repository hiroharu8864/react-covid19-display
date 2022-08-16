import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  btnStyle: {
    background: "pink",
    padding: "3px 50px",
    marginBottom: "10px",
    marginRight: "10px"
  }
});

export const Home: FC = memo(() => {
  const navigate = useNavigate();
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
  const onClickBubblePlot = useCallback(() => {
    navigate("/bubbleplot");
  }, [navigate]);
  const onClickMaterialUI = useCallback(() => {
    navigate("/materialui");
  }, [navigate]);

  const classes = useStyles();

  return (
    <>
      <Typography
        color="secondary"
        variant="h2"
        align="center"
        gutterBottom
        noWrap
      >
        Graph Chart Test
      </Typography>
      <Button
        onClick={onClickLinePlot}
        className={classes.btnStyle}
        variant="contained"
      >
        go to LinePlot
      </Button>
      <Button
        onClick={onClickPiePlot}
        className={classes.btnStyle}
        variant="contained"
      >
        go to PiePlot
      </Button>
      <Button
        onClick={onClickBarPlot}
        className={classes.btnStyle}
        variant="contained"
      >
        go to BarPlot
      </Button>
      <Button
        onClick={onClickRadarPlot}
        className={classes.btnStyle}
        variant="contained"
      >
        go to RadarPlot
      </Button>
      <Button
        onClick={onClickBubblePlot}
        className={classes.btnStyle}
        variant="contained"
      >
        go to BubblePlot
      </Button>
      <Button
        onClick={onClickMaterialUI}
        className={classes.btnStyle}
        variant="contained"
      >
        go to Material UI
      </Button>
    </>
  );
});
