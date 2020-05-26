
import React from "react";
import {useParams} from "react-router";
import style from './DetailsOffer.module.css'
import {OfferType, selectOffers} from "../../../../../slices/offer/offerSlice";
import {useSelector} from "react-redux";


const DetailsOffer = () => {

    let { offerID } = useParams();


    const currentOffers: OfferType[] = useSelector(selectOffers);

    const myOffer: OfferType[] =  currentOffers.filter(offer => offer._id === offerID);

    const offer = myOffer[0];


    if(offer !== undefined && offerID !== null){
    return (
    <main className={style.Content}>
        <div className={style.Content}>
        Company Name {offer.shortName}, Company size: {offer.companySize}, {offer.salaryFrom} to {offer.salaryTo}
          <div>
            {offer.jobDescription}
            </div>
        </div>
    </main>)
    } else {
        return <div>Incorrect Path</div>
    }
};

export default DetailsOffer;

