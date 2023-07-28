import { FC } from "react";
import { IProgress } from "../models";

export const Progress: FC<IProgress> = ({ current, total }) => (
  <div className="flex items-center gap-4 mt-auto">
    <label htmlFor="file">Overall progress:</label>
    <div className="h-1 flex-grow rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-600">
      <div
        className="h-1 bg-blue-700"
        style={{ width: `${((current + 1) / total) * 100}%` }}
      ></div>
    </div>
    <span>
      {current + 1} / {total}
    </span>
  </div>
);
