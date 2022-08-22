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
  border-right: 5px solid #33a3ff;
  border-radius: 30% !important;
  margin: 2% 2% !important;
`;

const SRecoverd = styled(Grid)`
  border-left: 5px solid #3cb371;
  border-right: 5px solid #3cb371;
  border-radius: 30% !important;
  margin: 2% 2% !important;
`;

const SDeaths = styled(Grid)`
  border-left: 5px solid #ff3370;
  border-right: 5px solid #ff3370;
  border-radius: 30% !important;
  margin: 2% 2% !important;
`;

type Props = {
  infectedCount: number;
  recoveredCount: number;
  deadCount: number;
};

export const CovidCards: FC<Props> = memo((Props) => {
  const { infectedCount, recoveredCount, deadCount } = Props;
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
                <CountUp
                  start={0}
                  end={infectedCount}
                  duration={2.5}
                  separator=","
                />
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
                <CountUp
                  start={0}
                  end={recoveredCount}
                  duration={2.5}
                  separator=","
                />
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
                <CountUp
                  start={0}
                  end={deadCount}
                  duration={2.5}
                  separator=","
                />
              </Typography>
            </CardContent>
          </SDeaths>
        </Grid>
      </SContainer>
    </>
  );
});
