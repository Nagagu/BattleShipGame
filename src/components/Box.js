import React from "react";
import { useDispatch } from "react-redux";
import { attackBox } from "../actions/gameInteraction";

export const Box = ({ box, board, turn, disabled }) => {
  const dispatch = useDispatch();
  const handleBoxClick = (e) => {
    dispatch(attackBox(box, board, turn));
  };
  return (
    <div
      onClick={!box.attacked && !disabled ? handleBoxClick : ""}
      className={
        "box " + (box.attacked ? (box.ship ? "attackedBox" : "waterBox") : " ")
      }
    >
      {box.id}
    </div>
  );
};
