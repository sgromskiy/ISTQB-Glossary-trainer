export enum QuizState {
  BeforeStart,
  Thinking,
  AnswerSelected,
  Score,
}

export interface IAnswer {
  text: string;
  onSelect: (id: number) => void;
  id: number;
  idx: number;
  quizState: QuizState;
  answer: number;
  count: number;
}

export interface IProgress {
  current: number;
  total: number;
}

export interface IContainer {
  children: JSX.Element;
}

export interface IHeader {
  result: number;
}

export interface IQuestion {
  text: string;
}
