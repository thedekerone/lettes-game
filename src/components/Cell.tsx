import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { deselect, select } from "../redux/reducers/board";
import "./cell.css";

type CellType = {
  letter: String;
  isSelected: Boolean;
};

export const Cell = ({ letter, isSelected }: CellType) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (isSelected) {
      dispatch(deselect(letter));
    } else {
      dispatch(select(letter));
    }
  };

  return (
    <div
      onClick={handleClick}
      className={isSelected ? "cell selected" : "cell"}
    >
      {letter}
    </div>
  );
};
