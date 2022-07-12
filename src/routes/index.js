import React from "react";
import { Switch, Route } from "react-router-dom";
import DashBoardUser from "../pages/DashBoardUser/DashBoardUser";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import RegisterPartiner from "../pages/Register/RegisterPartiner";
import Cart from "../pages/Cart/Cart";
import Register from "../pages/Register/Register";
import LoginPartiner from "../pages/LoginPartiner/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route exact path={"/login"}>
        <Login />
      </Route>
      <Route exact path={"/loginPartiner"}>
        <LoginPartiner />
      </Route>
      <Route exact path={"/register"}>
        <Register />
      </Route>
      <Route exact path={"/registerPartiner"}>
        <RegisterPartiner />
      </Route>
      <Route exact path={"/dashboard"}>
        <DashBoardUser />
      </Route>
      <Route exact path={"/cart"}>
        <Cart />
      </Route>
    </Switch>
  );
};

export default Routes;
