const { moduleExpression } = require("@babel/types");

class TetrisCell {
  constructor(y, x) {
    this.y = y;
    this.x = x;
    this.color = "base-100";
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

// console.log(grid[0][1].x);
module.exports = {
  grid,
};
