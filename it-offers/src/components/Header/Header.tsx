import React, { ReactNode } from "react";
import style from "./Header.module.css";
import NavButtons from "./NavButtons/NavButtons";
import RightBar from "./RightBar/RightBar";

export interface Children {
  children: ReactNode;
}

const header: React.FunctionComponent = () => (
  <main className={style.Content}>
    <NavButtons />
    <RightBar />
  </main>
);

export default header;
