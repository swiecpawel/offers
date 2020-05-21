import style from "./DetailsOffer.module.css";
import React from "react";
import {useParams} from "react-router";
import {OfferType, selectOffers} from "../../../../../slices/offer/offerSlice";
import {useSelector} from "react-redux";

const DetailsOffer = () => {

    let { offerID } = useParams();


    const currentOffers: OfferType[] = useSelector(selectOffers);

    const offer: OfferType[] =  currentOffers.filter(offer => offer._id === offerID);

    if(offer[0] !== undefined && offerID !== null){
    return (
    <main className={style.Content}>
        {offer[0].salaryFrom} to {offerID}

    </main>)
    } else {
        return <div>Incorrect Path</div>
    }
};

export default DetailsOffer;

