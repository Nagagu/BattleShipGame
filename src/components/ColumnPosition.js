import React from "react";

export const ColumnPosition = ({ position }) => {
  return (
    <>
      <div className="columnPosition">{position.letter}</div>
    </>
  );
};

export const RowPosition = ({ position }) => {
  return (
    <>
      <div className="rowPosition">{position.number}</div>
    </>
  );
};
