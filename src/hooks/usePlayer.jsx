import { useState, useCallback, useEffect } from "react";
import { STAGE_WIDTH } from "../components/gameHelpers";
import { randomTetromino, TETROMINOS } from "../components/tetrominos";

export function usePlayer() {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
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

  // useEffect(() => {
  //   console.log('player updated')
  // },[player])

  return { player, updatePlayerPos, resetPlayer };
}
