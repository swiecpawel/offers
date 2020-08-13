import React from "react";
import {IoIosMenu} from "react-icons/io";
import style from "./Menu.module.css";

const menu: React.FunctionComponent = () => (
  <div className={style.Content}>
    <IoIosMenu size={25} />
  </div>
);

export default menu;
