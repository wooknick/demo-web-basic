import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Routes/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Routes;
