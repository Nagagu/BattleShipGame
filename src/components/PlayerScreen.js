import React from "react";
import { Board } from "./Board";
import { Configuration } from "./Configuration";

export const PlayerScreen = ({ configKey }) => {
  // console.log(configKey);
  return (
    <div className="playerScreen">
      <h5> Player: {configKey}</h5>
      <Configuration configKey={configKey} className="configuration" />
      <Board configKey={configKey} />
    </div>
  );
};
