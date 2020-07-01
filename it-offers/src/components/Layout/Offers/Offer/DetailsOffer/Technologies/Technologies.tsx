import React from "react";
import style from "./Technologies.module.css";

interface TechnologiesProps {
    tech: String;
    level: String
}



const Technologies: React.FC<TechnologiesProps> = ({tech, level}) => {
  return (
    <div className={style.column}>
      <div> </div>
      <div> {tech}</div>
      <div> {level} </div>
    </div>
  );
};

export default Technologies;