import React, {ReactNode} from "react";
import style from './../FilterBox.module.css'
import { Children } from '../../Header/Header'



const filterItem  = ({ children }: Children ) => (
    <div className={style.lang}>{children}</div>
);

export default filterItem;