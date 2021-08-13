import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deselect, select } from "../redux/reducers/board";
import { RootState } from "../redux/store";
import "./cell.css";

type CellType = {
  letter: string;
};

export const Cell = ({ letter }: CellType) => {
  const isSelected = useSelector(
    (state: RootState) =>
      state.board.data.find((el) => el.letter === letter)?.isSelected
  );
  const word = useSelector((state: RootState) => state.board.word);

  console.log(word);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() =>
        !isSelected ? dispatch(select(letter)) : dispatch(deselect(letter))
      }
      className='cell'
    >
      {letter}
    </div>
  );
};
