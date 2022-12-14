import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import { Button, Card, CardContent, Typography, Grid } from "@material-ui/core";

import { GiHastyGrave } from "react-icons/gi";
import { MdLocalHospital } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

export const Cards: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className={styles.container}>
        <Grid container spacing={1} justifyContent="center">
          <Grid
            item
            xs={12}
            md={3}
            component={Card}
            className={styles.infected}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                <MdLocalHospital />
                Infected persons
              </Typography>
              <Typography variant="h5">
                <CountUp start={0} end={100000} duration={2.0} separator="," />
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            component={Card}
            className={styles.recoverd}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                <AiFillLike />
                Recovered persons
              </Typography>
              <Typography variant="h5">
                <CountUp start={0} end={100000} duration={10.0} separator="," />
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} md={3} component={Card} className={styles.deaths}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                <GiHastyGrave />
                Dead persons
              </Typography>
              <Typography variant="h5">
                <CountUp start={0} end={100000} duration={10.0} separator="," />
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
        <Button onClick={onClickHome} variant="contained" color="secondary">
          Go To Home
        </Button>
      </div>
    </>
  );
});
