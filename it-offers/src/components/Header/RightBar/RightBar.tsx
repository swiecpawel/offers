import React from "react";
import styles from "./RightBar.module.css";
import LoginBut from "./LoginBut/LoginBut";
import PostJobBut from "./PostJobBut/PostJobBut";
import Menu from "./Menu/Menu";

interface RightBarProps {
    disJob:boolean
}

const rightBar: React.FC<RightBarProps> = ({disJob}) => (
  <div className={styles.Content}>
    <PostJobBut dis={disJob} />
    <LoginBut />
    <Menu />
  </div>
);

export default rightBar;
