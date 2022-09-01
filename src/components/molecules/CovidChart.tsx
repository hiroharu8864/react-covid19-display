import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

import { BarCovidChart } from "../molecules/BarCovidChart";
import { PieCovidChart } from "../molecules/PieCovidChart";

/** Styled Component定義 */
const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

type Props = {
  infectedCount: number;
  recoveredCount: number;
  deadCount: number;
};

export const CovidChart: FC<Props> = memo((Props) => {
  const { infectedCount, recoveredCount, deadCount } = Props;

  return (
    <>
      <SContainer>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={12} md={6}>
            <BarCovidChart
              infectedCount={infectedCount}
              recoveredCount={recoveredCount}
              deadCount={deadCount}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PieCovidChart
              infectedCount={infectedCount}
              recoveredCount={recoveredCount}
              deadCount={deadCount}
            />
          </Grid>
        </Grid>
      </SContainer>
    </>
  );
});
