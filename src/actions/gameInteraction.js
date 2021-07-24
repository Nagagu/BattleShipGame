import { types } from "../types/types";

export const attackBox = (box, board, turn) => {
  return {
    type: types.boxStateOnClick,
    payload: {
      box,
      board,
      turn,
    },
  };
};

export const startGame = () => {
  return {
    type: types.startGame,
  };
};

export const reset = () => {
  return {
    type: types.reset,
  };
};
