import { useSelector } from "react-redux";
import { Casilla } from "./Casilla";

export const Tablero = ({ configKey }) => {
  const { tableros, turnoJugador } = useSelector((state) => state.config);
  const configTablero = tableros.filter((o) => o.configKey === configKey)[0];
  console.log(turnoJugador);

  // console.log(configTablero.columnas);
  // console.log(configTablero.listaCasillas);

  return (
    <div>
      <div>
        <div
          className={
            "tablero " + (turnoJugador === configKey ? "tableroDisabled" : "")
          }
          style={{
            "grid-template-columns": "1fr ".repeat(configTablero.columnas),
          }}
        >
          {configTablero.listaCasillas.map((casilla) => (
            <>
              <Casilla
                disabled={turnoJugador === configKey}
                key={casilla.id}
                casilla={casilla}
                tablero={configTablero}
                turno={turnoJugador}
              />
            </>
          ))}
        </div>
      </div>
      {/* Caja personalizar tamaño */}
    </div>
  );
};

export default Tablero;
