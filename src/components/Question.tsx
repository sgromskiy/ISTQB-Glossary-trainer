import { FC } from "react";
import { IQuestion } from "../models";

export const Question: FC<IQuestion> = ({ text }) => {
  return (
    <h2 className="mb-5">
      <span className="block text-sky-800 font-semibold">Question:</span>
      <span className="mb-5">{text}</span>
    </h2>
  );
};
