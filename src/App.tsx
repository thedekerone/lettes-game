import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { CellsGrid } from "./components/CellsGrid";

function App() {
  return (
    <div className='App'>
      <CellsGrid></CellsGrid>
      <div className='word-container'></div>
    </div>
  );
}

export default App;
