import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CountUp from "react-countup";
import { Button, Card, CardContent, Typography, Grid } from "@material-ui/core";

import { GiHastyGrave } from "react-icons/gi";
import { MdLocalHospital } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

/** Styled Component定義 */
const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const SInfected = styled(Grid)`
  border-left: 5px solid #33a3ff;
  border-radius: 0% !important;
  margin: 2% 2% !important;
`;

const SRecoverd = styled(Grid)`
  border-left: 5px solid #3cb371;
  border-radius: 0% !important;
  margin: 2% 2% !important;
`;

const SDeaths = styled(Grid)`
  border-left: 5px solid #ff3370;
  border-radius: 0% !important;
  margin: 2% 2% !important;
`;

export const SCards: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <SContainer>
        <Grid container spacing={1} justifyContent="center">
          <SInfected item xs={12} md={3} component={Card}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                <MdLocalHospital />
                Infected persons
              </Typography>
              <Typography variant="h5">
                <CountUp start={0} end={100000} duration={2.0} separator="," />
              </Typography>
            </CardContent>
          </SInfected>
          <SRecoverd item xs={12} md={3} component={Card}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                <AiFillLike />
                Recovered persons
              </Typography>
              <Typography variant="h5">
                <CountUp start={0} end={100000} duration={10.0} separator="," />
              </Typography>
            </CardContent>
          </SRecoverd>
          <SDeaths item xs={12} md={3} component={Card}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                <GiHastyGrave />
                Dead persons
              </Typography>
              <Typography variant="h5">
                <CountUp start={0} end={100000} duration={10.0} separator="," />
              </Typography>
            </CardContent>
          </SDeaths>
        </Grid>
      </SContainer>
    </>
  );
});
