import React from "react";
import style from "../../Header.module.css";
import { Link } from "react-router-dom";

const postJobBut: React.FunctionComponent = () => (
  <Link to="add-offer-form">
    <button className={style.PostJob}>Post Job</button>
  </Link>
);

export default postJobBut;
