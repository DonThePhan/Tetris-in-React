import React, { useState } from "react";
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

function Tetris() {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const { player } = usePlayer();
  const { stage, setStage } = useStage(player);

  console.log("re-render");

  return (
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
        <StartButton />
      </aside>
    </div>
  );
}

export default Tetris;
