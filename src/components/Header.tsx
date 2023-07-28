import { FC } from "react";
import siteLogo from "../assets/ISTQB-Casual_original.png";
import { IHeader } from "../models";
import classNames from "classnames";
import { Container } from "./Container";

export const Header: FC<IHeader> = ({ result }) => (
  <header className="py-4 md:py-5 shadow-md bg-white">
    <Container>
      <div className="flex items-center gap-4">
        <img
          src={siteLogo}
          width={136}
          height={96}
          className="w-16 md:w-20"
          alt="ISTQB"
        />
        <h1 className="font-semibold text-lg"> ISTQB® Glossary Trainer</h1>
        <div
          className={classNames("ml-auto", {
            "text-red-500": result < 65,
            "text-green-500": result >= 65,
          })}
        >{`${result}%`}</div>
      </div>
    </Container>
  </header>
);
