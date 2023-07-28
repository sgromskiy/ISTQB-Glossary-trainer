import { FC } from "react";
import { IAnswer, QuizState } from "../models";
import classNames from "classnames";

export const Answer: FC<IAnswer> = ({
  text,
  onSelect,
  id,
  idx,
  quizState,
  answer,
  count,
}) => {
  const correctAnswer = answer >= 0 && count === id;
  const selected = id === answer;
  return (
    <button
      className={classNames(
        "outline-2 outline flex flex-col text-left shadow-lg bg-white",
        {
          "outline-green-500": correctAnswer,
          "outline-red-500": !correctAnswer && selected,
          "outline-none": !correctAnswer && !selected,
        }
      )}
      onClick={() => onSelect(id)}
      disabled={quizState === QuizState.AnswerSelected}
    >
      <div className="clip w-full shrink-0 py-1 px-2 bg-sky-700 text-white font-semibold text-sm">
        {idx + 1}
      </div>
      <div className="p-4">
        <p>{text}</p>
      </div>
    </button>
  );
};
