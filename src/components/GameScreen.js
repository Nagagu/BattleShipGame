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
      <h1 className="title"> BattleShip </h1>
      <PlayerScreen configKey={"player1"} />
      <PlayerScreen configKey={"player2"} />
    </div>
  );
};
