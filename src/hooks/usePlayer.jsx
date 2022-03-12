import { useState, useCallback, useEffect } from "react";
import { checkCollision, STAGE_WIDTH } from "../components/gameHelpers";
import { randomTetromino, TETROMINOS } from "../components/tetrominos";

export function usePlayer() {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  const rotate = (matrix, dir) => {
    // Make row cols (transpose)
    const rotatedTetro = matrix.map((_, index) =>
      matrix.map((col) => col[index])
    );
    // Reverse each row
    if (dir > 0) return rotatedTetro.map((row) => row.reverse());
    return rotatedTetro.reverse();
  };

  const playerRotate = (stage, dir) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

    const pos = clonedPlayer.pos.x;
    let offset = 0;

    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      // jumps left & right -> 1, -2, 3, -4, etc...
      offset = -(offset + (offset > 0 ? 1 : -1));

      clonedPlayer.pos.x += offset;

      // If nothing works, EXIT the function W/O rotating
      if (offset > clonedPlayer.tetromino[0].length) {
        // rotate(clonedPlayer.tetromino, -dir);
        // clonedPlayer.pos.x = pos;
        return;
      }
    }

    // If no issues, go with it
    setPlayer(clonedPlayer);
  };

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

  return { player, updatePlayerPos, resetPlayer, playerRotate };
}
