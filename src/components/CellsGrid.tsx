import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { Cell } from "./Cell";

import "./cellsGrid.css";

export const CellsGrid = () => {
  const boardData = useAppSelector((state: RootState) => state.board.data);

  console.log(boardData);

  return (
    <div className='cell-grid'>
      {boardData.map((el, index) => (
        <Cell key={index} letter={el.letter} isSelected={el.isSelected}></Cell>
      ))}
    </div>
  );
};
