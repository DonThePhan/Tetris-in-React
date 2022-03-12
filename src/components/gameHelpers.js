const STAGE_WIDTH = 12;
const STAGE_HEIGHT = 20;

// Create Grid - refer to 18:30 in video for original method
const createStage = () =>
  new Array(STAGE_HEIGHT).fill(new Array(STAGE_WIDTH).fill([0, "clear"]));

module.exports = {
  STAGE_WIDTH,
  STAGE_HEIGHT,
  createStage,
};
