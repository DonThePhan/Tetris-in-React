import { useState, useCallback } from "react";
import { STAGE_WIDTH } from "../components/gameHelpers";
import { randomTetromino } from "../components/tetrominos";

export function usePlayer() {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false,
  });

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.post.y += y) },
      collided,
    }));
  };

  // todo WHY DO I NEED USECALLBACK???
  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);

  return { player, updatePlayerPos, resetPlayer };
}
