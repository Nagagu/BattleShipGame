import React from "react";
import { Board } from "./Board";
import { Configuration } from "./Configuration";

export const PlayerScreen = ({ configKey }) => {
  // console.log(configKey);
  return (
    <div className="playerScreen">
      <h4>{configKey}</h4>
      <Configuration configKey={configKey} />
      <Board configKey={configKey} />
    </div>
  );
};
