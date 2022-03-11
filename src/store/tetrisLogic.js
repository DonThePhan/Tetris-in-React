class TetrisCell {
  constructor(y, x) {
    this.y = y;
    this.x = x;
    this.color = "bg-base-300";
  }
}

const grid = [];
const ROW = 10;
const COL = 20;

for (let y = 0; y < COL; y++) {
  const row = [];
  for (let x = 0; x < ROW; x++) {
    row.push(new TetrisCell(y, x));
  }
  grid.push(row);
}

const tetrisBlockMatrix = {
  L: [
    [0, 0, 0],
    [0, 0, 1],
    [1, 1, 1],
  ],
};

function selectTetrisBlock() {
  return tetrisBlockMatrix.L;
}
const block = { shape: selectTetrisBlock(), pos: { y: 0, x: 5 } };

const moveDown = () => {
  block.pos.y++;
  grid[block.pos.y][block.pos.x].color = "bg-red-600";
};

module.exports = {
  grid,
  selectTetrisBlock,
  moveDown,
};
