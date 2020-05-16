
import React, {ReactNode} from "react";
import style from './Offer.module.css';
interface PropsOffer {
    language: string;
    children: ReactNode;
}

const offer = ({language, children} : PropsOffer) => (
    <main className={style.Content}>
        <div className={language}>{children}</div>
    </main>
);


export default offer;