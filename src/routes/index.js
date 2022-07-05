import React from "react";
import { Switch, Route } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
    </Switch>
  );
};

export default Routes;
