export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// Create Grid - refer to 18:30 in video for original method
export const createStage = () =>
  new Array(STAGE_HEIGHT).fill(new Array(STAGE_WIDTH).fill([0, "clear"]));

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y++) {
    for (let x = 0; x < player.tetromino[0].length; x++) {
      // 1. Check we're on a tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. Check move is inside the game area's height (y)
          // We shouldn't go through the bottom of the play area
          !stage[y + player.pos.y + moveY] ||
          // 3. Check move is inside of game area's width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. Check cell we're moving to isn't set to 'clear'
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};
