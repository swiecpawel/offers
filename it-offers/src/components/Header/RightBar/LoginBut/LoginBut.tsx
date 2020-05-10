import React from "react";
import style from '../../Header.module.css';
import { IoIosArrowDown } from 'react-icons/io';
const loginBut = () => (
    <button className={style.LogBut}>
        <div>Sing in&nbsp;</div><div className={style.roof}><IoIosArrowDown/></div>
    </button>
);

export default loginBut;