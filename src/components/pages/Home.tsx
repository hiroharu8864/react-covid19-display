import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const Home: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <h3>Home Pages</h3>
      <button onClick={onClickHome}>Go To Home</button>
    </>
  );
});
