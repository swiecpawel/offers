import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { authUser } from "../../../slices/auth/authSlice";
import style from "./SingIn.module.css";
import Header from "../../Header/Header";

const SingIn: React.FunctionComponent = () => {
  const myRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const [currentUser, logUser] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const enterAllFields = () => {
    if (null !== myRef.current) {
      changeInnerText(myRef.current, "Enter All Fields");
      setTimeout(() => {
        if (null !== myRef.current) changeInnerText(myRef.current, "");
      }, 1000);
    }
  };
  function changeInnerText(el: HTMLElement, value: string) {
    el.innerText = value;
  }
  let token = localStorage.getItem("token");
  const nUser = () => {
    dispatch(authUser(currentUser));
    /*logUser({ password: "", email: "" });*/
    if (null !== myRef.current) {
      changeInnerText(myRef.current, `${token}`);
      setTimeout(() => {
        if (null !== myRef.current) changeInnerText(myRef.current, `${token}`);
        history.push("/");
      }, 1000);
    }
  };
  const isNotEmpty = () => {
    return currentUser.email !== "" && currentUser.password !== "";
  };
  return (
    <>
      <Header />
      <div className={style.Content}>
        <div className={style.logBox}>
          <div>Example</div>
          <div><h1>Get stared for free</h1></div>
          <div> Email Address:</div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={currentUser.email}
              onChange={(e) => {
                logUser({ ...currentUser, email: e.target.value });
              }}
            />
          </div>
          <div>Password:</div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={currentUser.password}
              onChange={(e) => {
                logUser({ ...currentUser, password: e.target.value });
              }}
            />
          </div>

          <button
            className={style.buttonSubmit}
            onClick={() => {
              isNotEmpty() ? nUser() : enterAllFields();
            }}
          >
            Log In
          </button>
          <div className={style.errBox} ref={myRef}></div>
          <div>
            New Account?{" "}
            <NavLink className={style.register} to={"/sing_up"}>
              Register
            </NavLink>
          </div>
        </div>
        <div className={style.imageBox}>

        </div>
      </div>
    </>
  );
};
export default SingIn;
