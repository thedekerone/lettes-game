import React from "react";
import "./cell.css";

type CellType = {
  letter: string;
};

export const Cell = ({ letter }: CellType) => {
  return <div className='cell'>{letter}</div>;
};
