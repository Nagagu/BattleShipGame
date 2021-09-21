import Swal from "sweetalert2";
import { types } from "../types/types";
function getRandomElements(list, numElements) {
  return [...list]
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .slice(0, numElements);
}

const boards = [
  {
    columns: 0,
    configKey: "Player 1",
    boxesList: [],
    boxesQuant: 0,
  },
  {
    columns: 0,
    configKey: "Player 2",
    boxesList: [],
    boxesQuant: 0,
  },
];
const initialState = {
  boards: boards,
  playerTurn: getRandomElements(boards, 1)[0].configKey, //player turn random at start
  startedGame: false,
  finishedGame: false,
};

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.startGame:
      return {
        ...state,
        startedGame: true,
      };
    case types.boxesBoard:
      const boxesQuant = action.payload.columns * action.payload.columns;
      let numColumns = action.payload.columns;
      let numRows = action.payload.columns;
      let boxesList = getBoxesList(numRows, numColumns);

      return {
        ...state,
        boards: [
          ...state.boards.filter(
            (o) => o.configKey !== action.payload.configKey && o != null
          ),

          {
            columns: action.payload.columns,
            configKey: action.payload.configKey,
            boxesList: boxesList,
            boxesQuant: boxesQuant,
          },
        ],
      };

    case types.boxStateOnClick:
      const activeBoard = state.boards.filter(
        (o) => o.configKey === action.payload.board.configKey
      )[0];

      const BoxState = activeBoard.boxesList.filter(
        (o) => o.id === action.payload.box.id
      )[0];

      BoxState.attacked = true;

      const attackedBoxesWithShip = activeBoard.boxesList.filter(
        (o) => o.ship === true && o.attacked === true
      );

      const boxesWithShip = activeBoard.boxesList.filter(
        (o) => o.ship === true
      );

      if (boxesWithShip.length === attackedBoxesWithShip.length) {
        state.finishedGame = true;
      }
      switch (state.playerTurn) {
        case "Player 1":
          state.playerTurn = "Player 2";
          break;
        case "Player 2":
          state.playerTurn = "Player 1";
          break;
      }

      return {
        ...state,
      };

    case types.reset:
      return {
        ...state,
        startedGame: false,
        finishedGame: false,
      };

    default:
      return state;
  }
};

const abc = "A B C D E F G H I J K L M N O P Q";
const letters = abc.split(" ");

function getBoxesList(numRows, numColumns) {
  let boxesList = [];

  for (let rowIdex = 0; rowIdex < numRows; rowIdex++) {
    for (let columnIndex = 0; columnIndex < numColumns; columnIndex++) {
      let box = {
        id: letters[columnIndex] + (rowIdex + 1),
        ship: false,
        attacked: false,
      };
      boxesList.push(box);
    }
  }

  const randomBoxes = getRandomElements(boxesList, boxesList.length * 0.25);
  randomBoxes.map((o) => (o.ship = true));
  return boxesList;
}
