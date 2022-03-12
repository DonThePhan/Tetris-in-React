import React from "react";
import { TETROMINOS } from "./tetrominos";

function Cell({ type }) {
  return <div className={`border-2 h-10 w-10 ${TETROMINOS[type].color}`}></div>;
}

export default Cell;
