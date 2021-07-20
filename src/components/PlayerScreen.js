import React from "react";
import { Configuracion } from "./Configuracion";
import { Tablero } from "./Tablero";

export const PlayerScreen = ({ configKey }) => {
  // console.log(configKey);
  return (
    <div className="playerScreen">
      <h5> Jugador: {configKey}</h5>
      <Configuracion configKey={configKey} className="configuracion" />
      <Tablero configKey={configKey} />
    </div>
  );
};
