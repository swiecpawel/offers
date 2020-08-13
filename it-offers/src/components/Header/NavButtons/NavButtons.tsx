import React from "react";
import styles from "./NavButtons.module.css";
import {MdDomain, MdWork} from "react-icons/md";
import {FaRegNewspaper} from "react-icons/fa";
import {GiSuitcase} from "react-icons/gi";
import Logo from "./Logo/Logo";
import NavButton from "./NavButton/NavButton";
import {Link} from "react-router-dom";

const navButtons: React.FunctionComponent = () => (
  <div className={styles.Content}>
    <Link to={"/"}>
      <Logo />
    </Link>
    <NavButton name="Job offers">
      <MdWork size={25} />
    </NavButton>
    <NavButton name="Brand Stories">
      <MdDomain size={25} />
    </NavButton>
    <NavButton name="Just Geek IT">
      <FaRegNewspaper size={25} />
    </NavButton>
    <NavButton name="MatchMaking">
      <GiSuitcase size={30} />
    </NavButton>
  </div>
);

export default navButtons;
