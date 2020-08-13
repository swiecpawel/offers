import React from "react";
import style from "./Offer.module.css";
import {FaMapMarkerAlt} from "react-icons/fa";
import {MdDomain} from "react-icons/md";
import {findById} from "../../../../slices/oneOfferSlice/oneOfferSlice";
import {useDispatch} from "react-redux";

export interface TechsType {
  tech: String;
  level: Number | String;
}

interface PropsOffer {
  offerId: String;
  language: String;
  title: String;
  logo: String;
  city: String;
  compName: String;
  salaryFrom: String;
  salaryTo: String;
  currency: String;
  technologies: Array<TechsType>;
  date: String;
}

const Offer: React.FC<PropsOffer> = ({
  offerId,
  language,
  title,
  logo,
  city,
  compName,
  salaryFrom,
  salaryTo,
  currency,
  technologies,
  date,
}) => {
  const dispatch = useDispatch();
  const techs = technologies.slice(0, 3).map((t, index) => {
    return (
      <div key={`${t.tech}${index}` + Math.random()} className={style.techBox} >
        {t.tech}
      </div>
    );
  });
  const separateThousands = (x: String) => {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const myDate = new Date();
  const nowDate = new Date(
    myDate.getFullYear(),
    myDate.getMonth(),
    myDate.getDate()
  );
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);

  const createdDate = new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day)
  );
  const timeBetween =
    (nowDate.getTime() - createdDate.getTime()) / (1000 * 3600 * 24);

  const pastDays = () => {
    if (timeBetween <= 1) {
      return <div className={style.techBoxBlue}>New </div>;
    } else {
      return <div className={style.techBox}>{timeBetween}d ago </div>;
    }
  };

  return (
    <main className={style.Content} onClick={() => dispatch(findById(`${offerId}`))}>
      <div className={style.SubLeft}>
        <div className={style[`${language}`]}></div>
        <div className={style.logo}>{logo}</div>
        <div className={style.column80}>
          <div className={style.title}>{title}</div>
          <div className={style.row}>
            <div className={style.smallIcon}>
              <MdDomain size={14} />
            </div>
            <div className={style.textItem}> {compName}</div>
            <div className={style.smallIcon}>
              <FaMapMarkerAlt size={14} />
            </div>
            <div className={style.textItem}> {city}</div>
          </div>
        </div>
      </div>

      <div className={style.SubRight}>
        <div className={style.column80}>
          <div className={style.rowRight}>
            <div className={style.salary}>
              {separateThousands(salaryFrom)} - {separateThousands(salaryTo)}{" "}
              {currency}
            </div>
            {pastDays()}
          </div>
          <div className={style.rowRightReverse}>{techs}</div>
        </div>
      </div>
    </main>
  );
};

export default Offer;
