import React, { useState } from "react";

import { createStage } from "./gameHelpers";

// Custom Hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

// Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import StyledTetrisWrapper from "./styles/StyledTetrisWrapper";

function Tetris() {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const { player, updatePlayerPos, resetPlayer } = usePlayer();
  const { stage, setStage } = useStage(player);

  console.log("re-render");

  const movePlayer = (dir) => {
    updatePlayerPos({x:dir, y:0})
  };

  const startGame = () => {
    // Reset Everthing
    setStage(createStage())
    resetPlayer()
  };

  const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false });
  };

  const dropPlayer = () => {
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37 /* Left Arrow */) {
        movePlayer(-1);
      } else if (keyCode === 39 /* Right Arrow */) {
        movePlayer(1);
      } else if (keyCode === 40 /* Down Arrow */) {
        dropPlayer();
      }
    }
  };

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={(e) => move(e)}>
      <div className="flex flex-row items-start">
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton onClick={startGame} />
        </aside>
      </div>
    </StyledTetrisWrapper>
  );
}

export default Tetris;
