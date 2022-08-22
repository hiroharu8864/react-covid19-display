import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  infectedCount: number;
  recoveredCount: number;
  deadCount: number;
};

export const CovidChart: FC<Props> = memo((Props) => {
  return (
    <>
      <p>test</p>
      <p>test</p>
    </>
  );
});
