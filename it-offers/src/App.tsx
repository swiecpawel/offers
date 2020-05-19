
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import FilterBox from './components/FilterBox/FilterBox';
import Layout from './components/Layout/Layout';
import {Route, Switch} from "react-router";

function App() {
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
