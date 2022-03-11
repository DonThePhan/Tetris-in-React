import React, { useContext } from "react";
import Row from "./Row";
import PlayAreaContext from "../../store/playAreaContext";

function Grid() {
  const { grid } = useContext(PlayAreaContext);
  return (
    <div className="flex flex-col">
      {grid.map((row) => {
        return <Row key={row[0].y} row={row}></Row>;
      })}
    </div>
  );
}

export default Grid;
