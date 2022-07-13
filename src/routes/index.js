import React from "react";
import { Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import Vitrine from "../pages/Vitrine/Vitrine";
import DashBoardPJ from "../pages/DashBoard/index";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import RegisterPartiner from "../pages/Register/RegisterPartiner";
import Cart from "../pages/Cart/Cart";
import Register from "../pages/Register/Register";
import LoginPartiner from "../pages/LoginPartiner/Login";
import Contato from "../pages/Contato";
import Blog from "../pages/Blog";
import About from "../pages/About";
=======
import DashBoard from "../pages/DashBoard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
>>>>>>> 1d8d36ebec5555081256e61aab7b28c9dc74f480

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route exact path={"/login"}>
        <Login />
      </Route>
<<<<<<< HEAD
      <Route exact path={"/loginPartiner"}>
        <LoginPartiner />
      </Route>
      <Route exact path={"/register"}>
        <Register />
      </Route>
      <Route exact path={"/registerPartiner"}>
        <RegisterPartiner />
      </Route>
      <Route exact path={"/vitrine"}>
        <Vitrine />
      </Route>

      <Route exact path={"/dashboardPartiner"}>
        <DashBoardPJ />
      </Route>

      <Route exact path={"/cart"}>
        <Cart />
      </Route>

      <Route exact path={"/contato"}>
        <Contato />
      </Route>
      <Route exact path={"/blog"}>
        <Blog />
      </Route>
      <Route exact path={"/about"}>
        <About />
=======
      <Route exact path={"/register"}>
        <Register />
      </Route>
      <Route exact path={"/dashboard"}>
        <DashBoard />
>>>>>>> 1d8d36ebec5555081256e61aab7b28c9dc74f480
      </Route>
    </Switch>
  );
};

export default Routes;
