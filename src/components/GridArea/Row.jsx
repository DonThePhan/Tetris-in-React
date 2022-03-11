import React from "react";
import Cell from "./Cell";

function Row({ row }) {
  return (
    <div className="flex flex-row">
      {row.map((cell) => {
        return <Cell key={cell.x} cell={cell}></Cell>;
      })}
    </div>
  );
}

export default Row;
