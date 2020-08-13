import React from "react";
import style from "./Header.module.css";
import NavButtons from "./NavButtons/NavButtons";
import RightBar from "./RightBar/RightBar";
import {useSelector} from "react-redux";
import {selectUser} from "../../slices/auth/authSlice";

interface Auth {
    id?: String,
    name: String,
    email?: String
}

const Header: React.FC = () =>{
    const auth: Auth = useSelector(selectUser);
    let dis = false;
    if(auth.name.length >= 1){
        dis = true;
    }
    return(
  <main className={style.Content}>
    <NavButtons />
    <RightBar disJob={dis} />
  </main>
)};

export default Header;
