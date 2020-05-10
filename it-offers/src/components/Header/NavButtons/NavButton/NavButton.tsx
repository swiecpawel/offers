import React, {ReactNode} from "react";
import styles from './NavButton.module.css'

interface Props {
    name: string;
    children: ReactNode;
}

const navButton = ({name, children}: Props) => {

    return <div className={styles.NavButton}>
        <div>{children}</div>
        <div>{name}</div>
    </div>

};

export default navButton;