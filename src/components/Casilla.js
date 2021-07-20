import React from "react";
import { useDispatch } from "react-redux";
import { atacarCasilla } from "../actions/interaccionJuego";

export const Casilla = ({ casilla, tablero, turno, disabled }) => {
  const dispatch = useDispatch();
  const handleCasillaClick = (e) => {
    dispatch(atacarCasilla(casilla, tablero, turno));
  };
  return (
    <div
      onClick={!casilla.atacado && !disabled ? handleCasillaClick : ""}
      className={
        "casilla " +
        (casilla.atacado
          ? casilla.barco
            ? "casillaAtacada"
            : "casillaAgua"
          : " ")
      }
    >
      {casilla.id}
    </div>
  );
};
