import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
  return (
    <>
      <SContainer>
        <p>test</p>
        <p>test</p>
      </SContainer>
    </>
  );
});
