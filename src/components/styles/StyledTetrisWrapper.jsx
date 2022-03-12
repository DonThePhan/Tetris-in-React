import React from "react";

function StyledTetrisWrapper({ tabIndex, children, move }) {
  return (
    <div onKeyDown={(e)=> move(e)} tabIndex={tabIndex} className="w-screen h-screen">
      {children}
    </div>
  );
}

export default StyledTetrisWrapper;
