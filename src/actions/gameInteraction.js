import { types } from "../types/types";

export const attackBox = (box, board, turn) => {
  return {
    type: types.BoxStateOnClick,
    payload: {
      box,
      board,
      turn,
    },
  };
};