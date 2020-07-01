import React from "react";
import style from "../../Header.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
const loginBut = () => (
  <Link to={"/sing_in"}>
    <button className={style.LogBut}>
      <div>Sing in&nbsp;</div>
      <div className={style.roof}>
        <IoIosArrowDown />
      </div>
    </button>
  </Link>
);

export default loginBut;
