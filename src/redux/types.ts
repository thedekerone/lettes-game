export interface Letter {
  letter: String;
  isSelected: Boolean;
  canSelect: Boolean;
  id: String;
}

export interface BoardState {
  word: Array<Letter>;
  data: Array<Letter>;
}
