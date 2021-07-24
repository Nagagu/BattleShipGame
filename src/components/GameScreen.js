import React, { useEffect, useState } from "react";
import { PlayerScreen } from "./PlayerScreen";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { startGame, reset } from "../actions/gameInteraction";
import { Configuration } from "./Configuration";

export const GameScreen = () => {
  const { startedGame } = useSelector((state) => state.game);
  const { boards } = useSelector((state) => state.game);
  console.log(boards[0].boxesQuant);

  useEffect(() => {
    if (startedGame) {
      Swal.fire({
        title:
          "Sink " + boards[0].boxesQuant * 0.25 + " opponent's ships to win",
        timer: 6000,
        willClose: () => {
          clearInterval();
        },
      });
    }
  }, [startedGame]);
  const dispatch = useDispatch();
  const handleClickStart = () => {
    dispatch(startGame());
  };
  const handleClickBackButton = () => {
    dispatch(reset());
  };

  return (
    <>
      <div className="title">
        {" "}
        <h1> BattleShip Game </h1>
        <button
          style={{ display: startedGame ? "inline-block" : "none" }}
          className="backButton"
          onClick={handleClickBackButton}
        >
          Back
        </button>
      </div>
      {startedGame ? (
        <>
          <PlayerScreen configKey={"Player 1"} />
          <PlayerScreen configKey={"Player 2"} />{" "}
        </>
      ) : (
        <div className="container">
          {" "}
          <div className="chooseboard">
            <h4>Customize your board size:</h4>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-sm-12 content-left">
              <div className="content-left">
                <div className="configKey">
                  <h4>Player 1</h4>
                </div>{" "}
                <Configuration configKey={"Player 1"} />
              </div>
            </div>
            <div className="col-sm-12 content-right">
              <div className="content-right"></div>
              <div className="configKey">
                <h4>Player 2</h4>
              </div>{" "}
              <Configuration configKey={"Player 2"} />
            </div>
          </div>
          <div className="row justify-content-md-center">
            {" "}
            <div className="col-sm-12 content-right">
              <button
                className={"startButton" + (startedGame ? +"hidden" : " ")}
                onClick={handleClickStart}
              >
                Start Game
              </button>
            </div>
          </div>
        </div>
      )}
      <div className={startedGame ? "hidden" : " "}>
        <div class="ocean">
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </div>
    </>
    // <div className="ocean">
    //   <div className="title">
    //     {" "}
    //     <h1> BattleShip Game </h1>
    //   </div>

    // <button
    //   //visibility={gameStarted ? "hidden" : " "}
    //   className={gameStarted ? "hidden" : " "}
    //   onClick={handleClickStart}
    // >
    //   Start Game
    // </button>

    //   <div class="wave"></div>
    //   <div class="wave"></div>

    // {gameStarted && (
    //   <>
    //     {" "}
    //     <PlayerScreen configKey={"Player 1"} />
    //     <PlayerScreen configKey={"Player 2"} />{" "}
    //   </>
    // )}
    // </div>

    // <div className="gameScreen">
    //   <div className="title">
    //     {" "}
    //     <h1> BattleShip Game </h1>
    //   </div>

    //   <button
    //     //visibility={gameStarted ? "hidden" : " "}
    //     className={gameStarted ? "hidden" : " "}
    //     onClick={handleClickStart}
    //   >
    //     Start Game
    //   </button>

    //   {gameStarted && (
    //     <>
    //       {" "}
    //       <PlayerScreen configKey={"Player 1"} />
    //       <PlayerScreen configKey={"Player 2"} />{" "}
    //     </>
    //   )}
    // </div>
  );
};
