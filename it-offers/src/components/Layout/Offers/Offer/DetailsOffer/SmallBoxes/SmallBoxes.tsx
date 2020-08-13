import React from "react";
import {IconBaseProps} from "react-icons";
import style from './SmallBoxes.module.css';

export interface SmallBoxesProps {
    icon: IconBaseProps;
    titleFromOffer: String;
    title: String;


}

const SmallBoxes: React.FC<SmallBoxesProps> = ({ title, icon, titleFromOffer }) => {
    return (
        <div className={style.box}>
            <div className={style.circle}>
                {icon}
            </div>
            <div className={style.smallBox}>{titleFromOffer}</div>
            <div className={style.smallTitle}>{title}</div>
        </div>
    );
};

export default SmallBoxes;