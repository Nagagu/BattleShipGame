import React from "react";

export const PosicionColumna = ({ posicion }) => {
  return (
    <>
      <div className="posicionColumna">{posicion.letra}</div>
      {/* <div className="posicionesColumnas">{posicion.numero}</div> */}
    </>
  );
};

export const PosicionFila = ({ posicion }) => {
  return (
    <>
      <div className="posicionFila">{posicion.numero}</div>
      {/* <div className="posicionesColumnas">{posicion.numero}</div> */}
    </>
  );
};
