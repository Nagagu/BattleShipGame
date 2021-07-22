import React, { useEffect, useState } from "react";
import { PlayerScreen } from "./PlayerScreen";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { startGame } from "../actions/gameInteraction";
import { Configuration } from "./Configuration";

export const GameScreen = () => {
  const [gameStarted, setgameStarted] = useState(false);
  const { startedGame } = useSelector((state) => state.game);

  // useEffect(() => {
  //   Swal.fire({
  //     title: "Ready?, Go!",
  //     timer: 2000,
  //     willClose: () => {
  //       clearInterval();
  //     },
  //   });
  // }, []);
  const dispatch = useDispatch();
  const handleClickStart = () => {
    // setgameStarted(true);
    dispatch(startGame());
  };

  return (
    <>
      <div className="title">
        {" "}
        <h1> BattleShip Game </h1>
      </div>
      <div className="container">
        {" "}
        <div className="chooseboard">
          <h4>Choose a board size:</h4>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-sm-12 content-left">
            <div className="content-left">
              <h4>Player 1</h4> <Configuration configKey={"Player 1"} />
            </div>
          </div>
          {/* </div> */}
          {/* <div className="row"> */}
          <div className="col-sm-12 content-right">
            <div className="content-right"></div>
            <h4>Player 2</h4> <Configuration configKey={"Player 2"} />
          </div>
        </div>
        <div className="row justify-content-md-center">
          {" "}
          <div className="col-sm-12 content-right">
            <button
              //visibility={gameStarted ? "hidden" : " "}
              className={"startButton" + (startedGame ? +"hidden" : " ")}
              onClick={handleClickStart}
            >
              Start Game
            </button>
          </div>
        </div>
      </div>
      {/* <div className="boardSizeSection">
        {" "}
        <h4>Player 1</h4> <Configuration configKey={"Player 1"} />
        <h4>Player 2</h4>
        <Configuration configKey={"Player 2"} />
        <button
          //visibility={gameStarted ? "hidden" : " "}
          className={startedGame ? "hidden" : " "}
          onClick={handleClickStart}
        >
          Start Game
        </button>
      </div> */}
      {startedGame && (
        <>
          {" "}
          <PlayerScreen configKey={"Player 1"} />
          <PlayerScreen configKey={"Player 2"} />{" "}
        </>
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
