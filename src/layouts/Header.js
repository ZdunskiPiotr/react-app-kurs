import React from "react";
import { Switch, Route } from "react-router-dom";

import background from "../images/background.jpg";
import background2 from "../images/background2.jpg";
import background3 from "../images/background3.jpg";
import background4 from "../images/background4.jpg";
import error from "../images/error.jpg";

import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <Switch>
        <Route
          path="/"
          exact
          render={() => <img src={background} alt="las" />}
        />
        <Route
          path="/products"
          render={() => <img src={background2} alt="las" />}
        />
        <Route
          path="/contact"
          render={() => <img src={background3} alt="las" />}
        />
        <Route
          path="/admin"
          render={() => <img src={background4} alt="las" />}
        />
        <Route
          path="/login"
          render={() => <img src={background4} alt="login" />}
        />
        <Route render={() => <img src={error} alt="las" />} />
      </Switch>
    </>
  );
};

export default Header;
