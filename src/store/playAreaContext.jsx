import React, { useState, useEffect } from "react";
import { grid as gridData, selectTetrisBlock, moveDown } from "./tetrisLogic";

const PlayAreaContext = React.createContext({});

export const PlayAreaProvider = (props) => {
  const [grid, setGrid] = useState(gridData);
  
  function startGame() {
    console.log('here')
    moveDown();
    setGrid([...gridData]);
    console.log(grid)
  }

  return (
    <PlayAreaContext.Provider
      value={{
        grid,
        setGrid,
        startGame,
      }}
    >
      {props.children}
    </PlayAreaContext.Provider>
  );
};

export default PlayAreaContext;
