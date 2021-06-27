import React, { useState } from "react";
import { BASE_GAME_STATE, TEST_GAME_STATE } from "../../util/constants";
import { styled } from "../../util/theme";
import { GameState } from "../../util/types";
import Game from "../Game";

const Controls = styled.div`
  display: flex;

  margin-bottom: 20px;
`;

const Main: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(TEST_GAME_STATE);

  const handleReset = () => {
    setGameState(BASE_GAME_STATE);
  };

  const handleAddBucket = () => {
    setGameState((prev) => {
      return {
        buckets: [...prev.buckets, []],
      };
    });
  };

  return (
    <>
      <h1>Ball game solver</h1>
      <Controls>
        <button onClick={handleAddBucket}>Add bucket</button>
        <button onClick={handleReset}>Reset</button>
      </Controls>
      <Game gameState={gameState} />
    </>
  );
};

export default Main;
