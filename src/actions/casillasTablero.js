import { types } from "../types/types";

export const columnasDelTablero = (
  columnas,
  configKey
  // tablero,
) => {
  return {
    type: types.casillasTablero,
    payload: {
      columnas,
      configKey,
      // tablero,
      //   numeroCasillas,
    },
  };
};
