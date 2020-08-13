import React from "react";
import style from "../../Header.module.css";
import {Link} from "react-router-dom";

interface PostProps {
    dis: boolean;
}

const postJobBut: React.FC<PostProps> = ({dis}) => (
  <Link to="add-offer-form">
    <button className={style.PostJob} disabled={!dis}>Post Job</button>
  </Link>
);

export default postJobBut;
