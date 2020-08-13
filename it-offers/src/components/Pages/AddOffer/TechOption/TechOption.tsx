import React, {useState} from "react";
import Rating from "react-rating";
import style from "./TechOption.module.css";
import {GiPlainCircle} from "react-icons/gi";

interface TechProps {
  tech: String;
}

const TechOption: React.FC<TechProps> = ({ tech }) => {
  const [myRate, setRate] = useState(2);
  const lvl: any | string = {
    1: "Nice to have",
    2: "Junior",
    3: "Mid",
    4: "Advanced",
    5: "Master",
  };
  return (
    <div className={style.col}>
      <div>{tech}</div>
      <div>
        <Rating
          initialRating={myRate}
          emptySymbol={<GiPlainCircle size={15} color={"#BFC5D2"} />}
          fullSymbol={<GiPlainCircle size={15} color={"#FF4081"} />}
          onClick={(rate) => setRate(rate)}
        />
      </div>
      <div>{`${lvl[`${myRate}`]}`}</div>
    </div>
  );
};

export default TechOption;
