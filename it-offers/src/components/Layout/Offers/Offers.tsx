import React, {ReactNode} from "react";
import { OfferType, selectOffers } from '../../../slices/offer/offerSlice'
import { useSelector } from 'react-redux';
import style from './Offers.module.css'
import Offer from './Offer/Offer'
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router-dom";


interface PropsTitle {
    title: String
    children: ReactNode
}

const Offers = () => {

    const currentOffers: OfferType[] = useSelector(selectOffers);

    return (

       <main className={style.Content}>

           { currentOffers.map((offer: OfferType) => {
                   return (
                       <>

                            <NavLink key={`NavLinkKey${offer._id}`} to={`/offer/${offer._id}`}>
                               <Offer key={`${offer._id}`} language={`${offer.technology.tech}`}>

                                   <div className={style.mainTech}>Main tech: {offer.technology.tech} </div>
                                   <div>Name: {offer.shortName} </div>

                               </Offer>

                            </NavLink>

                       </>
                       )
               })
           }

        </main>
    )
};


export default withRouter(Offers);