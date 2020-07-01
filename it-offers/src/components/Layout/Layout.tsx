import React from "react";
import style from "./Layout.module.css";
import Map from "./Map/MyMap";
import Offers from "./Offers/Offers";
import { Route, Switch, useLocation } from "react-router";
import DetailsOffer from "./Offers/Offer/DetailsOffer/DetailsOffer";

const Layout: React.FunctionComponent = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className={style.Content}>
      <Switch>
        <Route exact path="/offer/:offerID" component={DetailsOffer} />
        <Route path="/" component={Offers} />
      </Switch>
      <Map />
    </div>
  );
};

export default Layout;
