import React, { ReactNode } from "react";
import style from "./NavButton.module.css";

interface Props {
  name: string;
  children: ReactNode;
}

const navButton: React.FC<Props> = ({ name, children }) => {
  return (
    <div className={style.NavButton}>
      <div className={style.row}>{children}</div>
      <div className={style.row}>{name}</div>
    </div>
  );
};

export default navButton;
