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
import {NavLink, useLocation} from 'react-router-dom';
import { fetchOffersByTech } from "../../features/offer/offerSlice";
import { useDispatch } from "react-redux";

interface TextObject {
    text: string,
    lang: string

}

interface IconObject {
    icon: any,
    lang: string
}

const texts: Array<TextObject>  =[{text: 'ALL', lang: 'all'}, {text: 'C++', lang: 'cpp'}, {text: 'Dev Ops', lang:'dev'}];
const icons: Array<IconObject> = [{icon: <DiJsBadge size={25}/>, lang: 'javascript'}, {icon: <AiFillHtml5 size={25}/>, lang: 'html'},
    {icon: <DiPhp size={45}/>, lang:'php'}, {icon: <DiRuby size={25}/>, lang:'ruby'},
    {icon: <DiPython size={30}/>, lang:'python'}, {icon: <DiJava size={40}/>, lang:'java'},
    {icon: <DiDotnet size={40}/>, lang:'net'}, {icon: <DiScala size={40}/>, lang:'scala'},
    {icon: <FaMobileAlt size={30}/>, lang:'mobile'}, {icon: <GoSearch size={25}/>, lang: 'testing'},
    {icon: <GiOrbWand size={30}/>, lang:'UX'}, {icon: <GiVrHeadset size={30}/>, lang: 'PM'},
    {icon: <MdVideogameAsset size={30}/>, lang:'game'}, {icon: <IoLogoBitcoin size={30}/>, lang:'bitchain'},
    {icon: <GiCheckedShield size={30}/>, lang: 'security'}
];



const FilterBox = () => {
    const  dispatch = useDispatch();

    let location = useLocation();
    let curPath = location.pathname.substr(1);


    dispatch(fetchOffersByTech(curPath));


    return (

        <main className={style.Content}>

            {
                texts.map((text:TextObject)=> {
                return <NavLink isActive={(_, {pathname}) => [`/${text.lang}`, "/all"].includes(pathname)}
                activeClassName={style[text.lang]} key={text.lang} to={`/${text.lang}`}><FilterItem language={`${text.lang}`}>
                <div onClick={() => dispatch(fetchOffersByTech(`${text.lang}`))}>{text.text}</div>
                </FilterItem></NavLink>
                })
            }

                {
                icons.map((icon: IconObject) => {
                    return <NavLink isActive={(_, {pathname}) => [`/${icon.lang}`, "/all"].includes(pathname)}
                                    activeClassName={style[icon.lang]} key={`icon${icon.lang}`} to={`/${icon.lang}`}><FilterItem
                        language={`${icon.lang}`}>
                        <div onClick={() => dispatch(fetchOffersByTech(`${icon.lang}`))}>{icon.icon}</div>
                    </FilterItem></NavLink>
                })
            }
        </main>
    );
};

export default FilterBox;