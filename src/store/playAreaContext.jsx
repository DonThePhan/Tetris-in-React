// import React, { useState, useEffect } from "react";
// import { grid as gridData, selectTetrisBlock } from "../gameHelpers";

// const PlayAreaContext = React.createContext({});

// export const PlayAreaProvider = (props) => {
//   const [grid, setGrid] = useState(gridData);
//   const [block, setBlock] = useState({
//     shape: selectTetrisBlock(),
//     pos: { y: 0, x: 2 },
//   });

//   function startGame() {
//     setGrid((prev) => moveDown(prev));
//   }

//   useEffect(() => {
//     // console.log(grid)
//     console.log("change");
//     // console.log(block.pos.y)
//   }, [grid]);

//   return (
//     <PlayAreaContext.Provider
//       value={{
//         grid,
//         setGrid,
//         startGame,
//       }}
//     >
//       {props.children}
//     </PlayAreaContext.Provider>
//   );
// };

// const block = { pos: { y: 0, x: 2 } };

// const moveDown = (grid) => {
//   const newGrid = [...grid];
//   // console.log(block.pos.y);
  
//   console.log(block.pos.y);
//   newGrid[block.pos.y][block.pos.x].color = "bg-red-600";
//   console.log(block.pos.y);
//   return newGrid;
// };

// export default PlayAreaContext;
