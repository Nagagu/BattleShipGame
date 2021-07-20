import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { columnasDelTablero } from "../actions/casillasTablero";

export const Configuracion = ({ configKey }) => {
  const dispatch = useDispatch();
  const ref = useRef();
  useEffect(() => {
    dispatch(columnasDelTablero(ref.current.value, configKey));
  }, []);

  const handleSelectChange = (event) => {
    const selectValue = event.target.value;
    dispatch(columnasDelTablero(selectValue, configKey));
  };
  return (
    <div>
      <h4>Elige un tamaño de tablero</h4>
      <select ref={ref} onChange={handleSelectChange}>
        <option value="0">Iniciar</option>
        <option selected value="4">
          4
        </option>
        <option value="8">8</option>
        <option value="16">16</option>
      </select>
    </div>
  );
};
