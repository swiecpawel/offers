/*
import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}
*/

import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import FilterBox from './components/FilterBox/FilterBox';
import Layout from './components/Layout/Layout';
import AddOffer from "./components/Pages/AddOffer/AddOffer";
import {Route, Switch} from "react-router";
import {useDispatch} from "react-redux";
import {fetchAllOffers, OfferType} from "./features/offer/offerSlice";
import {OffersType} from "./features/offer/offerSlice";
import {store} from "./app/store";

function App() {
    const [offers, setOffers] = useState(new Array<OfferType>());
    const dispatch = useDispatch()

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
