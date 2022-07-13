import React from "react";
import { Switch, Route } from "react-router-dom";

import DashBoard from "../pages/DashBoard";

import Home from "../pages/Home";
import Login from "../pages/Login";

import RegisterPartiner from "../pages/Register/RegisterPartiner";
import Cart from "../pages/Cart/Cart";
import Register from "../pages/Register/Register";
import LoginPartiner from "../pages/LoginPartiner/Login";
import PageCompany from "../pages/PageCompany";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/dashboard">
        <DashBoard />
      </Route>
      <Route path="/company">
        <PageCompany />
      </Route>
    </Switch>
  );
};

export default Routes;
