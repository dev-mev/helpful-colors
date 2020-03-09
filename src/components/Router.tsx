import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import SwatchDetail from "./SwatchDetail";
import NotFound from "./NotFound";

const Router = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/swatches/:hex" component={SwatchDetail} />
      <Route path="/colors/:color" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
