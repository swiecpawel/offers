import React from "react";
import {useHistory, useParams} from "react-router";
import style from "./DetailsOffer.module.css";
import { MdDomain, MdShowChart, MdPeople, MdTimelapse } from "react-icons/md";
import { AiFillFile } from "react-icons/ai";
import {
  OfferType,
  selectOffers,
} from "../../../../../slices/offer/offerSlice";
import { useSelector } from "react-redux";
import imageNO from "../../../../../assets/no-offer.f50329e6.png";
import Technologies from "./Technologies/Technologies";

const DetailsOffer: React.FC = () => {
  let { offerID } = useParams();

  const hist = useHistory();
  console.log(offerID);
  const back = () => {
    hist.goBack();
  };

  const currentOffers: OfferType[] = useSelector(selectOffers);

  const lvlExp: any | string = {
    1: "Junior",
    2: "Mid",
    3: "Senior",
  };
  const techLvl: any | string = {
    1: "nice to have",
    2: "junior",
    3: "regular",
    4: "advanced",
    5: "master"
  };

  const myOffer: OfferType[] = currentOffers.filter(
    (offer) => offer._id === offerID
  );

  const offer = myOffer[0];
  if (offer === undefined) {
    return <div className={style.noPath}>
      <img src={imageNO} alt="Sorry, we couldn't find this offer." className={style.imageNO}></img>
      <div>Sorry, we couldn't find this offer</div>
      <div onClick={back} className={style.back}>Go Back</div>
    </div>
  } else {
    return (
      <main className={style.Content}>
        <div className={style.headOffer}>
          <div className={style[`${offer.mainTechnology}`]}>
            <div className={style.headerContent}>
              <div className={style.logo}>
                <div className={style.logoInside}>LOGO</div>
              </div>
              <div className={style.title}>
                <div className={style.subtitle1}>
                  {offer.salaryFrom} - {offer.salaryTo} {offer.currency}{" "}
                  net/month
                </div>
                <div className={style.subtitle2}>{offer.title}</div>
                <div className={style.subtitle1}>
                  {offer.street} {offer.city}
                </div>
              </div>
            </div>
            <div className={style.boxes}>
              <div className={style.box}>
                <div className={style.circle}>
                  <MdDomain color={"rgb(255, 82, 82)"} />
                </div>
                <div>{offer.shortName}</div>
                <div className={style.smallTitle}>Company name</div>
              </div>
              <div className={style.box}>
                <div className={style.circle}>
                  <MdPeople color={"rgb(251, 140, 0)"} />
                </div>
                <div>{offer.companySize}</div>
                <div className={style.smallTitle}>Company size</div>
              </div>
              <div className={style.box}>
                <div className={style.circle}>
                  <AiFillFile color={"rgb(171, 71, 188)"} />
                </div>
                <div>{offer.employmentType}</div>
                <div className={style.smallTitle}>EMP. type</div>
              </div>
              <div className={style.box}>
                <div className={style.circle}>
                  <MdShowChart color={"rgb(55, 71, 79)"} />
                </div>
                <div>{lvlExp[`${offer.experienceLevel}`]}</div>
                <div className={style.smallTitle}>EXP. lvl</div>
              </div>
              <div className={style.box}>
                <div className={style.circle}>
                  <MdTimelapse color={"rgb(68, 138, 255)"} />
                </div>
                <div>New</div>
                <div className={style.smallTitle}>Added</div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.offerDetail}>
          <div className={style.descriptionTitle}>Description</div>
          <div className={style.description}>{offer.jobDescription}</div>
          <div className={style.descriptionTitle}>Tech stack</div>
          <div className={style.technologies}>{offer.technology.map((t) => (
                <Technologies
                    key={`${t._id}`}
                    tech={`${t.tech}`}
                    level={techLvl[`${t.level}`]}
                />))}
          </div>
        </div>
      </main>
    );
  }
};

export default DetailsOffer;
