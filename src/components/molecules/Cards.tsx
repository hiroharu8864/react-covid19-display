import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding: 0px;
`;

const SInfected = styled.div`
  border-left: 5px solid #33a3ff;
  border-radius: 0% !important;
  margin: 2% 2% !important;
`;

const SRecoverd = styled.div`
  border-left: 5px solid #3cb371;
  border-radius: 0% !important;
  margin: 2% 2% !important;
`;

const SDeaths = styled.div`
  border-left: 5px solid #ff3370;
  border-radius: 0% !important;
  margin: 2% 2% !important;
`;

export const Cards: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <h3>Cards Pages</h3>
      <Button onClick={onClickHome} variant="contained" color="secondary">
        Go To Home
      </Button>
    </>
  );
});
