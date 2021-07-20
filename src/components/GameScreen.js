import React, { useEffect } from "react";
import { PlayerScreen } from "./PlayerScreen";
import Swal from "sweetalert2";

export const GameScreen = () => {
  useEffect(() => {
    Swal.fire({
      title: "¡Comienza el juego!",
      timer: 2000,
      willClose: () => {
        clearInterval();
      },
    });
  }, []);

  return (
    <div className="gameScreen">
      <h1 className="titulo"> Hundir la flota </h1>
      <PlayerScreen configKey={"player1"} />
      <PlayerScreen configKey={"player2"} />
    </div>
  );
};
