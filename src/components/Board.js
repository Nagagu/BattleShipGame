import { useSelector } from "react-redux";
import { Box } from "./Box";

export const Board = ({ configKey }) => {
  const { boards, playerTurn } = useSelector((state) => state.game);
  const configboard = boards.filter((o) => o.configKey === configKey)[0];
  console.log(playerTurn);

  // console.log(configboard.columns);
  // console.log(configboard.boxesList);

  return (
    <div>
      <div>
        <div
          className={
            "board " +
            (playerTurn === configKey ? "boardDisabled" : "boardEnabled")
          }
          style={{
            "grid-template-columns": "1fr ".repeat(configboard.columns),
          }}
        >
          {configboard.boxesList.map((box) => (
            <>
              <Box
                disabled={playerTurn === configKey}
                key={box.id}
                box={box}
                board={configboard}
                turn={playerTurn}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
