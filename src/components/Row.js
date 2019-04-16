import React from "react";
import vs from "../img/vs.png";

const Row = props => {
  return (
    <label className="vs">
      <h2>{props.player1}</h2>
      <img src={vs} style={{ width: 40, height: 50 }} alt="vs"/>
      <h2>{props.player2}</h2>
    </label>
  );
};

export default Row;
