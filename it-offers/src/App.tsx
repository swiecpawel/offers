import React from "react";
import 'leaflet/dist/leaflet.css';
import "./App.css";
import Header from "./components/Header/Header";
import FilterBox from "./components/FilterBox/FilterBox";
import Layout from "./components/Layout/Layout";
import { Route, Switch, useLocation } from "react-router";
import SingUp from "./components/Pages/SingUp/SignUp";
import SingIn from "./components/Pages/SingIn/SingIn";
import AddOffer from "./components/Pages/AddOffer/AddOffer";


function App() {
  let location = useLocation();

  if (location.pathname === "/sing_in") return <SingIn />;
  else if (location.pathname === "/sing_up") return <SingUp />;
  else if (location.pathname === "/add-offer-form") return <AddOffer />;
  else {
    return (
      <>
        <Header />
        <Switch>
          <Route path={"/"} component={FilterBox} />
        </Switch>
        <Layout />
      </>
    );
  }
}

export default App;
