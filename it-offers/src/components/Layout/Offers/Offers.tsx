import React, {ReactNode} from "react";
import style from './Offerts.module.css';

const offers = (props: ReactNode) => (
    <div className={style.Content}>
        <ul>
            <li>  Oferta 1 </li>
            <li>  Oferta 2 </li>
            <li>  Oferta 3 </li>
            <li>  Oferta 4 </li>
            <li>  Oferta 5 </li>
        </ul>
    </div>

);

export default offers;