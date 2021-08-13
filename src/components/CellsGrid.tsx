import React, { useEffect } from "react";
import { board } from "../api/letters.json";
import { Cell } from "./Cell";

export const CellsGrid = () => {
  useEffect(() => {
    console.log(board);
  }, []);

  return (
    <div className='cell-grid'>
      {board.map((el, index) => (
        <Cell key={index} letter={el}></Cell>
      ))}
    </div>
  );
};
