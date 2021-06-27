import React from "react";
import styled from "styled-components";
import { GameState } from "../../util/types";
import Bucket from "../Bucket";

const bucketCountToColumns = (bucketCount: number) => {
  if (bucketCount <= 5) {
    return bucketCount;
  } else {
    return Math.ceil(bucketCount / 2);
  }
};

const Wrapper = styled.div<{ bucketCount: number }>`
  ${({ theme, bucketCount }) => `
    display: grid;
    grid-template-columns: repeat(${bucketCountToColumns(bucketCount)}, ${
    theme.ballSize + 15
  }px);
    row-gap: 10px;
    column-gap: 10px;
  `}
`;

interface Props {
  gameState: GameState;
}

const Game: React.FC<Props> = ({ gameState }) => {
  return (
    <Wrapper bucketCount={gameState.buckets.length}>
      {gameState.buckets.map((contents, idx) => (
        <Bucket contents={contents} key={idx}></Bucket>
      ))}
    </Wrapper>
  );
};

export default Game;
