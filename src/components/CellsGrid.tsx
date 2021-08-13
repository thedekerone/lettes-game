import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { Cell } from "./Cell";

import "./cellsGrid.css";

export const CellsGrid = () => {
  const boardData = useAppSelector((state: RootState) => state.board.data);
  // if length = 0, you can select any tile
  const canSelectItems = boardData.filter((el) => el.isSelected);

  return (
    <div className='cell-grid'>
      {boardData.map((el, index) => (
        <Cell
          key={index}
          canSelect={el.canSelect || canSelectItems.length === 0}
          letter={el.letter}
          id={el.id}
          isSelected={el.isSelected}
        ></Cell>
      ))}
    </div>
  );
};
