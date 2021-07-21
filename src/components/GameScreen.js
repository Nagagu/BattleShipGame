import React, { useEffect } from "react";
import { PlayerScreen } from "./PlayerScreen";
import Swal from "sweetalert2";

export const GameScreen = () => {
  useEffect(() => {
    Swal.fire({
      title: "Ready?, Go!",
      timer: 2000,
      willClose: () => {
        clearInterval();
      },
    });
  }, []);

  return (
    <div className="gameScreen">
      <div className="title">
        {" "}
        <h1> BattleShip Game </h1>
      </div>

      <PlayerScreen configKey={"Player 1"} />
      <PlayerScreen configKey={"Player 2"} />
    </div>
  );
};
