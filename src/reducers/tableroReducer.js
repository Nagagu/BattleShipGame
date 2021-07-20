import Swal from "sweetalert2";
import { types } from "../types/types";
function getElementosAleatorios(lista, numElementos) {
  return [...lista]
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .slice(0, numElementos);
}

const tableros = [
  {
    columnas: 0,
    configKey: "player1",
    listaCasillas: [],
    numCasillas: 0,
  },
  {
    columnas: 0,
    configKey: "player2",
    listaCasillas: [],
    numCasillas: 0,
  },
];
const initialState = {
  tableros: tableros,
  turnoJugador: getElementosAleatorios(tableros, 1)[0].configKey,
};

export const tableroReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.casillasTablero:
      const numCasillas = action.payload.columnas * action.payload.columnas;
      let numColumnas = action.payload.columnas;
      let numFilas = action.payload.columnas;
      let listaCasillas = obtenerListaCasillas(numFilas, numColumnas);

      return {
        ...state,
        tableros: [
          ...state.tableros.filter(
            (o) => o.configKey !== action.payload.configKey && o != null
          ),

          {
            columnas: action.payload.columnas,
            configKey: action.payload.configKey,
            listaCasillas: listaCasillas,
            numCasillas: numCasillas,
          },
        ],
      };

    case types.estadoCasillaOnClick:
      const tableroActivo = state.tableros.filter(
        (o) => o.configKey === action.payload.tablero.configKey
      )[0];

      const estadoCasilla = tableroActivo.listaCasillas.filter(
        (o) => o.id === action.payload.casilla.id
      )[0];

      estadoCasilla.atacado = true;

      const casillasConBarcoAtacadas = tableroActivo.listaCasillas.filter(
        (o) => o.barco === true && o.atacado === true
      );

      const casillasConBarco = tableroActivo.listaCasillas.filter(
        (o) => o.barco === true
      );

      if (casillasConBarco.length == casillasConBarcoAtacadas.length) {
        Swal.fire({
          title: "¡Tú ganas!",
          imageUrl: "https://picsum.photos/id/828/350/250",
          imageWidth: 350,
          imageHeight: 250,
          imageAlt: "Custom image",
        });
      }
      switch (state.turnoJugador) {
        case "player1":
          state.turnoJugador = "player2";
          break;
        case "player2":
          state.turnoJugador = "player1";
          break;
      }

      return {
        ...state,
      };

    default:
      return state;
  }
};

const abc = "A B C D E F G H I J K L M N O P Q";
const letras = abc.split(" ");

function obtenerListaCasillas(numFilas, numColumnas) {
  let listaCasillas = [];

  for (let filaIndex = 0; filaIndex < numFilas; filaIndex++) {
    for (let columnaIndex = 0; columnaIndex < numColumnas; columnaIndex++) {
      let casilla = {
        id: letras[columnaIndex] + (filaIndex + 1),
        barco: false,
        atacado: false,
      };
      listaCasillas.push(casilla);
    }
  }

  const casillasAleatorias = getElementosAleatorios(
    listaCasillas,
    numColumnas * 2
  );
  casillasAleatorias.map((o) => (o.barco = true));
  return listaCasillas;
}
