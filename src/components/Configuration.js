import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { boardColumns } from "../actions/boxesBoard";

export const Configuration = ({ configKey }) => {
  const dispatch = useDispatch();
  const ref = useRef();
  useEffect(() => {
    dispatch(boardColumns(ref.current.value, configKey));
  }, []);

  const handleSelectChange = (event) => {
    const selectValue = event.target.value;
    dispatch(boardColumns(selectValue, configKey));
  };
  return (
    <div>
      <div className="boardSizeConfig">
        <h4>Choose a board size:</h4>
        <select
          className="configuration"
          ref={ref}
          onChange={handleSelectChange}
        >
          <option value="0">None</option>
          <option selected value="4">
            4 boxes
          </option>
          <option value="8">8 boxes</option>
          <option value="16">16 boxes</option>
        </select>
      </div>
    </div>
  );
};
