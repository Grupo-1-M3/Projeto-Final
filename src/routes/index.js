import React from "react";
import { Switch, Route } from "react-router-dom";

import DashBoard from "../pages/DashBoard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register/Register";
import Cart from "../pages/Cart/Cart";
import PageCompany from "../pages/PageCompany";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route exact path={"/login"}>
        <Login />
      </Route>
      <Route exact path={"/register"}>
        <Register />
      </Route>
      <Route exact path={"/dashboard"}>
        <DashBoard />
      </Route>
      <Route exact path={"/cart"}>
        <Cart />
      </Route>
      <Route exact path={"/PageCompany"}>
        <PageCompany />
      </Route>
    </Switch>
  );
};

export default Routes;
