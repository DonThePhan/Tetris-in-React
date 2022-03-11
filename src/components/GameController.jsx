import React, { useState, useEffect, useContext } from "react";
import PlayAreaContext from '../store/playAreaContext'

function GameController() {
  const {startGame} = useContext(PlayAreaContext)

  return (
    <div>
      <button onClick={startGame}>Start</button>
    </div>
  );
}

export default GameController;
