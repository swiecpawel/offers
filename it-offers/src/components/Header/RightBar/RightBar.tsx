import React from "react";
import styles from "./RightBar.module.css";
import LoginBut from "./LoginBut/LoginBut";
import PostJobBut from "./PostJobBut/PostJobBut";
import Menu from "./Menu/Menu";

const rightBar = () => (
  <div className={styles.Content}>
    <PostJobBut />
    <LoginBut />
    <Menu />
  </div>
);

export default rightBar;
