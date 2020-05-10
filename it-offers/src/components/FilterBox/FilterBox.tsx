import React from "react";
import style from "./FilterBox.module.css";
import FilterItem from './FilterItem/FilterItem';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiPhp, DiRuby, DiPython, DiJava, DiDotnet, DiScala, DiJsBadge } from 'react-icons/di';
import { FaMobileAlt } from 'react-icons/fa';
import { GoSearch } from 'react-icons/go';
import { GiOrbWand, GiVrHeadset, GiCheckedShield } from 'react-icons/gi';
import { MdVideogameAsset } from 'react-icons/md';
import { IoLogoBitcoin } from 'react-icons/io';
import { Link } from 'react-router-dom';

const texts =[{text: 'ALL', lang: 'all'}, {text: 'C++', lang: 'cpp'}, {text: 'Dev Ops', lang:'dev'}];
const icons = [{icon: <DiJsBadge size={25}/>, lang: 'javascript'}, {icon: <AiFillHtml5 size={25}/>, lang: 'html'},
    {icon: <DiPhp size={45}/>, lang:'html'}, {icon: <DiRuby size={25}/>, lang:'ruby'},
    {icon: <DiPython size={30}/>, lang:'python'}, {icon: <DiJava size={40}/>, lang:'java'},
    {icon: <DiDotnet size={40}/>, lang:'net'}, {icon: <DiScala size={40}/>, lang:'scala'},
    {icon: <FaMobileAlt size={30}/>, lang:'mobile'}, {icon: <GoSearch size={25}/>, lang: 'testing'},
    {icon: <GiOrbWand size={30}/>, lang:'UX'}, {icon: <GiVrHeadset size={30}/>, lang: 'PM'},
    {icon: <MdVideogameAsset size={30}/>, lang:'game'}, {icon: <IoLogoBitcoin size={30}/>, lang:'bitchain'},
    {icon: <GiCheckedShield size={30}/>, lang: 'security'}
];
const filterBox = () => (
    <main className={style.Content}>

        {texts.map(text => <Link to={`/${text.lang}`}><FilterItem>{text.text}</FilterItem></Link>)}
        {
            icons.map((icon, index) => {
                return <Link to={`/${icon.lang}`}><FilterItem>{icon.icon} </FilterItem></Link>
            })
        }
    </main>
);

export default filterBox;