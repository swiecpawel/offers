import React, {useEffect } from "react";
import { OfferType, selectOffers } from '../../../features/offer/offerSlice'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllOffers } from '../../../features/offer/offerSlice'
import style from './Offers.module.css'
import Offer from './Offer/Offer'

const Offers = () => {

    const dispatch = useDispatch();

    const currentOffers: OfferType[] = useSelector(selectOffers);

    return (

       <main className={style.Content}>
            {
                currentOffers.map((offer:OfferType) => {
                    return <Offer key={`${offer._id}`}  language={`${offer.technology.tech}`}>
                        <div className={style.mainTech}>Main tech: {offer.technology.tech} </div>
                        <div>Name: {offer.shortName} </div></Offer>
                })
            }

        </main>
    )
};


export default Offers