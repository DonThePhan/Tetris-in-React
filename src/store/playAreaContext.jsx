import React, { useState } from "react";
import { grid as gridData } from "./tetrisData";

const PlayAreaContext = React.createContext({});

export const PlayAreaProvider = (props) => {
  const [grid, setGrid] = useState(gridData);

  return (
    <PlayAreaContext.Provider value={{grid}}>
      {props.children}
    </PlayAreaContext.Provider>
  );
};

export default PlayAreaContext;
