export interface AnswerCrossword {
  positionSelectedLetter: number;
  answer: string;
}

export interface CrosswordItem {
  positionCrossword: number;
  question: string;
  answerCrossword: AnswerCrossword;
  searchLetter: string;
  show: boolean;
  widthLeft: number;
  widthRight: number;
}
