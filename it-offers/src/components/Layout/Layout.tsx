import React from "react";
import style from './Layout.module.css';
import Map from './Map/Map'
import Offers from './Offers/Offers'
import AddOffer from "../Pages/AddOffer/AddOffer";
import {Route} from "react-router";


const layout = () => (

    <div className={style.Content}>
        <Route path='add-offer-form' component={AddOffer} />
        <Offers />
        <Map />
    </div>
);

export default layout;