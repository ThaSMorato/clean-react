import React from "react";
import { Login } from "@/presentation/pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};
