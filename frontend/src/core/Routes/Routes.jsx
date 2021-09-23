import { Switch, Route } from "react-router";
import React from "react";
import LandingPage from "../../pages/LandingPage/LandingPage";
import Register from "../../pages/Register/Register";
import Data from "../../pages/data/Data";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/cita">
          <Register></Register>
        </Route>
        <Route path="/datos">
          <Data></Data>
        </Route>
        <Route path="/">
          <LandingPage></LandingPage>
        </Route>
      </Switch>
    </div>
  );
}
