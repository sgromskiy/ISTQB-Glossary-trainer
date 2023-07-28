import { FC } from "react";
import { IContainer } from "../models";

export const Container: FC<IContainer> = ({ children }) => (
  <div className="container mx-auto pl-4 pr-4">{children}</div>
);
