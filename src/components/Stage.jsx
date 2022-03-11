import React from "react";
import Cell from "./Cell";

function Stage({ stage }) {
  return (
    <div className="flex flex-col items-center">
      {stage.map((row, y) => (
        <div key={y} className="flex flex-row">
          {row.map((cell, x) => (
            <Cell key={x} type={cell[0]} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Stage;
