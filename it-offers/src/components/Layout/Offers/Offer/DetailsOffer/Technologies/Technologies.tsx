import React from "react";
import style from "./Technologies.module.css";
import Rating from "react-rating";
import {GiPlainCircle} from "react-icons/gi";

interface TechnologiesProps {
  tech: String;
  level: number;
}

const techLvl: any | string = {
  1: "nice to have",
  2: "junior",
  3: "regular",
  4: "advanced",
  5: "master",
};

const Technologies: React.FC<TechnologiesProps> = ({ tech, level }) => {
  return (
    <div className={style.column}>
      <div className={style.rating}>
        <div>
          <Rating
            initialRating={level}
            emptySymbol={<GiPlainCircle size={15} color={"#BFC5D2"} />}
            fullSymbol={<GiPlainCircle size={15} color={"#FF4081"} />}
            readonly
          />
        </div>
      </div>
      <div className={style.tech}> {tech}</div>
      <div className={style.level}> {techLvl[`${level}`]} </div>
    </div>
  );
};

export default Technologies;
