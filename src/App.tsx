import React from "react";
import "./App.css";
import { Cell } from "./components/Cell";

function App() {
  return (
    <div className='App'>
      <div className='cell-grid'>
        <Cell letter='S'></Cell>
        <Cell letter='A'></Cell>
        <Cell letter='V'></Cell>
        <Cell letter='B'></Cell>
        <Cell letter='D'></Cell>
        <Cell letter='V'></Cell>
        <Cell letter='B'></Cell>
        <Cell letter='D'></Cell>
        <Cell letter='V'></Cell>
        <Cell letter='B'></Cell>
        <Cell letter='D'></Cell>
        <Cell letter='D'></Cell>
        <Cell letter='V'></Cell>
        <Cell letter='B'></Cell>
        <Cell letter='D'></Cell>
        <Cell letter='g'></Cell>
      </div>
    </div>
  );
}

export default App;
