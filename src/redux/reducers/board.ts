import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import letter from "../../api/letters.json";
import type { RootState } from "../store";
import { BoardState, Letter } from "../types";
import { canSelect, formatStateCanSelect } from "../util";

const initialState: BoardState = {
  word: [],
  data: letter.board.map((el, index) => ({
    letter: el,
    isSelected: false,
    canSelect: false,
    id: "letter" + index,
  })),
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    select: (state, action: PayloadAction<String>) => {
      const wordSelected = state.data.find((el) => el.id === action.payload);
      if (!wordSelected) return state;

      state.data = state.data.map((el) => {
        return el.id === action.payload ? { ...el, isSelected: true } : el;
      });

      state.word.push(wordSelected);

      // Finds the cells that can be selected
      state.data = formatStateCanSelect(state.data, state.word);
    },
    deselect: (state, action: PayloadAction<String>) => {
      const wordSelected = state.data.find((el) => el.id === action.payload);

      state.data = state.data.map((el) => {
        return el.id === action.payload
          ? {
              ...el,
              isSelected: false,
            }
          : el;
      });

      state.word = state.word.filter((el) => el.id !== action.payload);

      // Finds the cells that can be selected
      state.data = formatStateCanSelect(state.data, state.word);
    },

    clear: (state) => {
      state.data = state.data.map((el) => ({
        ...el,
        isSelected: false,
        canSelect: false,
      }));
      state.word = [];
    },
  },
});

export const { select, deselect, clear } = boardSlice.actions;

export const getWord = (state: RootState) => state.board.word;

export default boardSlice.reducer;
