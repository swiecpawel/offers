
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import FilterBox from './components/FilterBox/FilterBox';
import Layout from './components/Layout/Layout';
import {Switch, useLocation} from "react-router";
import SingIn from "./components/Pages/SingIn/SingIn";

function App() {
    let location = useLocation();
    if(location.pathname === '/sing_in')return <SingIn/>;
    else
    return (
      <>
        <Header />
        <Switch>
            <FilterBox/>
        </Switch>
        <Layout />
      </>
  );
}

export default App;
