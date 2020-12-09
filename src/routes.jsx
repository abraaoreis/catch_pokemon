import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "pages/Home";
import MapPage from "pages/Map";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact render={props=><Home/>} path="/" />
        <Route exact component={MapPage} path="/map" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
