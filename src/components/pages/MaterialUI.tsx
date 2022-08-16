import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button, makeStyles, Typography, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  btnStyle: {
    background: "green",
    padding: "3px 50px"
  },
  typoStyle: {
    color: "blue"
  },
  paperStyle: {
    background: "orange",
    height: "40px"
  }
});

export const MaterialUI: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const classes = useStyles();
  return (
    <>
      <h3>Material UI design check Pages</h3>
      <Typography
        className={classes.typoStyle}
        color="secondary"
        variant="h2"
        align="center"
        gutterBottom
        noWrap
      >
        Hello UI
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3} direction="column">
        <Grid item xs={12} container>
          <Grid item xs={2}>
            Demo
          </Grid>
          <Grid item xs={8}></Grid>
          <Grid item xs={2}>
            Test
          </Grid>
        </Grid>
        <Grid item xs={12} justifyContent="center" container>
          <Grid item xs={3}>
            Demo
          </Grid>
          <Grid item xs={3}>
            Demo
          </Grid>
          <Grid item xs={3}>
            Demo
          </Grid>
        </Grid>
      </Grid>

      <Button className={classes.btnStyle} variant="contained" color="primary">
        Test Button
      </Button>
      <br />
      <Button variant="outlined" color="default">
        Test Button
      </Button>
      <br />
      <Button variant="contained" color="secondary" onClick={onClickHome}>
        Go To Home
      </Button>
    </>
  );
});
