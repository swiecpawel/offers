import React, {ReactNode} from "react";
import style from './../FilterBox.module.css'


interface PropsFilter {
    language: string;
    children: ReactNode;
}

const filterItem  = ({language, children }: PropsFilter ) => (
    <div className={`${style.lang}`}>{children}</div>
);

export default filterItem;