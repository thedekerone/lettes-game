import { Letter } from "./types";

export const canSelect = (letterIndex: number, lastLetterIndex: number) => {
  const neighbors = [
    letterIndex + 1,
    letterIndex - 1,
    letterIndex - 4,
    letterIndex + 4,
  ];

  const selectedNeighbors = neighbors.filter((el: number) => {
    if (el < 0 || el > 15) return false;
    if (neighbors.includes(lastLetterIndex)) {
      return true;
    }
    return false;
  });

  return selectedNeighbors.length > 0;
};

export const formatStateCanSelect = (
  data: Array<Letter>,
  word: Array<Letter>
) => {
  return data.map((el, index) => ({
    ...el,
    canSelect: word[word.length - 1]
      ? canSelect(
          index,
          data.map((el) => el.id).indexOf(word[word.length - 1].id)
        )
      : false,
  }));
};
