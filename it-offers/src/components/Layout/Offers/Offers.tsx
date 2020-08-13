import React from "react";
import {OfferType, selectOffers} from "../../../slices/offer/offerSlice";
import {useSelector} from "react-redux";
import style from "./Offers.module.css";
import Offer from "./Offer/Offer";
import {NavLink, withRouter} from "react-router-dom";

const Offers: React.FunctionComponent = () => {
  const currentOffers: OfferType[] = useSelector(selectOffers);

  return (
    <main className={style.Content}>
      {currentOffers.map((offer: OfferType) => (
        <NavLink key={`NavLinkKey${offer._id}`} to={`/offer/${offer._id}`}>
          <Offer
            offerId={`${offer._id}`}
            key={`${offer._id}`}
            language={`${offer.mainTechnology}`}
            title={`${offer.title}`}
            logo={`logo`}
            city={`${offer.city}`}
            compName={`${offer.shortName}`}
            salaryFrom={`${offer.salaryFrom}`}
            salaryTo={`${offer.salaryTo}`}
            currency={`${offer.currency}`}
            technologies={offer.technology}
            date={offer.date}
          />
        </NavLink>
      ))}
    </main>
  );
};

export default withRouter(Offers);
