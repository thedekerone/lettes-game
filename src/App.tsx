import React from "react";
import "./App.css";
import { CellsGrid } from "./components/CellsGrid";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { clear } from "./redux/reducers/board";
import { RootState } from "./redux/store";

function App() {
  const word = useAppSelector((state: RootState) => state.board.word.join(""));

  const dispatch = useAppDispatch();

  return (
    <div className='App'>
      <div className='app-container'>
        <CellsGrid></CellsGrid>
        <div className='controls'>
          <button onClick={() => dispatch(clear())} className='controls__clear'>
            <span className='controls-text'>clear word</span>
            <span className='controls-icon'>X</span>
          </button>
          <div className='controls__word'>{word}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
