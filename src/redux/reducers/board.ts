import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";

// Define a type for the slice state
interface Letter {
  letter: String;
  isSelected: Boolean;
}

interface BoardState {
  word: Array<String>;
  data: Array<Letter>;
}

// Define the initial state using that type
const initialState: BoardState = {
  word: [],
  data: [
    { letter: "a", isSelected: false },
    { letter: "b", isSelected: false },
    { letter: "c", isSelected: false },
    { letter: "d", isSelected: false },
    { letter: "e", isSelected: false },
    { letter: "f", isSelected: false },
    { letter: "g", isSelected: false },
    { letter: "h", isSelected: false },
    { letter: "i", isSelected: false },
    { letter: "j", isSelected: false },
    { letter: "k", isSelected: false },
    { letter: "l", isSelected: false },
    { letter: "m", isSelected: false },
  ],
};

export const boardSlice = createSlice({
  name: "board",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    select: (state, action: PayloadAction<String>) => {
      state.data = state.data.map((el) => {
        return el.letter === action.payload ? { ...el, isSelected: true } : el;
      });

      state.word.push(action.payload);
    },
    deselect: (state, action: PayloadAction<String>) => {
      state.data = state.data.map((el) => {
        return el.letter === action.payload ? { ...el, isSelected: false } : el;
      });

      state.word = state.word.filter((el) => el !== action.payload);
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    clear: (state) => {
      state.data = state.data.map((el) => ({
        ...el,
        isSelected: false,
      }));
    },
  },
});

export const { select, deselect, clear } = boardSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getWord = (state: RootState) => state.board.word;

export default boardSlice.reducer;
