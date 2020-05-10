import React from "react";
import styles from './NavButtons.module.css'
import { MdWork , MdDomain } from 'react-icons/md';
import { FaRegNewspaper } from 'react-icons/fa';
import { GiSuitcase } from 'react-icons/gi';
import Logo from './Logo/Logo'
import NavButton from "./NavButton/NavButton";

const navButtons = () => (
    <div className={styles.Content}>
        <Logo />
        <NavButton name="Job offers"><MdWork/></NavButton>
        <NavButton name="Brand Stories"><MdDomain/></NavButton>
        <NavButton name="Just Geek IT"><FaRegNewspaper/></NavButton>
        <NavButton name="MatchMaking"><GiSuitcase/></NavButton>
    </div>
);

export default navButtons;