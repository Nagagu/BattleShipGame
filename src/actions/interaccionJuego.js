import { types } from "../types/types";

export const atacarCasilla = (casilla, tablero, turno) => {
  return {
    type: types.estadoCasillaOnClick,
    payload: {
      casilla,
      tablero,
      turno,
    },
  };
};
