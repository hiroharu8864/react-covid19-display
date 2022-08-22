import { FC, memo, Suspense, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button, makeStyles, Typography } from "@material-ui/core";

import { useGetCovidData } from "../../hooks/useGetCovidData";
import { CovidCards } from "../molecules/CovidCards";

const ResultCountsComponent = () => {
  const { data, error } = useGetCovidData();
  console.log(data);

  return (
    <>
      <Typography
        color="primary"
        variant="h5"
        align="center"
        gutterBottom
        noWrap
      >
        WorldWide Covid 19 data
        <br />
        {new Date(data?.lastUpdate).toDateString()}
      </Typography>
      <CovidCards
        infectedCount={data?.confirmed.value}
        recoveredCount={data?.recovered.value}
        deadCount={data?.deaths.value}
      />
    </>
  );
};

export const DashBoard: FC = memo(() => {
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
        Dashboard Sample Page
      </Typography>
      <Suspense fallback={<p>データ取得中....</p>}>
        <ResultCountsComponent />
      </Suspense>
      <Button onClick={onClickHome} variant="outlined" color="default">
        Go to Home
      </Button>
    </>
  );
});
