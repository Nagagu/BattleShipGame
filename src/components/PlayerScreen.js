import { React, useEffect } from "react";
import { Board } from "./Board";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Configuration } from "./Configuration";

export const PlayerScreen = ({ configKey }) => {
  // console.log(configKey);
  return (
    <div className="playerScreen">
      <div className="configKey">
        <h4>{configKey}</h4>
      </div>

      {/* <Configuration configKey={configKey} /> */}
      <Board configKey={configKey} />
    </div>
  );
};
