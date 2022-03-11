import React from "react";

function Cell({ cell }) {
  const classString = `${cell.color}`;

  return <div className={`w-10 h-10 border-2 ${classString}`} />;
}

export default Cell;
