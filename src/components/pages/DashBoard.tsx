import { FC, memo, Suspense, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button, makeStyles, Typography } from "@material-ui/core";

import { useGetCovidData } from "../../hooks/useGetCovidData";
import { CovidCards } from "../molecules/CovidCards";

const ResultComponent = () => {
  const { data, error } = useGetCovidData();
  console.log(data);

  return (
    <>
      <p>{data?.confirmed.value}</p>
      <p>{data?.recovered.value}</p>
      <p>{data?.deaths.value}</p>
      <CovidCards
        infectedCount={10000}
        recoveredCount={50000}
        deadCount={100000}
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
        <ResultComponent />
      </Suspense>
      <Button onClick={onClickHome} variant="outlined" color="default">
        Test Button
      </Button>
    </>
  );
});
