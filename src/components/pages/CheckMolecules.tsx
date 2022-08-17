import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";

import { Cards } from "../molecules/Cards";
import { SCards } from "../molecules/SCards";

export const CheckMolecules: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <Typography color="textSecondary" gutterBottom>
        Check Molecules Parts
      </Typography>
      {/* <Cards /> */}
      <SCards />
      <Button onClick={onClickHome} variant="contained" color="secondary">
        Go To Home
      </Button>
    </>
  );
});
