import React from "react";
import { useParams } from "react-router";
import style from "./DetailsOffer.module.css";
import { MdDomain, MdShowChart, MdPeople, MdTimelapse } from "react-icons/md";
import { AiFillFile } from "react-icons/ai";
import {
  OfferType,
  selectOffers,
} from "../../../../../slices/offer/offerSlice";
import { useSelector } from "react-redux";

const DetailsOffer = () => {
  let { offerID } = useParams();

  const currentOffers: OfferType[] = useSelector(selectOffers);

  const myOffer: OfferType[] = currentOffers.filter(
    (offer) => offer._id === offerID
  );

  const offer = myOffer[0];

  if (offer !== undefined && offerID !== null) {
    return (
      <main className={style.Content}>
        <div className={style.headOffer}>
          <div className={style[`${offer.mainTechnology}`]} >
            <div className={style.headerContent}>
              <div className={style.logo}>
                <div className={style.logoInside}>
                  LOGO
                </div>
              </div>
              <div className={style.title}>
                <div className={style.subtitle1}>{offer.salaryFrom} - {offer.salaryTo} {offer.currency} net/month</div>
                <div className={style.subtitle2}>{offer.title}</div>
                <div className={style.subtitle1}>{offer.street} {offer.city}</div>
              </div>
            </div>
            <div className={style.boxes}>
              <div className={style.box}>
                <div className={style.circle}>
                  <MdDomain color={"rgb(255, 82, 82)"}/>
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
                <div>{offer.experienceLevel}</div>
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


        <div className={style.descriptionTitle}>Description</div>
        <div className={style.description}>
          {offer.jobDescription}
        </div>
      </main>
    );
  } else {
    return <div>Incorrect Path</div>;
  }
};

export default DetailsOffer;
