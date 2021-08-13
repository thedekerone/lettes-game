import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { deselect, select } from "../redux/reducers/board";
import { RootState } from "../redux/store";
import "./cell.css";

type CellType = {
  letter: String;
  isSelected: Boolean;
  canSelect: Boolean;
  id: String;
  isValid: Boolean;
};

export const Cell = ({
  letter,
  isSelected,
  canSelect,
  id,
  isValid,
}: CellType) => {
  const lastLetter = useAppSelector(
    (state: RootState) => state.board.word[state.board.word.length - 1]
  );

  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (isSelected) {
      lastLetter.id === id && dispatch(deselect(id));
    } else if (canSelect) {
      dispatch(select(id));
    }
  };

  return (
    <div
      onClick={handleClick}
      className={
        isSelected
          ? isValid
            ? "cell selected valid"
            : "cell selected"
          : "cell"
      }
    >
      {letter}
    </div>
  );
};
