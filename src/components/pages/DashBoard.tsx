import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button, makeStyles, Typography } from "@material-ui/core";

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
      <Button onClick={onClickHome} variant="outlined" color="default">
        Test Button
      </Button>
    </>
  );
});
