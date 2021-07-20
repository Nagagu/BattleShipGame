import { types } from "../types/types";

export const boardColumns = (columns, configKey) => {
  return {
    type: types.boxesBoard,
    payload: {
      columns,
      configKey,
    },
  };
};
