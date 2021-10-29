import React from "react";
import { Login } from "@/presentation/pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "@/presentation/styles/global.scss";
export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};
