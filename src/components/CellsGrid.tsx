import React from "react";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { Cell } from "./Cell";
import dictionary from "../api/dictionary.json";

import "./cellsGrid.css";

export const CellsGrid = () => {
  const boardData = useAppSelector((state: RootState) => state.board.data);
  const word = useAppSelector((state: RootState) =>
    state.board.word.map((el) => el.letter).join("")
  );

  const validWords = dictionary.words;

  const isValid = validWords.includes(word.toLowerCase());

  // if length = 0, you can select any tile
  const canSelectItems = boardData.filter((el) => el.isSelected);

  return (
    <div className='cell-grid'>
      {boardData.map((el, index) => (
        <Cell
          key={index}
          isValid={isValid}
          canSelect={el.canSelect || canSelectItems.length === 0}
          letter={el.letter}
          id={el.id}
          isSelected={el.isSelected}
        ></Cell>
      ))}
    </div>
  );
};
